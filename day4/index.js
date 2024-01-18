import express from "express";
import mongoose from "mongoose";

const server = express();

// hỗ trợ code mongodb
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
    author: String, //objectID
    title: String,
    body: String,
    date: Date
});

const BlogModel = mongoose.model("blog", BlogPost);

//connect tới server mongodb
async function connectDb() {
    await mongoose.connect('mongodb://localhost/mindx');
}

server.get('/', (req, res) => {
    res.status(200).send('hello world!')
})

server.get("/blogs", async (req, res) => {
    const blogs = await BlogModel.find({});
    res.status(200).send(blogs)
})

// Thêm bài viết vào data 
server.post("/blogs", async (req, res) => {
    try {
        const Newblogs = await BlogModel.create({
            author: "naruto",
            title: "hello !",
            body: " hello every one !!!",
            date: new Date()
        })
        res.status(200).send(Newblogs)
    } catch (error) {
        console.log(error);
        res.status(500).send(" server error !!!")
    }

})

connectDb().then(
    server.listen(3000, () => {
        console.log('server is running !!!')
    })
);
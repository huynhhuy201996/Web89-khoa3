import express, { query } from "express";
import mongoose from "mongoose";

const server = express();

// hỗ trợ code mongodb
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

server.use(express.json());

const BlogPost = new Schema({
    author: String, //objectID
    title: String,
    body: String,
    date: String,

});

const BlogModel = mongoose.model("blog", BlogPost);

//connect tới server mongodb
async function connectDb() {
    await mongoose.connect('mongodb://localhost/mindx');
}

server.get('/', (req, res) => {
    res.status(200).send('hello world!')
})



// Thêm bài viết vào data 
server.post("/blogs", async (req, res) => {
    try {
        // const newBlog = new BlogModel({
        //   author: "Nam",
        //   title: "Hello",
        //   body: "Hello world from Mindx!",
        //   date: new Date(),
        // });

        // await newBlog.save();

        const body = req.body;
        // Validate input
        if (!body.author) throw new Error("Author field is required!");
        if (!body.title) throw new Error("Title field is required!");
        if (!body.body) throw new Error("Body field is required!");
        if (!body.date) throw new Error("Date field is required!");

        const newBlog = await BlogModel.create({
            author: body.author,
            title: body.title,
            body: body.body,
            date: body.date,
        });

        res.status(201).send(newBlog);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

// lấy tất cả trừ id bằng query params - lấy thông tin chung của toàn bộ database
server.get("/blogs", async (req, res) => {
    try {
        const query = req.query;
        const blogs = await BlogModel.find(query);
        res.status(200).send(blogs);
    } catch (error) {
        console.log(error);
        res.status(500).send('server error!!!')
    }
});

//get Id lấy mỗi ID_ lấy detail của 1 mặt hàng duy nhất
server.get("/blogs/:blogId", async (req, res) => {
    try {
        const blogId = req.params.blogId;
        const blog = await BlogModel.findById(blogId);
        res.status(200).send(blog);
    } catch (error) {
        console.log(error);
        res.status(500).send('server error !!!');

    };
});

connectDb().then(
    server.listen(3000, () => {
        console.log('server is running !!!')
    })
);
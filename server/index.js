const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
    .connect(
        "mongodb+srv://abhiiitr:Abhishek123@cluster0.l50gk6z.mongodb.net/chatbot?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("MongoDB connected!"))
    .catch((err) => console.log(err));

const Schema = mongoose.Schema;
const PostSchema = new Schema({
    question: {
        type: String,
        required: true,
    },
});

const Posts = mongoose.model("query", PostSchema); 

app.get("/", async (req, res) => {
    res.send({ data: "working" });
});

app.post("/", async (req, res) => {
    const newPost = new Posts({ question: req.body.request });

    await fetch(
        "https://65ca-35-245-36-111.ngrok.io/message/" + req.body.request
    )
        .then((response) => response.text())
        .then((data) => {
            let d = JSON.parse(data);
            let answer = d.response;
            if(answer == "Sorry, can't understand you" || answer == "Please give me more info" ||answer == "Not sure I understand" ||answer == "I am still here dude"){
                const resp = newPost.save();
            }
            res.send({ answer: answer });
        });
});

app.listen(4000, () => {
    console.log("server started Running on : 4000");
});

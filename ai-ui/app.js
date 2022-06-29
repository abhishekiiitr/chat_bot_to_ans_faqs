const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const https = require("https");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

var request = "";
var api_ans = "";
var question = [];
var answers = [];

app.get("/", (req, res) => {
    res.render("index", { questions: question, answer: answers });
});

app.post("/", async (req, res) => {
    request = req.body.request;
    question.push(request);
    try {
        return fetch(item);
    } catch (err) {
        console.log(err);
    }
    res.redirect("/");
});

function fetch(item) {
    https
        .get("https://027f-35-188-179-100.ngrok.io/message/" + item, (resp) => {
            resp.on("data", (d) => {
                data = JSON.parse(d);
                console.log(data);
                api_ans = data.response;
                answers.push(api_ans);
                console.log(api_ans);
            });
        })
        .on("error", (e) => {
            console.error(e);
        });
}
app.listen(3000, () => {
    console.log("server started");
});

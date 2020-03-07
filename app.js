const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const mongoose = require("mongoose");
const Router = require("koa-router");
const messages = require('./messages');
const app = new Koa();
const router = new Router();

// parses the body into an object: ctx.request.body
app.use(bodyParser());

// connect to the databse... but which collection ?
mongoose
    .connect("mongodb://mongo:27017/todos", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("connected to mongodb..."))
    .catch(err => console.log(err));

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("we are connected for sure");
});

const TodoSchema = new mongoose.Schema(
    {
        description: { type: String },
        done: { type: Boolean }
    },
    { timestamps: true }
);
const Todo = mongoose.model("Todo", TodoSchema);

router.get("/", ctx => {
    console.log("the router... works ?");
    ctx.body += messages;
});

router.get("/chores", async ctx => {
    console.log("we got a get request on the endpoint /chores");
    const list = await Todo.find();
    console.log(list);
    ctx.body = JSON.stringify(list);
});

router.post("/", ctx => {
    ctx.body = "that was a post request! It contains this:\n";
    ctx.body += JSON.stringify(ctx.request.body);
    ctx.body += "\n";
    const chore = new Todo({
        description: ctx.request.body.description,
        done: ctx.request.body.done
    });
    chore.save().then(() => console.log("the posted chore was written"));
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(5000);

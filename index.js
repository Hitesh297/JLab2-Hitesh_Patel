const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8888;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (request, response) => {
    response.render("index", { title: "Home" });
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})
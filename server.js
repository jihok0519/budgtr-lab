const express = require('express');
const budget = require('./models/budget.js');
const app = express();
const port = 3000;

app.get("/budgets", (req, res) => {
    res.render("index.ejs", {
        allBudgets: budget,
    });
});

app.get("/budgets/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/budgets", (req, res, next) => {

});

app.get("/budgets/:index", (req, res) => {
    res.render("show.ejs", {
        budgets: budget[req.params.index],
    });
});

app.listen(port, () => {
    console.log("Listening on port", port);
})
const express = require("express");
const app = express();
app.use(express.json()); // set datatype

app.listen(3000, console.log("hey"));

app.get("/", (req,res) => {
    res.send("hello");
});

const customers = [
    { title: "tanaka", id: 1},
    { title: "saito", id: 2},
    { title: "hashimoto", id: 3},
    { title: "suzuki", id: 4},
    { title: "ando", id: 5},
];

// GET method (get data)
app.get("/api/customers", (req,res) => {
    res.send(customers);
});

app.get("/api/customers/:id", (req,res) => {
    const customer = customers.find((c) => c.id === parseInt(req.params.id));
    res.send(customer);
});

//POST method (add data)
app.post("/api/customers", (req,res) => {
    const customer = {
        title: req.body.title,
        id: customers.length + 1,
    };
    customers.push(customer);
    res.send(customers);
});

// PUT method (upload data)
app.put("/api/customers/:id", (req,res) => {
    const customer = customers.find((c) => c.id === parseInt(req.params.id));
    customer.title = req.body.title;
    res.send(customer);
});

// DELETE method (delete data)
app.delete("/api/customers/:id", (req,res) => {
    const customer = customers.find((c) => c.id === parseInt(req.params.id));
    const index = customers.indexOf(customer);
    customers.splice(index, 1);
    res.send(customer);
});

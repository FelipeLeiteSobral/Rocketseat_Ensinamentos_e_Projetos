const express = require('express')

const app = express()

app.listen("3000")

//middleware
app.use(express.json())

usersList = []

app.route("/").post((req, res) => {
    const newUser = req.body;
    const userExists = usersList.find((user) => user.nome === newUser.nome);
    if (userExists) {
      return res.status(400).send({ error: "User already exists" });
    }
    usersList.push(newUser);
    res.status(201).send({newUser});
  });

app.route("/").get((req, res) =>
{
    res.send(usersList)
})
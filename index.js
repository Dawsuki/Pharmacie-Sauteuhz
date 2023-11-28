const express = require("express")
const fs = require("fs")

const app = express()

const PORT = 8080
//css
app.use("/css", express.static(__dirname + "/css/"))


//page principale
app.get("/", (_, res) => {
    const indexHTML = fs.readFileSync(__dirname + "/html/index.html", "utf-8")

    res.send(indexHTML)
})


//page client
app.get("/client", (_, res) => {
    const client = fs.readFileSync(__dirname + "/html/client.html", "utf-8")

    res.send(client)
})


//page stock
app.get("/stock", (_, res) => {
    const stock = fs.readFileSync(__dirname + "/html/stock.html", "utf-8")

    res.send(stock)
})


//page 404
app.get("/*", (_, res) => {
    const error = fs.readFileSync(__dirname + "/html/404.html", "utf-8")

    res.send(error)
})


app.listen(PORT, () => {
    console.log("le serveur est lancé sur le port: " + PORT)
})
const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
const expressLayout = require("express-ejs-layouts")
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on new port ${PORT}`);
});

app.set("views", path.join(__dirname, "/resources/views"));
app.set("view engine", "ejs");
app.use(expressLayout);

app.use(express.static(__dirname + "/public"));
app.get('/', (req, res)=> {
    res.render('home')
})
app.get('/cart',(req, res)=>{
  res.render('customers/cart')
})
app.get("/login", (req, res) => {
  res.render("auth/login");
});
app.get("/register", (req, res) => {
  res.render("auth/register");
});

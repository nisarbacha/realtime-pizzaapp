const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
const expressLayout = require("express-ejs-layouts")
app.get('/', (req, res)=> {
    res.render('home')
})


app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')
app.use(expressLayout);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on new port ${PORT}`);
});

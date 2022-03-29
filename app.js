// initialize express 
const express = require('express');
const app = express();


const { engine } = require('express-handlebars');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
// set views to views folder
app.set('views', './views');

// import styles
app.use(express.static('public'));

// tell program to listen on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`Listening on port ${port}...`)
});

app.get('/', (req, res) => {
    res.render('home', {msg:'Handlebars are Cool!'})
})
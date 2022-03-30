// initialize express 
const express = require('express');
const app = express();


const { engine } = require('express-handlebars');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
// set views to views folder
app.set('views', './views');

// import styles
app.use(express.static(__dirname + '/public'));

// tell program to listen on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`Listening on port ${port}...`)
});

app.get('/', (req, res) => {
    res.render('events-index', {events: events})
})

var events = [
  { title: "I am your first event", desc: "A great event that is super fun to look at and good", imgUrl: "../images/event3.jpeg"},
  { title: "I am your second event", desc: "A great event that is super fun to look at and good", imgUrl: "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OC85MTEvb3JpZ2luYWwvZ29sZGVuLXJldHJpZXZlci1wdXBweS5qcGVn" },
  { title: "I am your third event", desc: "A great event that is super fun to look at and good", imgUrl: "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OC85MTEvb3JpZ2luYWwvZ29sZGVuLXJldHJpZXZlci1wdXBweS5qcGVn" }
]
// INDEX
app.get('/events', (req, res) => {
  res.render('events-index', { events: events });
})

app.get('/events/new', (req, res) => {
    
})
app.post('/events', (req, res) => {

})
app.get('/events/:id', (req, res) => {
    
})
app.get('/events/:id/edit', (req, res) => {
    
})
app.delete('events/:id', (req, res) => {

})
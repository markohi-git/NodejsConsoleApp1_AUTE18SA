const express = require('express')
const app = express()
console.log("server start");
let notes = [
    {
        id: 1,
        content: "weofjwefho",
        important: true
    },
    {
        id: 2,
        content: "jwefwei",
        date: "2020-11-12T11:46:00.0001",
        important: false
    }
]
//get select
app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>")
})
app.get('/api/notes', (req, res) => {
    res.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    const note = notes.find(note => note.id == id)
    if (note) {
        res.json(note)
    }
    else {
        //ei löytynyt
        res.status(404).end();
    }
})
//delete delete
app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    notes = notes.filter(note => note.id !== id)
    //204 ei sisältöä
    res.status(204).end()
})
//post insert


//put update



app.listen(8080, () => {
    console.log('Server running')
})

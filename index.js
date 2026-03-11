const express = require('express')
const app = express()
app.use(express.json())


let persons = [
    { 
      id: 1,
      name: "Arto Hellas", 
      number: "040-123456"
    },
    { 
      id: 2,
      name: "Ada Lovelace", 
      number: "39-44-5323523"
    },
    { 
      id: 3,
      name: "Dan Abramov", 
      number: "12-43-234345"
    },
    { 
      id: 4,
      name: "Mary Poppendieck", 
      number: "39-23-6423122"
    }
]

app.post('/api/persons', (request, response) => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id)) 
    : 0

  const note = request.body
  note.id = maxId + 1

  persons = persons.concat(note)

  response.json(note)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
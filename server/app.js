const { isValid } = require("./script")

const express = require("express")
const app = express()
const port = 3001

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post("/api", (req, res) => {
  const string = req.body.string
  const result = isValid(string)

  console.log(result)
  res.json({ isValid: result })
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

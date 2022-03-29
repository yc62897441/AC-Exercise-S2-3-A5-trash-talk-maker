// include packages
const express = require("express")
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")
const trashTalkGenerate = require("./trashTalkGenerate")

// define server related variables
const app = express()
const port = 3000

// setting template engine
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }))
app.set('view engine', 'handlebars')

// setting static
app.use(express.static("public"))
// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get("/", (req, res) => {
  res.render("index")
})
app.post("/", (req, res) => {
  // 獲得使用者選取之職業，並生成垃圾話
  const occupation = req.body.occupations
  const trashTalk = trashTalkGenerate(occupation)

  // 生成「將使用者選取之職業保留在表單」所需之參數
  let engineer = false
  let designer = false
  let entrepreneur = false
  switch (occupation) {
    case "engineer":
      engineer = true
      break
    case "designer":
      designer = true
      break
    case "entrepreneur":
      entrepreneur = true
      break
  }

  res.render("index", { trashTalk: trashTalk, engineer, designer, entrepreneur })
})

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`The express server is on http://localhost:${port}`)
})
const express = require("express")
const app = express()
const port = 5000

const engine = require("express-handlebars").engine
app.engine("handlebars", engine())
app.set("view engine", "handlebars")

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    // res.render va chercher le 'views/layouts/main'
    // => le 'views/layouts/main, il va remplacer le {{{body}}}
    //    par le parametre de 'render'
    // ici le parametre c'est home
    res.render('home', {
        // utilistion du layout `custom.handlebars`
        layout: 'new'
    })
})

app.get("/about", (req, res) => {
    res.render('about')
})

app.get("/profile", (req, res) => {
    const name = "Kevin"

    res.render('profile', {
        name: "Benoit",
        isBenoit: name === "Benoit",
        names: [
            "Kevin",
            "Ahmed",
            "Vincent"
        ]
    })
})

app.get('/form/connexion', (req, res) => {
    res.render('connexion')
})

app.post('/form/signup', (req, res) => {
    console.log(req.body)
    const { username } = req.body
    res.render("/form/connexion", {
        name: username
    })

    res.redirect('/form/connexion')

})

app.listen(port, () => {
    console.log(`serveur is running on ${port}`)
})
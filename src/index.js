const path = require('path')
const express = require('express')
const viewsPath = path.join(__dirname, '../public/views')
const hbs = require('hbs')

const app = express()
 
const port = process.env.PORT || 3000 
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs');
app.set('views', viewsPath)
hbs.registerPartials(path.join(__dirname, '../public/views/partials/'))
app.use(express.static(publicDirectoryPath))

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`) // Testing purposes
})

app.get('', (req, res) => {
    res.render('index', {
        title: 'Palindrome',
        subtitle: 'Get your palindromic words checked!'
    })
}) 

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Palindrome',
        subtitle: 'About page'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Palindrome',
        subtitle: '404 - not found!',
        main: '404',
        message: 'Page not found. Oops!'
    })
})

app.get('/about/*', (req, res) => {
    res.render('404', {
        title: 'Palindrome',
        subtitle: '404 - about artical not found!',
        main: '404',
        message: 'Help artical not found. Oops!'
    })
})

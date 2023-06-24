const router = require('express').Router()
const path = require('path')



const rootDir = require('../utils/path-helper')

// console.log(rootDir)

router.get('/', (req,res,next) => {
    // res.send('<h1>test</h1>')
    // res.sendFile('/Users/francoispolo/Desktop/Lab/M-0922/NodeJS/W1/D3/src/views/index.html') // use absolute path
    res.sendFile(path.join(__dirname,'..','views', 'index.html')) ///Users/francoispolo/Desktop/Lab/M-0922/NodeJS/W1/D3/src/routes
    res.sendFile(path.join(rootDir,'views', 'recipe.html')) ///Users/francoispolo/Desktop/Lab/M-0922/NodeJS/W1/D3/src/routes
})

//dynamic route
router.get("/:recipeId", (req,res,next) => {
    const id = req.params.recipeId
    res.send(`<h1>Recipe ID: ${id}</h1>`)
})


module.exports = router
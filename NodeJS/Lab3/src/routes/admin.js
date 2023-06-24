const router = require('express').Router()

router.get('/add-member', (req,res,next) => {
    res.send(`
        <form method="POST" action="http://localhost:8000/admin/add-member">
            <input type="text" name="firstName" placeholder="Enter a first name">
            <button type="submit">Send</button>
        </form>
    `)
})
router.post('/add-member', (req,res,next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router
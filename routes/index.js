const Router = require('express')
const router = new Router()
const path = require('path')

const nodemailer = require('nodemailer');

// home
router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'..', '/public/view/home.html'))
})
// about
router.get('/about', (req, res)=>{
    // res.sendFile(__dirname + '../public/about.html')
    res.sendFile(path.join(__dirname,'..', '/public/view/about.html'))
})
// delivery
router.get('/delivery', (req, res)=>{
    // res.sendFile(__dirname + '../public/about.html')
    res.sendFile(path.join(__dirname,'..', '/public/view/delivery.html'))
})

// gallery
router.get('/gallery', (req, res)=>{
    // res.sendFile(__dirname + '../public/about.html')
    res.sendFile(path.join(__dirname,'..', '/public/view/gallery.html'))
})

// manufacture
router.get('/manufacture', (req, res)=>{
    // res.sendFile(__dirname + '../public/about.html')
    res.sendFile(path.join(__dirname,'..', '/public/view/manufacture.html'))
})

// products
router.get('/products', (req, res)=>{
    // res.sendFile(__dirname + '../public/products.html')
    res.sendFile(path.join(__dirname,'..', '/public/view/products.html'))
})

// contact
router.get('/contacts', (req, res)=>{
    // res.sendFile(__dirname + '../public/contact.html')
    res.sendFile(path.join(__dirname,'..', '/public/view/contact.html'))
})

router.post('/contacts', (req, res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'isakovd198@gmail.com',
            pass: 'oiuinpztzwjqglna'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'isakovd198@gmail.com',
        subject: 'New potential client!',
        text: 
        `
         Name    : ${req.body.name} ,\n
         Phone   : ${req.body.phone} ,\n
         Email   : ${req.body.email} ,\n
         Subject : ${req.body.subject} ,\n
         Message : ${req.body.message}
        ` 
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email sent: ' + info.response);
            res.send('success')
        }
    })
})

module.exports = router


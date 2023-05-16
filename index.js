const express=require('express')
const bodyparser=require('body-parser')
app=express()
app.use(bodyparser.urlencoded({ extended: false }))
app.listen(8000)

app.use('/assets', express.static('public'))
// app starts
//index.html  
app.get('',function (req,res)
{
    res.sendFile(__dirname+'/src/index.html')
})

//portals
app.get('/portals',function (req,res)
{
    res.sendFile(__dirname+'/src/portals.html')
})

//login
app.get('/login',function (req,res)
{
    res.sendFile(__dirname+'/src/login.html')
})


//contact us 
app.get('/contact',function (req,res)
{
    res.sendFile(__dirname+'/src/contact.html')
})

//masterinput
app.get('/masup',function (req,res)
{
    res.sendFile(__dirname+'/src/masterinput.html')
})
//master values 
app.post('/masup',function(req,res){
    let PrdID = req.body.PrdID
    let avilamt = req.body.avilamt
    let thres = req.body.thres
    let PripU = req.body.PripU
    console.log("PrdID" + PrdID)
    console.log("avilamt" + avilamt)
    console.log("thres" + thres)
    console.log("PripU" +PripU )
    res.send("mastervalues recived")
})


//dealerinput 
app.get('/prdata',function (req,res)
{
    res.sendFile(__dirname+'/src/dealerinput.html')
})
//dealer values 
app.post('/prdata',function(req,res){
    let drgid = req.body.drgid
    let totdrg = req.body.totdrg
    console.log("drgid" + drgid)
    console.log("totdrg" +totdrg )
    res.send("mastervalues recived")
})


//drugbuy 
app.get('/drgbuy',function (req,res)
{
    res.sendFile(__dirname+'/src/drugbuy.html')
})

//drugbuy values 
app.post('/drgbuy',function(req,res){
    let hosid = req.body.hosid
    let PrdID = req.body.PrdID
    let patid = req.body.patid
    let docid = req.body.docid
    let reqamt = req.body.reqamt
    console.log("hosid" + hosid)
    console.log("PrdID" + PrdID)
    console.log("patid" + patid)
    console.log("docid" + docid)
    console.log("reqamt" +reqamt )
    res.send("drug Buy values recived")
})


//hospitalinput 
app.get('/hosup',function (req,res)
{
    res.sendFile(__dirname+'/src/hospitalinput.html')
})
//drugbuy values 
app.post('/hosup',function(req,res){
    let hospid = req.body.hospid
    let patid = req.body.patid
    let docid = req.body.docid
    console.log("patid" + patid)
    console.log("docid" + docid)
    console.log("hospid" +hospid )
    res.send("Hospital values recived")
})


//login check
app.post('/login',function(req,res){
    let name = req.body.name
    let passw = req.body.passw
    res.send("Login check")
    console.log("the name is : " +name)
    console.log("the passwordx is : " + passw)
})


import express from 'express'

const app = express();

// request goes here 
app.get("/",(req,res)=>{
    res.send("<h1>Hello Express</h1>")
})

app.get("/about", (req,res) =>{
    res.send("<h1>About Page</h2>")
});

const products=[
{id:1,name:'marker', price:15,qty:100 },
{id:2,name:'duster',price:24,qty:50}

];

// app.get("/products",(req,res)=>{
//     res.status(200).send(products);
// });

app.get("/products",(req,res)=>{
    res.status(200).JSON(products);
});


app.use((req, res)=> {
    res.sendStatus(404).send("<h1> Page not found</h1>");
});

// always listen at last
app.listen(3333,()=> console.log("prg1 is running at 3333"));
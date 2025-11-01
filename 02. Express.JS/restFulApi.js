import express from "express"

const app = express()

const PORT = 3000

app.get("/", (req,res)=>{
    res.send("Hello Express!")
})

// Get ALL Product
app.get("/api/products", (req,res)=>{
    const products = [
        {id: 1, name: "Laptop", price: 10000},
        {id: 2, name: "Mouse", price: 100},
        {id: 3, name: "Keyboard", price: 400},
        {id: 4, name: "PenDrive", price: 200},
    ]
    res.status(200).json({products})
})

// Get a single product
app.get("/api/products/:id", (req,res)=>{
    const products = [
        {id: 1, name: "Laptop", price: 10000},
        {id: 2, name: "Mouse", price: 100},
    ]
    const product = products.find(p => p.id === Number(req.params.id))
    if(!product){
        return res.status(404).json({message: "Product Not Found"})
    }
    res.status(200).json(product)
})

// Create a New Product
app.post("/api/products", (req,res)=>{
    const newProduct = req.body
    newProduct.id = Date.now()
    res.status(201).json(newProduct)
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
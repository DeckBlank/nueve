import express from 'express'

export const productos = express.Router()

productos.get('/',(req,res)=>{
    res.json({hello:'word'})
})

productos.get('/:id',(req,res)=>{
    res.json()
})

productos.post('/',(req,res)=>{
    res.json()
})

productos.put('/:id',(req,res)=>{
    res.json()
})

productos.delete('/:id',(req,res)=>{
    res.json()
})

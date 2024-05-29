const express = require('express');
const router = express.Router();

const menuItems = require('../models/menuItems');

router.post('/', async(req,res)=>{
    try{
      const data = req.body
  
      const newMenu = new menuItems(data);
  
      const response = await newMenu.save();
      console.log('data saved');
      res.status(200).json(response);
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
    }
  })
  
  
  
  router.get('/' , async(req,res)=>{
    try{
      const data  = await menuItems.find();
      console.log('data saved');
      res.status(200).json(data);
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
    }
  })

  router.get('/:taste',async(req,res)=>{
    try{
      const tasteType = req.params.taste;
      if(tasteType=='sweet' || tasteType =='sour' || tasteType == 'spicy'){
        const response = await menuItems.find({taste: tasteType});
        console.log('response fetched');
        res.status(200).json(response);
      }else{
        res.status(404).json({error: 'Invalid work type'});
      }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Invalid server error'});
    }
  })

  router.put('/:id' , async(req,res)=>{
    try{
        const menuId = req.params.id;
        const updatedmenuData = req.body;

        const response = await menuItems.findByIdAndUpdate(menuId,updatedmenuData,{
            new : true ,//return the updated document
            runValidators : true //run Mongoose validation
        })
        if(!response){
            return res.status(404).json({error:'menu  not found'});
        }
        console.log('data updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
  })

  router.delete('/:id',async(req,res)=>{
    try{    
        const menuId = req.params.id;
        const response = await menuItems.findByIdAndDelete(menuId);
        if(!response){
            return res.status(404).json({error:'Menu not found'});
        }

        console.log('data deleted');
        res.status(200).json({message : 'Menu Deleted Successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
  })

  //change for testing purpose

  module.exports = router;
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const auth = require('../middleware/authMiddleware');


router.get("/",auth,async(req,res)=>{
    const product=await Product.find({userId:req.userId});
    res.json(product);
})

router.post('/', auth, async (req, res) => {
  const { name, price, description } = req.body;
  const product = await Product.create({ name, price, description, userId: req.userId });
  res.json(product);
});

module.exports = router;
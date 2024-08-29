const productModel=require('../models/productModel')

//get products api - /api/v1/product
exports.getProducts=async(req,res,next)=>{
  const query= req.query.keyword?{ name : { 
      $regex: req.query.keyword,
      $options:'i'
   }}:{}
   const products= await productModel.find(query)
   res.json({
    success:true,
    products
   
   })
  
}
//get Single products api - /api/v1/product/:id
exports.getSingleProduct=async(req,res,next)=>{
   try {
      const product= await productModel.findById(req.params.id)
      res.json({
        success:true,
        product
    })
      
   } catch (error) {
      res.status(404).json({
         success:false,
         message:'unvalid data'
     })
   }
   console.log( req.params.id,'ID')
   
 }
 
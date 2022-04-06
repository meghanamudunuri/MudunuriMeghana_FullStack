const {Schema,model} = require('mongoose')

const productSchema = new Schema({
    name:String,
    image : String,
    type:String
})

const productModel = new model('product',productSchema,'products')

module.exports = productModel 
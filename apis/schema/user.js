const {Schema,model} = require('mongoose')

const userSchema = new Schema({
    name:String,
    email:String,
    city:String,
    phone:Number
})

const userModel = new model('user',userSchema,'users')

module.exports = userModel 
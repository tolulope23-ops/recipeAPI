const mongoose = require("mongoose")
const RecipeSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    ingredient:{
        type:[String],
        required:true
    },
    instruction:{
        type:String,
        required:true
    },
    mealType:{
        type: String, enum:["breakfast","lunch","dinner","snack"],
        required:true
    },
    favorite:{
        type:Boolean,
        default: false
    }
})

module.exports = mongoose.model("recipe", RecipeSchema);
const { StatusCodes } = require("http-status-codes")
const Recipe = require("../model/recipe");


const addRecipe = async (req,res) =>{
try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(StatusCodes.OK).json({
        success: true,
        statusCode: StatusCodes.OK,
        message: "Recipe(s) added successfully",
        data: recipe
    });
} catch (error) {
    console.log(error.message);
      res.status(404).json({
        success:false,
        statusCode: StatusCodes.BAD_REQUEST,
        message:error.message,
        data:{}
    });
}
}

const getRecipes = async(req,res) =>{
try {
    const {mealType, favorite} = req.query    
    if(mealType){
        const menu = await Recipe.find({mealType})
        return res.status(StatusCodes.OK).json({
            success: true,
            statusCode: StatusCodes.OK,
            message: "",
            data: menu
        });   
    }
    if(favorite){
        const menu = await Recipe.find({favorite})
        return res.status(StatusCodes.OK).json({
            success: true,
            statusCode: StatusCodes.OK,
            message: "",
            data: menu
        });   
    }
    const menu = await Recipe.find()
    res.status(StatusCodes.OK).json({
        success: true,
        statusCode: StatusCodes.OK,
        message: "",
        data: menu
    }); 
} catch (error) {
    res.status(404).json({
        success:false,
        statusCode: StatusCodes.BAD_REQUEST,
        message:error.message,
        data:{}
    });
}
}



const getRecipe = async(req,res) =>{
    const {id} = req.params;
try {
  const menu = await Recipe.findById(id);
  if(!menu){
    return res.status(404).json({
        success:false,
        statusCode: StatusCodes.BAD_REQUEST,
        message:error.message,
        data:{}
    });
  }
  res.status(StatusCodes.OK).json({
    success: true,
    statusCode: StatusCodes.OK,
    message: "",
    data: menu
});

} catch (error) {
    res.status(404).json({
        success:false,
        statusCode: StatusCodes.BAD_REQUEST,
        message:error.message,
        data:{}
    });
}
}


const updateRecipe = async(req,res) =>{
try {
    const {id} = req.params;
    // const {name,ingredient,instruction,mealType,favorite} = req.body;
    const menu = await Recipe.findByIdAndUpdate({_id:id}, req.body, {new:true});
    if(!menu){
        res.status(404).json({
            success:false,
            statusCode: StatusCodes.BAD_REQUEST,
            message:error.message,
            data:{}
        });
    }
    res.status(StatusCodes.OK).json({
        success: true,
        statusCode: StatusCodes.OK,
        message: "Recipe Updated Successfully",
        data: menu
    });
} catch (error) {
    res.status(404).json({
        success:false,
        statusCode: StatusCodes.BAD_REQUEST,
        message:error.message,
        data:{}
    });
}
}



const deleteRecipe = async(req,res) =>{
try {
    const {id} = req.params
    const menu = await Recipe.findByIdAndDelete(id)
    if(!menu){
        return res.status(404).json({
            success:false,
            statusCode: StatusCodes.BAD_REQUEST,
            message:error.message,
            data:{}
        });
    }
   
    res.status(StatusCodes.OK).json({
        success: true,
        statusCode: StatusCodes.OK,
        message: "Recipe deleted Successfully",
        data: menu
    });
     
} catch (error) {
    res.status(404).json({
        success:false,
        statusCode: StatusCodes.BAD_REQUEST,
        message:error.message,
        data:{}
    });
}
}



module.exports = {addRecipe,getRecipes,getRecipe,updateRecipe,deleteRecipe};
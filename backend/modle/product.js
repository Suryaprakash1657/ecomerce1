const productSchema=new mongoose.Schema({
    name:{type:String ,required:true},
    description:{type:String,required:true},
    category:{type:String,required:true},
    tags:{type:[String],default:[]},
    price:{type:Number,required:true},
    stock:{type:Number,required:true},
    email:{type:String,required:true, match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]},
    images:{type:[String],required:[true]},
    createdAt:{type:Date,default:Date.now()}
}
,{timestamps:true,})
module.exports=mongoose.model("Product",productSchema)
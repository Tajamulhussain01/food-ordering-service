import mongoose from "mongoose";


const foodSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    category: {type: String, required: true}
})

// when  we run this file multiple times it will create the model again thats why we added or operator
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);
// const foodModel = mongoose.model("food", foodSchema);


export default foodModel;
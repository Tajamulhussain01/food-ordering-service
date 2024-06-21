import express from 'express'
import { addFood, listFood, removeFood } from '../controllers/foodController.js'
import multer from 'multer'

const foodRouter = express.Router();


// image storage engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})


const upload = multer({storage: storage})

// we use post method to send the data on the server and on the server our data will be processed , we will get one res.
foodRouter.post("/add", upload.single("image"), addFood)
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);



export default foodRouter;
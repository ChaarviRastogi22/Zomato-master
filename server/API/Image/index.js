import express from "express";
import passport from "passport";;
import multer from "multer";

//Database
import { ImageModel } from "../../database/image";

//Utilities
import { s3Upload } from "../../Utils/AWS/s3";

const Router = express.Router();

//Multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
Route         /
Descrp        Uploads given image to s3 bucket and saves file link to mongoDB.
Params        none
Access        Public
Method        POST
*/

Router.post("/", upload.array("file", 4), async(req,res) => {
    try{
        //UPLOAD TO S3
        const file = req.files;

        //s3 bucket options
        

     return res.status(200).json({ uploadimage: "yay" });

    } catch (error) {
        return res.status(500).json({error : error.message });
    }
});

export default Router;

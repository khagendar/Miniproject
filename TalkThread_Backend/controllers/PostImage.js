const model=require("../model/post");
const users=require("../model/user");
class Postimage{
    async  uploadPost(req,res){
        const {name,email,image,caption}=req.body;
        try{
            const existingUser=await users.findOne({email});
            if(existingUser){
                try{
                    const newPost=await model.create({name,email,image,caption});
                    if(newPost){
                       return res.status(201).json({message:"post uploaded successfully",data:newPost});
                    }
                }
                catch(e){
                    res.status(500).json({message:"error uploading post"});
                }
            }
            else{
                res.status(401).json({message : "user does not exist"});
            }
        }
        catch(e){
            return res.status(500).json({message:"server error"});
        }
    }
    async deletePost(req,res){
        const {id,name,email}=req.body;
        try{
            const existingUser=await users.findOne({email});
            if(existingUser){
                try{
                    const post=await model.findByIdAndDelete(id);
                    res.status(200).json({message : "post deleted successfuly",data:post});
                }
                catch(e){
                    res.status(500).json({message:"error deleting post"});
                }
            }
        }
        catch(e){
            res.status(500).json({message:"user does not exist"});
        }
    }
}
module.exports=new Postimage();
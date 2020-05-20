const appRoot=require("app-root-path")
const playlist=require(appRoot+"/models/playlist")
exports.getPlayListWithInfo = async (req,res,next)=>{
    try{
        const result = await playlist.getPlayListWithInfo({user_id : req.user_id})
        res.send(result[0])
    }
    catch(err){
        next(err)
    }
}

exports.addPlayList = async(req,res,next)=>{
    try{        
        await playlist.addPlayList({music_idx : req.body.music_idx,user_id:req.user_id})
        res.send({result : 0});
    }
    catch(err){
        next(err)
    }
}
const appRoot = require("app-root-path")
const s3 = require(appRoot + "/utils/s3")
const uuid = require('uuid');
const beat = require (appRoot + "/models/beat")
exports.write = async (req, res, next) => {
    try{
        const result = await beat.beatWrite({
            user_id : req.user_id,
            music_title:req.body.music_title, 
            music_path:req.body.music_path,
            music_description : req.body.music_description,
            music_tag_1 : req.body.music_tag_1,
            music_tag_2 : req.body.music_tag_2,
            music_tag_3 : req.body.music_tag_3})
        if(result===true){
            res.send({"result" : 0})
        }
    }catch(error){
        next(error)
    }
}
exports.getS3Path = async (req, res, next) => {
    const key = `beat/${uuid.v1()}.mpeg`
    try{
        const beatIsExist = await beat.beatIsExist({user_id : req.user_id,music_title : req.body.music_title})
        if(beatIsExist===false){
            const error = new Error("beat is exist")
            error.statusCode="406"
            throw error
        }
        s3.getSignedUrl('putObject', {
            Bucket: 'biphop-audio',
            ContentType: req.body.file_type,
            Key: key
        }, (err, url) => {
            if (!err) {
                res.send({ key, url })
            }
            else {
                throw err
            }
        })        
    }
    catch(error){
        if(!error.statusCode){
            error.statusCode=500
        }
        next(error)
    }
}

exports.getLatestList = async(req,res,next)=>{
    try{
        const result=await beat.beatLatestList()
        res.send(result)
    }
    catch(err){
        next(err)
    }
}

exports.getBeatDetail = async(req,res,next)=>{
    try{
        const result=await beat.getBeatDetail({music_idx : req.query.music_idx})
        res.send(result[0][0])
    }
    catch(err){
        next(err)
    }
}
require('dotenv').config()

const beat=require("./models/beat")
console.log(beat)

const result=beat.beatLatestList()
const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
                // title: String, 
                title : {
                    type : String, 
                    required : true
                }, 
            // description: String, 
                description : {
                    type : String, 
                    required : true
                }, 
                date : {
                    type:Date, 
                    required : true, 
                    default : Date.now
                }
})


module.exports = mongoose.model('Posts', PostSchema)

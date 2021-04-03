const express = require('express')
const { update } = require('../models/Post')
const router = express.Router()
const Post = require('../models/Post')

// 모든 데이터 인출
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find() 
        res.json(posts)
    }catch(err) {
        res.json({message:err})
    }
})

router.get('/mine', (req, res) => {
    res.send('Hello my Posts!!!')
})

// 데이터 저장 
router.post('/', async (req, res) => {
    // console.log(req.body) 
    const post = new Post({
        title: req.body.title,
        description : req.body.description
    })
    // post.save()        //  Promise 반환
    //     .then(data => {
    //         res.json(data)
    //     })
    //     .catch(err => {
    //         res.json({
    //             message : err
    //         })
    //     })
    try {
        const savePost = await post.save();
        res.json(savePost)
    } catch(err) {
        res.json({message:err})
    }

})  

// 특정 데이터만 인출
router.get('/:postId', async (req, res) => {
    console.log(req.params.postId)
    try {
        const post = await Post.findById(req.params.postId)
       res.json(post)
    }catch(err) {
        res.json({message:err})
    }
})

// 삭제하기
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.postId})
        res.json(removedPost)
    } catch(err) {
        res.json({message:err})
    }
})

// 변경하기
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
                {_id:req.params.postId}, 
                {$set: {
                        title:req.body.title, 
                        description:req.body.description
                        }
                }
            )
        res.json(updatedPost)
    }catch(err) {
        res.json({message:err})
    }
})


module.exports=router

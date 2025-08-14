const express = require('express')
const router = express.Router();
const authMiddleware = require('../middlewares/auth')
const upload = require('../config/multer.config');
// const fileModel = require('../models/files.model')
const cloudinary = require('../config/cloudinary.config');
const File = require('../models/files.model');
const axios = require('axios');

router.get('/home', authMiddleware, async (req, res) => {

    const userFiles = await File.find({
        user: req.user.userId
    })

    res.render('home', {
        files: userFiles,
        user: req.user // pass the user object to EJS
    })
})


//  router.post('/upload', authMiddleware, upload.single('file'), async (req, res) => {
//     // res.send(req.file)
//     console.log(req.file); 

//     const newFile = await fileModel.create({
//         path: req.file.path,
//         originalname: req.file.originalname,
//         user: req.user.userId
//     })

//     res.json(newFile)
//  });



router.post('/upload', authMiddleware, upload.single('file'), async (req, res) => {
  try {
    console.log('Uploaded file:', req.file);

    
    // req.file contains all needed Cloudinary info
    const newFile = await File.create({
      path: req.file.path,                  // full Cloudinary URL
      originalname: req.file.originalname,  
      public_id: req.file.filename,         // Cloudinary public_id
      format: req.file.format || req.file.originalname.split('.').pop(),             // jpg/png/pdf etc
      resource_type: req.file.resource_type || 'image',// image/raw/video
      user: req.user.userId
    });

    res.json(newFile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Upload failed' });
  }
});


//  router.get('/download/:path', authMiddleware, async (req, res) => {

//     const loggedInUserId = req.user.userId;
//     const path = req.params.path

//     const file = await fileModel.findOne({
//         user: loggedInUserId,
//         path: path
//     })

//     if(!file){
//         return res.status(401).json({
//             message: 'Unauthorized'
//         })
//     }
//  })



router.get('/download/:id', authMiddleware, async (req, res) => {
  try {
    const file = await File.findOne({ user: req.user.userId, _id: req.params.id });
    if (!file) return res.status(401).json({ message: 'Unauthorized' });

    // Generate signed URL
    const signedUrl = cloudinary.url(file.public_id, {
      resource_type: file.resource_type,
      type: 'authenticated',
      sign_url: true
    });

    // Set headers to force download
    res.setHeader('Content-Disposition', `attachment; filename="${file.originalname}"`);
    res.setHeader('Content-Type', 'application/octet-stream');

    // Stream the file from Cloudinary to the client
    const response = await axios({
      method: 'GET',
      url: signedUrl,
      responseType: 'stream'
    });

    response.data.pipe(res);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Download failed' });
  }
});



module.exports = router
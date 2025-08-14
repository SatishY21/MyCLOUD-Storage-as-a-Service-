const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary.config');

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: 'my_storage',
    allowed_formats: ['jpg', 'png', 'jpeg', 'pdf', 'zip'], 
    type: 'authenticated',
    resource_type: 'auto' // lets Cloudinary detect image/raw/video automatically
  })
});

const upload = multer({ storage });

module.exports = upload;

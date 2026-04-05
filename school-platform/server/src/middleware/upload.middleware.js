const multer = require('multer');
const cloudinary = require('../config/cloudinary');

// Configure multer for file upload
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only images are allowed.'));
    }
  },
});

const uploadToCloudinary = (req, res, next) => {
  if (!req.file) {
    return next();
  }

  const stream = cloudinary.uploader.upload_stream(
    {
      folder: 'school-platform',
      resource_type: 'auto',
    },
    (error, result) => {
      if (error) {
        return res.status(400).json({ error: 'Upload failed' });
      }
      req.fileUrl = result.secure_url;
      next();
    }
  );

  stream.end(req.file.buffer);
};

module.exports = { upload, uploadToCloudinary };

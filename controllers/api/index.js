const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes= require('./commentRoutes'); 

router.use('/user', userRoutes);
router.use('/post', postRoutes); 
router.use('/commentRoutes', commentRoutes); 

module.exports = router; 

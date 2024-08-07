const express = require('express')

const router = express.Router();

router.use('/v1',v1ApiRoutes);

module.exports=router;
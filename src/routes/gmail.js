const express = require('express');
const router = express.Router();    

router.get('/check', (req, res) => {
    res.json({ message: 'checando gmail...(teste)'});

});

module.exports = router;

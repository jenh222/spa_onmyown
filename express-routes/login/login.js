const express = require('express');
const router = express.Router();

router.post('/validate', (req,res) => {
    const response = {
        errors: false, 
        message: 'Login Sent',
        postedData: req.body,
    }
    
    console.log('Post Sent Login');
    res.json(response);
});

module.exports = router;
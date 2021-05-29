const {binarySearch} = require('./searching/binarySearch')
const {linearSearch} = require('./searching/linearSearch')
const router = require('express').Router();

router.get('/linear-search',(req, res)=>{
    res.send(linearSearch(req.body.dataset, req.body.searchTerm).toLocaleString());
})

router.get('/binary-search',(req, res)=>{
    res.send(binarySearch(req.body.dataset, req.body.searchTerm).toLocaleString());
})

module.exports = router;
const {binarySearch} = require('./searching/binarySearch')
const {linearSearch} = require('./searching/linearSearch')
const router = require('express').Router();

router.get('/linear-search',(req, res)=>{
    res.send(linearSearch(req.data.dataset, req.data.searchTerm));
})

router.get('/binary-search',(req, res)=>{
    res.send(binarySearch(req.data.dataset, req.data.searchTerm));
})

module.exports = router;
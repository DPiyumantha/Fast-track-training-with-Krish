const {bubbleSort} = require('./sorting/bubbleSort')
const {quickSort} = require('./sorting/quickSort')
const {selectionSort} = require('./sorting/selectionSort')
const {mergeSort} = require('./sorting/mergeSort')
const router = require('express').Router();

router.post('/bubble-sort',(req, res)=>{
    res.send(bubbleSort(req.body.dataset));
})

router.post('/quick-sort',(req, res)=>{
    res.send(quickSort(req.body.dataset));
})

router.post('/merge-sort',(req, res)=>{
    res.send(mergeSort(req.body.dataset));
})

router.post('/selection-sort',(req, res)=>{
    res.send(selectionSort(req.body.dataset));
})

module.exports = router;
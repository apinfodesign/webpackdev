const router = require('express').Router();
const PhysicalBook = require('../models/magazine');
const mongoose = require( 'mongoose' );




//GET all physical books

router.get('/', (req, res, next) => {
    if (Object.keys(req.query).length === 0){
        find(req.query, req, res, 'magazine');
    }
    else {
        next();
    }
});



//GET a user's physical book inventory

router.get('/', (req, res, next) => {
    if (req.query.owner && Object.keys(req.query).length === 1) {
        find(req.query, req, res, 'unique_book borrower');
    }
    else {
        next();
    }
});
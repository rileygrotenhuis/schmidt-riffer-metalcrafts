const express = require('express');
const router = express.Router();

const contactController = require('../../controllers/contact.controller');

const { PrismaClient } = require('@prisma/client');

router.get('/products', async (req, res) => {
    try {
        const prisma = new PrismaClient();

        const products = await prisma.products.findMany();

        prisma.$disconnect();

        return res.status(200).json({
            'data': products
        });
    } catch (e) {
        return res.status(400).json(e);
    }
});


router.get('/products/:id', async (req, res) => {
    try {
        const prisma = new PrismaClient();

        const product = await prisma.products.findFirst({
            where: {
                id: {
                    equals: parseInt(req.params.id)
                }
            }
        });   
        
        prisma.$disconnect();

        return res.status(200).json({
            'data': product
        });
    } catch (e) {
        return res.status(400).json(e);
    }
});

router.post('/quotes');

router.post('/contact', contactController.newContactMessage);

module.exports = router;
const express = require('express');
const router = express.Router();

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

router.post('/contact', async (req, res) => {
    try {
        const { first_name, last_name, company, email, phone_number, message } = req.body;

        if (!(first_name && last_name && email && phone_number && message)) {
            return res.status(400).json('All input is required');
        }

        const prisma = new PrismaClient();

        const contactMessage = await prisma.contact_messages.create({
            data: {
                first_name: first_name,
                last_name: last_name,
                company: company,
                email: email,
                phone_number: phone_number,
                message: message
            }
        });

        prisma.$disconnect();

        return res.status(201).json({
            'data': contactMessage
        });
    } catch (e) {
        return res.status(400).json(e);
    }
});

module.exports = router;
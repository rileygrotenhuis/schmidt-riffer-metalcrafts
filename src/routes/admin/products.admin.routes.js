const express = require('express');
const router = express.Router();

const { PrismaClient, Prisma } = require('@prisma/client');

router.post('/products', async (req, res) => {
    try {
        const { name, description, image_url } = req.body;

        if (!name) {
            return res.status(400).json('All input is required');
        }

        const prisma = new PrismaClient();

        const newProduct = await prisma.products.create({
            data: {
                name: name,
                description: description,
                image_url: image_url
            }
        });

        prisma.$disconnect();

        return res.status(201).json({
            'data': newProduct
        });
    } catch (e) {
        return res.status(400).json(e);
    }
});

router.put('/products/:id', async (req, res) => {
    try {
        const { name, description, image_url } = req.body;

        if (!name) {
            return res.status(400).json('All input is required');
        }

        const prisma = new PrismaClient();

        const updatedProduct = await prisma.products.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                name: name,
                description: description,
                image_url: image_url
            }
        });

        prisma.$disconnect();

        return res.status(200).json({
            'data': updatedProduct
        });
    } catch (e) {
        return res.status(400).json(e);
    }
});

router.delete('/products/:id', async (req, res) => {
    try {
        const prisma = new PrismaClient();

        await prisma.products.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });

        return res.status(204).json();
    } catch (e) {
        return res.status(400).json(e);
    }
});

router.get('/products');
router.get('/products/:id');

module.exports = router;
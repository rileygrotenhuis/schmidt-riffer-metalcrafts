const { PrismaClient } = require('@prisma/client');

module.exports.createNewProduct = async (req, res) => {
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
};

module.exports.updateProduct = async (req, res) => {
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
};

module.exports.deleteProduct = async (req, res) => {
    try {
        const prisma = new PrismaClient();

        await prisma.products.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });

        prisma.$disconnect();

        return res.status(204).json();
    } catch (e) {
        return res.status(400).json(e);
    }
};

module.exports.getAllProducts = async (req, res) => {
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
};

module.exports.getProduct = async (req, res) => {
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
};
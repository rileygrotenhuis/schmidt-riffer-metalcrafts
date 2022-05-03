const express = require('express');
const router = express.Router();

const { PrismaClient, Prisma } = require('@prisma/client');

router.get('/contact/messages', async (req, res) => {
    try {
        const prisma = new PrismaClient();

        const messages = await prisma.contact_messages.findMany();

        prisma.$disconnect();

        return res.status(200).json({
            'data': messages
        });
    } catch (e) {
        return res.status(400).json(e);
    }
});

router.get('/contact/messages/:id', async (req, res) => {
    try {
        const prisma = new PrismaClient();

        const message = await prisma.contact_messages.findFirst({
            where: {
                id: {
                    equals: parseInt(req.params.id)
                }
            }
        });

        prisma.$disconnect();

        return res.status(200).json({
            'data': message
        });
    } catch (e) {
        return res.status(400).json(e);
    }
});

router.put('/contact/messages/:id/read', async (req, res) => {
    try {
        const prisma = new PrismaClient();

        const updatedMessage = await prisma.contact_messages.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                read: true
            }
        });

        prisma.$disconnect();

        return res.status(200).json({
            'data': updatedMessage
        });
    } catch (e) {
        return res.status(400).json(e);
    }
});

router.put('/contact/messages/:id/unread', async (req, res) => {
    try {
        const prisma = new PrismaClient();

        const updatedMessage = await prisma.contact_messages.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                read: false
            }
        });

        prisma.$disconnect();

        return res.status(200).json({
            'data': updatedMessage
        });
    } catch (e) {
        return res.status(400).json(e);
    }
});

router.delete('/contact/messages/:id', async (req, res) => {
    try {
        const prisma = new PrismaClient();

        await prisma.contact_messages.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });

        prisma.$disconnect();

        return res.status(204).json();
    } catch (e) {
        return res.status(400).json(e);
    }
});

module.exports = router;
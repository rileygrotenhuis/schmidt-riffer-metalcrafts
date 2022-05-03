const { PrismaClient } = require('@prisma/client');

module.exports.newContactMessage = async (req, res) => {
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
};

module.exports.getAllContactMessages = async (req, res) => {
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
};

module.exports.getContactMessage = async (req, res) => {
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
};

module.exports.readContactMessage = async (req, res) => {
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
};

module.exports.unreadContactMessage = async (req, res) => {
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
};

module.exports.deleteContactMessage = async (req, res) => {
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
};
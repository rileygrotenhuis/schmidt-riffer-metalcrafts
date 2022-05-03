const { PrismaClient } = require('@prisma/client');

module.exports.newQuoteSubmission = async (req, res) => {
    try {
        const { first_name, last_name, company, email, phone_number, quote_items } = req.body;

        if (!(first_name && last_name && email && phone_number && quote_items)) {
            return res.status(400).json('All input is required');
        }

        const prisma = new PrismaClient();

        const quoteSubmission = await prisma.quote_submissions.create({
            data: {
                first_name: first_name,
                last_name: last_name,
                company: company,
                email: email,
                phone_number: phone_number
            }
        });

        if (!Array.isArray(quote_items)) {
            return res.status(400).json('Quote Items must be an array');
        }

        quote_items.forEach(async (item) => {
            let newItem = await prisma.quote_items.create({
                data: {
                    product_id: item.product_id,
                    quantity: item.quantity,
                    quote_id: quoteSubmission.id
                }
            });
        });

        prisma.$disconnect();

        return res.status(201).json({
            'data': quoteSubmission
        });
    } catch (e) {
        return res.status(400).json(e);
    }
};
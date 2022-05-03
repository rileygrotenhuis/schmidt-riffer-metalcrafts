const jwt = require('jsonwebtoken');

module.exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!(username && password)) {
            return res.status(400).json('Username and password is required');
        }

        if (username === process.env.USERNAME && password === process.env.PASSWORD) {
            const token = jwt.sign(
                {
                    username: username
                },
                process.env.TOKEN_KEY,
            );

            return res.status(200).json({'token': token});
        }

        return res.status(400).json('Invalid credentials');
    } catch (e) {
        res.json(e);
    }
};
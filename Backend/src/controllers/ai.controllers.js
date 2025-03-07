const aiService = require("../services/ai.services");



const getReview = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).send("Code is required");
    }

    const response = await aiService(code);
    res.send(response);
};

module.exports = { getReview };  // ✅ Exporting an object with getResponse


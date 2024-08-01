const express = require('express');
const app = express();
const { generateFile } = require('./generateFile');
const { executeCpp } = require('./executeCpp');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/req', async (req, res) => {
    try {
        const { language, code } = req.body;
        const filePath = await generateFile(language, code);
        const output = await executeCpp(filePath);
        res.status(200).send({ filePath, output });
    } catch (error) {
        console.error("Error executing file:", error);
        res.status(500).send({ error: error.stderr || error.message });
    }
});

app.listen(3000, () => {
    console.log("App running on port 3000");
});

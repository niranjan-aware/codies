const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

const outputPath = path.join(__dirname, "outputs");

if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
}

const executeCpp = async (filePath) => {
    const fileId = path.basename(filePath).split(".")[0];
    const outPath = path.join(outputPath, `${fileId}.exe`);
    return new Promise((resolve, reject) => {
        exec(`g++ ${filePath} -o ${outPath} && ${outPath}`, 
            (error, stdout, stderr) => {
                error&&reject({error,stderr})
                error&&reject(stderr);
                resolve(stdout);
            });
    });
}

module.exports = {
    executeCpp
};

const { v4: uuid } = require('uuid');
const path=require('path');
const fs =require('fs');

const dirCodes=path.join(__dirname,"codes")

if(!fs.existsSync(dirCodes)){
    fs.mkdirSync(dirCodes,{recursive:true});
}

const generateFile=async(format,code)=>{
    const fileId=uuid();
    const fileName=`${fileId}.${format}`;
    const filePath=path.join(dirCodes,fileName);
    await fs.writeFileSync(filePath,code);
    return filePath;
}

module.exports={generateFile};
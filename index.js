const fs = require('fs')
const path = require('path')

function translate(prefix) {
    fs.readdir(__dirname, (err, data) => {
        data.forEach((file,index) => {
            const extname = path.extname(file)
            if(['.jpg', '.png'].includes(extname)) {
                let newFileName = prefix + index + extname
                fs.rename(`${path.join(__dirname, file)}`, `${path.join(__dirname, newFileName)}`, (err) => {
                    if(err) throw err
                    console.log('Reame complete!')
                })
            }
        });
    })
}

module.exports = {
    translate
}


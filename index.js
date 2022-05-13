const fs = require('fs')
const path = require('path')

function translate(prefix) {
    fs.readdir(path.join(__dirname, 'img'), (err, data) => {
        data.forEach((file,index) => {
            const extname = path.extname(file)
            if(['.jpg', '.png'].includes(extname)) {
                fs.rename(`./img/${file}`, `./img/${prefix + index + extname}`, (err) => {
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


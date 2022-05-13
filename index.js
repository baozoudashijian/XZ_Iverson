const fs = require('fs')
const path = require('path')

console.log(__dirname, '=> dirname')
console.log(process.cwd(), '=> cwd')
function translate(prefix) {
    fs.readdir(process.cwd(), (err, data) => {
        data.forEach((file,index) => {
            console.log(file, '=> file')
            const extname = path.extname(file)
            if(['.jpg', '.png'].includes(extname)) {
                let newFileName = prefix + index + extname
                fs.rename(`${path.join(process.cwd(), file)}`, `${path.join(process.cwd(), newFileName)}`, (err) => {
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


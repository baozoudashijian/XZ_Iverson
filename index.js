const fs = require('fs')
const path = require('path')

const files = fs.readdir(path.join(__dirname, 'img'), (err, data) => {
    // console.log(data, 'data')
    data.forEach((file,index) => {
        console.log(file)
        fs.rename(`./img/${file}`, `./img/hello${index}.jpg`, (err) => {
            if(err) throw err
            console.log('Reame complete!')
        })
    });
})
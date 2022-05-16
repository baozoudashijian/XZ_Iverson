const fs = require('fs')
const fse = require('fs-extra')
const path = require('path')

console.log(__dirname, '=> dirname')
console.log(process.cwd(), '=> cwd')
function translate(prefix) {
    fs.readdir(process.cwd(), (err, data) => {
        data.forEach((file, index) => {
            const extname = path.extname(file)
            if (['.jpg', '.png'].includes(extname)) {
                let newFileName = prefix + index + extname
                fs.rename(`${path.join(process.cwd(), file)}`, `${path.join(process.cwd(), newFileName)}`, (err) => {
                    if (err) throw err
                    console.log('Reame complete!')
                })
            }
        });
    })
}

function initTemplate(proName, dirName) {
    const ppath = path.join(process.cwd(), proName)
    // 文件复制文件
    const htmlSrc = path.join(process.cwd(), dirName, 'index.html')
    const htmlDest = path.join(process.cwd(), proName, 'index.html')
    // 文件夹复制文件夹
    const src = path.join(process.cwd(), '..', 'lms-html-static', dirName)
    const dest = path.join(process.cwd(), proName)

    // 创建一个目录
    console.log(proName, dirName)
    if (!(fs.existsSync(ppath))) {
        fs.mkdir(ppath, (err) => {
            if (err) return
            console.log('创建目录成功')
            copyFile(src, dest)
            copyFile(htmlSrc, htmlDest)
        })
    } else {
        copyFile(src, dest)
        copyFile(htmlSrc, htmlDest)
    }

}

function rebaseTemplate(proName, dirName) {
    const ppath = path.join(process.cwd(), '..', 'lms-html-static', proName)
    const proSrc = path.join(process.cwd(), proName)
    // 文件复制文件
    // const htmlSrc = path.join(process.cwd(), dirName, 'index.html')
    // const htmlDest = path.join(process.cwd(), proName, 'index.html')

    // 创建一个目录
    console.log(proName, dirName)
    if (!(fs.existsSync(ppath))) {
        fs.mkdir(ppath, (err) => {
            if (err) return
            console.log('创建目录成功')
            rebaseFile(proSrc, proName)
        })
    } else {
        rebaseFile(proSrc, proName)
    }

}

function copyFile(src, dest) {
    fse.copy(src, dest, err => {
        if (err) return console.error(err)
        console.log('success!')
    })
}

function rebaseFile(proSrc, proName) {
    fs.readdir(proSrc, (err, data) => {
        if (err) {
            console.log(err)
        }
        data.map((item) => {
            if (!item.endsWith('.html')) {
                const src = path.join(process.cwd(), proName, item)
                const desc = path.join(process.cwd(), '..', 'lms-html-static', proName, item)
                copyFile(src, desc)
            }
        })
    })
}

module.exports = {
    translate,
    initTemplate,
    rebaseTemplate
}


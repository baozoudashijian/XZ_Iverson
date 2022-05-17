
# XZ_Iverson

个性化页面辅助工具

## 安装

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install -g xzt-tools
```

## 环境

需要Nodejs 14+以上, 因为使用replaceAll方法

## API

<!-- eslint-disable no-unused-vars -->
注意: 所有命令运行路径均在lms-html项目下

### xzt init(projectName, Template)

初始化一个项目模板

### xzt rebase(projectName, Template)

将开发好的项目静态文件，移动到static项目

### xzt replaceAll(projectName, Template)

开发时，服务器路径替换成相对路径,便于开发

### xzt prefix

一件修改图片名称[jpg | png] [需在图片文件夹下面]


## Testing


## License

[MIT](LICENSE)


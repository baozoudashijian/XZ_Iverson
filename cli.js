const { Command } = require('commander')
const program = new Command();
const { translate } = require('./index')

program
    .name('xz-tools')
    .description('A simple tool of xz')
    .version(process.env.npm_package_version);

program
    .argument('<string>', 'translate prefix')
    .action((str) => {
        // 控制台获取需要翻译的内容
        translate(str)
    });

program.parse();
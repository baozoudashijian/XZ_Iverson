#!/usr/bin/env node
const { Command } = require('commander')
const program = new Command();
const { translate, initTemplate, rebaseTemplate } = require('./index')

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

// 使用模版初始化一个任务
program.command('init')
    .description('Init peoject by template')
    .argument('<string>', 'Template name')
    .argument('<string>', 'Project name')
    .action((proNo, tempNo) => {
        initTemplate(proNo, tempNo)
    });

program.command('rebase')
    .description('Remove file rebase')
    .argument('<string>', 'Template name')
    .argument('<string>', 'Project name')
    .action((proNo, tempNo) => {
        rebaseTemplate(proNo, tempNo)
    });

program.parse();
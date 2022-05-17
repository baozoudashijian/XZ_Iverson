#!/usr/bin/env node
const { Command } = require('commander')
const program = new Command();
const { translate, initTemplate, rebaseTemplate, replaceAllTemplate } = require('./index')

program
    .name('xz-tools')
    .description('A simple tool of xz')
    .version(process.env.npm_package_version);

program
    .argument('<string>', 'translate prefix')
    .action((str) => {
        // 控制台获取需要重命名的文件夹内容
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

program.command('replaceAll')
  .description('Replace all url')
  .argument('<string>', 'Template name')
  .argument('<string>', 'Project name')
  .action((proNo, tempNo) => {
    replaceAllTemplate(proNo, tempNo)
  });

program.parse();

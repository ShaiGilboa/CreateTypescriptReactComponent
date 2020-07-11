"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command;
program
    .version('0.0.1')
    .arguments('<componentName>')
    .parse(process.argv);
const [componentName] = program.args;
console.log('componentName', componentName);
const templatePath = './template.txt';
console.log('program.dir', program.dir);
//# sourceMappingURL=index.js.map
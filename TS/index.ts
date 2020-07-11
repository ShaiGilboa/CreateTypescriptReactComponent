import fs from 'fs';
import path from 'path'; 
import { Command } from 'commander';

const program = new Command;

program
  .version('0.0.1')
  .arguments('<componentName>')
  .parse(process.argv);

  const [componentName] = program.args;

  console.log('componentName', componentName)
  const templatePath : string = './template.txt';
  console.log('program.dir', program.dir)
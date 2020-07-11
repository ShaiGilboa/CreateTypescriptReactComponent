"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
console.log('path', path_1.default.dirname('/src'));
fs_1.default.mkdir(path_1.default.join(__dirname, ''), (err) => {
    if (err) {
        if (err.code === 'EEXIST') {
            console.log('directory exist');
            return;
        }
        return console.error(err);
    }
    console.log('Directory created successfully!');
});
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const args_plugin_1 = require("./config/plugins/args.plugin");
const { b: base, l: limit, s: showTable } = args_plugin_1.yarg;
let outputMessage = '';
outputMessage += '====================================\n';
outputMessage += `            Tabla del ${base}             \n`;
outputMessage += '====================================\n';
outputMessage += '          \n';
for (let i = 1; i <= limit; i++) {
    outputMessage += `${base} x ${i} = ${base * i} \n`;
}
if (showTable) {
    console.log(outputMessage);
}
const outputPath = `outputs`;
fs_1.default.mkdirSync(outputPath, { recursive: true });
fs_1.default.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log('Se guardó archivo correctamente');

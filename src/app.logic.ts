import fs from 'fs'
import { yarg } from './config/plugins/args.plugin'

const {b:base, l:limit, s:showTable} = yarg; 

let outputMessage: string = ''

outputMessage +='====================================\n'
outputMessage +=`            Tabla del ${base}             \n`
outputMessage +='====================================\n'
outputMessage +='          \n'


for (let i = 1; i <= limit; i++) { 
    outputMessage += `${base} x ${i} = ${base * i} \n`    
}
if(showTable) {
    console.log(outputMessage) 
}

const outputPath = `outputs`
fs.mkdirSync(outputPath, {recursive:true})
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage );
console.log('Se guardó archivo correctamente')
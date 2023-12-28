import yargs from 'yargs'
import {hideBin} from 'yargs/helpers'


export const yarg = yargs(hideBin(process.argv))
    .options('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base'
    })
    .options('l',{
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit'
    })
    .options('s',{
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show multiplication table'
    })
    .options('d',{
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'File destination'
    })
    .options('n',{
        alias: 'name',
        type: 'string',
        default: 'table',
        describe: 'File name'
    })
    .check((argv, options)=>{ 
        if(argv.b <1 ) throw 'Error: base must be greater than 0'
        return true
    })

    .parseSync()
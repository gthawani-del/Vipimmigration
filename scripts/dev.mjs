import {spawn} from 'node:child_process';
const args=process.argv.slice(2);const port=args.includes('--port')?args[args.indexOf('--port')+1]:'4173';
const child=spawn('node',['node_modules/next/dist/bin/next','dev','--hostname','0.0.0.0','--port',port],{stdio:'inherit'});
process.on('SIGTERM',()=>child.kill());process.on('SIGINT',()=>child.kill());

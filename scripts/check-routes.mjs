import {spawn} from 'node:child_process';
import assert from 'node:assert/strict';
const port=4181;const app=spawn(process.execPath,['node_modules/next/dist/bin/next','start','-H','127.0.0.1','-p',String(port)],{stdio:'pipe'});
let logs='';app.stdout.on('data',x=>logs+=x);app.stderr.on('data',x=>logs+=x);
try{let ready=false;for(let i=0;i<100;i++){try{await fetch(`http://127.0.0.1:${port}/robots.txt`);ready=true;break}catch{await new Promise(r=>setTimeout(r,100))}}assert.ok(ready,'Server starts: '+logs);
for(const route of ['/','/explore','/guides','/guides/express-entry','/updates','/india-to-canada','/videos','/ask-vip','/account','/saved','/backoffice','/review']){const r=await fetch(`http://127.0.0.1:${port}${route}`);assert.equal(r.status,200,route);const html=await r.text();assert.ok(html.includes('noindex'),`${route}: preview noindex`);console.log(`PASS ${route}: HTTP 200, noindex`)}
const r=await fetch(`http://127.0.0.1:${port}/media/vip-logo.webp`);assert.equal(r.status,200);assert.match(r.headers.get('content-type'),/image\/webp/);console.log('PASS shared WebP media');
}finally{app.kill('SIGTERM')}

import {test} from 'node:test';
import assert from 'node:assert/strict';
import {remainingQuestions,localized,validSlug,mediaUsages} from '../src/lib/rules.ts';
test('three guest questions reset on a different date',()=>{assert.equal(remainingQuestions({date:'2026-11-23',count:3},'2026-11-23',3),0);assert.equal(remainingQuestions({date:'2026-11-22',count:3},'2026-11-23',3),3);assert.equal(remainingQuestions({date:'2026-11-23',count:-5},'2026-11-23',3),3)});
test('unapproved translation falls back to English',()=>{const p={title:'Guide',description:'English',translations:{hi:{title:'अनुवाद',description:'हिंदी',approved:false}}};assert.equal(localized(p,'hi').fallback,true);p.translations.hi.approved=true;assert.equal(localized(p,'hi').title,'अनुवाद')});
test('reject unsafe and reserved slugs',()=>{assert.equal(validSlug('guides/express-entry'),true);assert.equal(validSlug('../admin'),false);assert.equal(validSlug('backoffice'),false);assert.equal(validSlug('api/test'),false)});
test('media usage includes page body and social previews and videos',()=>{assert.deepEqual(mediaUsages('m',{pages:[{id:'p',title:'Page',imageId:'m',seo:{ogImageId:'m'}}],videos:[{id:'v',title:'Video',imageId:'m'}]}),['Page','Video'])});
test('reserve member and policy routes from CMS',()=>{for(const slug of ['saved','review','privacy','terms','editorial-policy'])assert.equal(validSlug(slug),false)});

'use client';
import {createContext,useContext,useEffect,useState,type Dispatch,type SetStateAction,type ReactNode} from 'react';
import {seed} from './seed';
import {isContentState} from './validate';
import type {ContentState,Locale,ChatMessage} from './types';
type Store={state:ContentState;setState:Dispatch<SetStateAction<ContentState>>;locale:Locale;setLocale:Dispatch<SetStateAction<Locale>>;member:boolean;setMember:Dispatch<SetStateAction<boolean>>;saved:string[];toggleSaved:(id:string)=>void;messages:ChatMessage[];setMessages:Dispatch<SetStateAction<ChatMessage[]>>;ready:boolean};
const Context=createContext<Store|null>(null);
export function Provider({children}:{children:ReactNode}){
const [state,setState]=useState<ContentState>(seed);const [locale,setLocale]=useState<Locale>('en');const [member,setMember]=useState(false);const [saved,setSaved]=useState<string[]>([]);const [messages,setMessages]=useState<ChatMessage[]>([]);const [ready,setReady]=useState(false);
useEffect(()=>{try{const raw=localStorage.getItem('vip-preview-v1');if(raw){const v=JSON.parse(raw);if(isContentState(v.state)){if(!v.mobileArtworkV2){const artwork=seed.media.find(m=>m.id==='canada-home-art')!;if(!v.state.media.some((m:{id:string})=>m.id===artwork.id))v.state.media.push(artwork);v.state.pages=v.state.pages.map((p:{id:string;imageId:string})=>p.id==='home'&&p.imageId==='canada-mountains'?{...p,imageId:artwork.id}:p)}setState(v.state);}if(['en','hi','pa','gu'].includes(v.locale))setLocale(v.locale);if(Array.isArray(v.saved))setSaved(v.saved.filter((x:unknown)=>typeof x==='string'));if(Array.isArray(v.messages))setMessages(v.messages.filter((x:ChatMessage)=>x&&typeof x.text==='string'&&['user','assistant'].includes(x.role)));}}catch{}setReady(true)},[]);
useEffect(()=>{if(ready)try{localStorage.setItem('vip-preview-v1',JSON.stringify({state,locale,saved,messages,mobileArtworkV2:true}))}catch{}},[state,locale,saved,messages,ready]);
return <Context.Provider value={{state,setState,locale,setLocale,member,setMember,saved,toggleSaved:id=>setSaved(s=>s.includes(id)?s.filter(x=>x!==id):[...s,id]),messages,setMessages,ready}}>{children}</Context.Provider>
}
export function useStore(){const ctx=useContext(Context);if(!ctx)throw new Error('Provider missing');return ctx}

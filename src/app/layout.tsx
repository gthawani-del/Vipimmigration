import type {Metadata,Viewport} from 'next';import {Provider} from '@/lib/store';import {Shell} from '@/components/shell';import './globals.css';
export const viewport:Viewport={width:'device-width',initialScale:1,viewportFit:'cover'};
export const metadata:Metadata={title:{default:'VIP Immigration Services',template:'%s | VIP Immigration Services'},description:'Explore Canada immigration information, practical guides and official sources.',robots:{index:false,follow:false}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><Provider><Shell>{children}</Shell></Provider></body></html>}

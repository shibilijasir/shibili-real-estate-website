import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Muhammed Shibili Jasir | Property Consultant in Jeddah',
  description: 'Property sales and rental enquiry assistance in Jeddah, Saudi Arabia. Share your requirements with Muhammed Shibili Jasir.',
  keywords: ['Jeddah property consultant','Jeddah property for rent','Jeddah property for sale','Saudi Arabia real estate'],
  openGraph: { title: 'Muhammed Shibili Jasir | Property Consultant in Jeddah', description: 'Property sales and rental enquiry assistance in Jeddah, Saudi Arabia.', type: 'website' }
};
export const viewport: Viewport = { themeColor: '#073b2e', width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

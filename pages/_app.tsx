import Head from 'next/head';
import type { AppProps } from 'next/app';
import 'styles/globals.css';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    {/*<DefaultSeo*/}
    {/*    openGraph={ {*/}
    {/*        title: 'Nail Lounge and Spa',*/}
    {/*        description: 'Nail Lounge and Spa description',*/}
    {/*        type: 'website',*/}
    {/*        locale: 'en',*/}
    {/*        url: 'https://nailloungeandspa.net',*/}
    {/*        site_name: 'NailLoungeAndSpa',*/}
    {/*        images: [*/}
    {/*            {*/}
    {/*                url: 'https://nail-lounge-taupe.vercel.app/images/nail-lounge-logo.svg',*/}
    {/*                secureUrl: 'https://nail-lounge-taupe.vercel.app/images/nail-lounge-logo.svg',*/}
    {/*                type: 'image/svg',*/}
    {/*                width: 424,*/}
    {/*                height: 130*/}
    {/*            }*/}
    {/*        ],*/}
    {/*    } }*/}
    {/*/>*/}
      <Head>
          <title>Nail Lounge and Spa</title>
          {/* Open Graph / Facebook */ }
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://nail-lounge-taupe.vercel.app"/>
          <meta property="og:title" content="Nail Lounge and Spa"/>
          <meta property="og:description" content="Nail Lounge and Spa description"/>
          <meta property="og:image" content="https://nail-lounge-taupe.vercel.app/images/nail-lounge-logo.svg"/>
          <meta property="og:locale" content="en"/>
      </Head>

      <Component { ...pageProps } />
  </>
}
export default MyApp

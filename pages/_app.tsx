import type { AppProps } from 'next/app';
import 'styles/globals.css';

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
      <Component { ...pageProps } />
  </>
}
export default MyApp

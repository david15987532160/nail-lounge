import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <DefaultSeo
        openGraph={ {
          type: 'website',
          locale: 'en',
          url: 'https://nailloungeandspa.net',
          site_name: 'NailLoungeAndSpa',
          images: [
            {
                url: '/images/nail-lounge-logo.svg',
                secureUrl: '/images/nail-lounge-logo.svg',
                type: 'image/jpeg',
                width: 424,
                height: 130
            }
          ],
        } }
    />
    <Component { ...pageProps } />
  </>
}
export default MyApp

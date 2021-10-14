import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <DefaultSeo
        openGraph={ {
            title: 'Nail Lounge and Spa',
            description: 'Nail Lounge and Spa description',
            type: 'website',
            locale: 'en',
            url: 'https://nailloungeandspa.net',
            site_name: 'NailLoungeAndSpa',
            images: [
                {
                    url: 'https://nailloungeandspa.net/images/nail-lounge-logo.svg',
                    secureUrl: 'https://nailloungeandspa.net/images/nail-lounge-logo.svg',
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

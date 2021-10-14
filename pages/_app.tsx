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
              url: 'http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg'
            }
          ],
        } }
    />
    <Component { ...pageProps } />
  </>
}
export default MyApp

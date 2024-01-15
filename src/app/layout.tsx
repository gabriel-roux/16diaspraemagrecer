import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Nunito_Sans, Roboto } from 'next/font/google'
import '@/styles/globals.css'
import Image from 'next/image'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
})
const NunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: '16 Dias para Mudar',
  description:
    '16 Dias para Mudar é um desafio de 16 dias para mudar sua vida e sua saúde.',
  abstract:
    '16 Dias para Mudar é um desafio de 16 dias para mudar sua vida e sua saúde.',
  applicationName: '16 Dias para Mudar',
  keywords: '16 dias para mudar, 16 dias, mudar, desafio, saúde, vida, mudança',
  category: 'Health',
  icons: '/public/favicon.svg',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '1087262959085545');
                    fbq('track', 'PageView');
                    `,
          }}
        />

        <link
          rel="preload"
          href="https://player-vz-cab8bf78-de6.tv.pandavideo.com.br/embed/css/styles.css"
          as="style"
        />
        <link
          rel="prerender"
          href="https://player-vz-cab8bf78-de6.tv.pandavideo.com.br/embed/?v=68365408-3ea1-47cd-a8e3-4623c4a27641"
        />
        <link
          rel="preload"
          href="https://player-vz-cab8bf78-de6.tv.pandavideo.com.br/embed/js/hls.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://player-vz-cab8bf78-de6.tv.pandavideo.com.br/embed/js/plyr.polyfilled.min.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://config.tv.pandavideo.com.br/vz-cab8bf78-de6/68365408-3ea1-47cd-a8e3-4623c4a27641.json"
          as="fetch"
        />
        <link
          rel="preload"
          href="https://config.tv.pandavideo.com.br/vz-cab8bf78-de6/config.json"
          as="fetch"
        />
        <link
          rel="preload"
          href="https://b-vz-cab8bf78-de6.tv.pandavideo.com.br/68365408-3ea1-47cd-a8e3-4623c4a27641/playlist.m3u8"
          as="fetch"
        />
        <link
          rel="dns-prefetch"
          href="https://b-vz-cab8bf78-de6.tv.pandavideo.com.br"
        />
        <link
          rel="dns-prefetch"
          href="https://player-vz-cab8bf78-de6.tv.pandavideo.com.br"
        />
        <link rel="dns-prefetch" href="https://vz-cab8bf78-de6.b-cdn.net" />

        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={`${NunitoSans.variable} ${roboto.className}`}>
        {children}

        <noscript>
          <Image
            height={1}
            width={1}
            style={{ display: 'none' }}
            alt="Facebook Pixel"
            src="https://www.facebook.com/tr?id=1087262959085545&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  )
}

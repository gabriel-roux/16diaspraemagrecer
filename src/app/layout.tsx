import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Nunito_Sans, Roboto } from 'next/font/google'
import '@/styles/globals.css'

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
      </head>
      <body className={`${NunitoSans.variable} ${roboto.className}`}>
        {children}
      </body>
    </html>
  )
}

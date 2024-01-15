'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Vsl() {
  const meuIframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeHeight, setIframeHeight] = useState('530px')
  const [showButton, setShowButton] = useState(false)

  // Função para ajustar a altura do iframe com base na largura
  const ajustarAltura = () => {
    if (meuIframeRef.current) {
      const width = meuIframeRef.current.clientWidth // Obter a largura do iframe
      const scaleFactor = 0.56267 // Fator de escala de 10%, você pode ajustar conforme necessário
      const newHeight = `${width * scaleFactor}px` // Calcula a nova altura em pixels
      setIframeHeight(newHeight) // Define a nova altura para o estado
    }
  }

  // Chamando a função ajustarAltura quando o componente for renderizado e toda vez que o tamanho da janela mudar
  useEffect(() => {
    ajustarAltura()
    const handleResize = () => ajustarAltura()
    window.addEventListener('resize', handleResize)

    // Remover o listener quando o componente for desmontado para evitar memory leaks
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowButton(true)
    }, 100000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="max-w-[950px] w-full mx-auto flex flex-col gap-8">
      <iframe
        ref={meuIframeRef}
        id="panda-68365408-3ea1-47cd-a8e3-4623c4a27641"
        src="https://player-vz-cab8bf78-de6.tv.pandavideo.com.br/embed/?v=68365408-3ea1-47cd-a8e3-4623c4a27641"
        className="w-full border-0 rounded-2xl shadow-2xl shadow-purple-800/20"
        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
        allowFullScreen={false}
        style={{
          height: iframeHeight,
        }}
      />

      {showButton && (
        <Link
          href="https://pay.slatpay.com/QGGOI9"
          className="w-full max-w- py-5 flex items-center justify-center text-2xl rounded-full uppercase bg-purple-500 shadow-lg shadow-violet-800/50 font-bold transition-all duration-200 hover:bg-purple-600"
        >
          QUERO DAR O PRIMEIRO PASSO AGORA!
        </Link>
      )}
    </div>
  )
}

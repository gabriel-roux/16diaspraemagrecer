'use client'

import { useEffect, useRef, useState } from 'react'

export default function Vsl() {
  const meuIframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeHeight, setIframeHeight] = useState('530px')

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

  return (
    <div className="max-w-[950px] w-full mx-auto">
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
    </div>
  )
}

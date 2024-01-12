import Image from 'next/image'
import Logo from '@/assets/logo.png'

export function Headline() {
  return (
    <header className="w-full h-20 py-6">
      <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
        <Image
          src={Logo}
          alt="16 Dias para Mudar"
          width={200}
          height={200}
          quality={100}
          className="object-contain"
        />

        <div className="flex items-center gap-6">
          <button>Desafio 16 Dias</button>

          <button>Como Funciona</button>

          <button>Depoimentos</button>

          <button>Pra quem é</button>

          <button>Quem Somos</button>

          <button>Dúvidas</button>
        </div>
      </div>
    </header>
  )
}

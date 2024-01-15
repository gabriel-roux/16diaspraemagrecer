import Image from 'next/image'
import Logo from '@/assets/logo.png'
import { RefObject } from 'react'

interface HeadlineProps {
  desafioRef: RefObject<HTMLDivElement>
  comoFuncionaRef: RefObject<HTMLDivElement>
  depoimentosRef: RefObject<HTMLDivElement>
  praQuemERef: RefObject<HTMLDivElement>
  quemSomosRef: RefObject<HTMLDivElement>
  duvidasRef: RefObject<HTMLDivElement>
}

export function Headline({
  desafioRef,
  comoFuncionaRef,
  depoimentosRef,
  praQuemERef,
  quemSomosRef,
  duvidasRef,
}: HeadlineProps) {
  const goToRef = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <header className="w-full h-20 py-6">
      <div className="flex justify-center md:justify-between items-center max-w-6xl mx-auto w-full">
        <Image
          src={Logo}
          alt="16 Dias para Mudar"
          width={200}
          height={200}
          quality={100}
          className="object-contain"
        />

        <div className="md:flex items-center gap-6 hidden">
          <button onClick={() => goToRef(desafioRef)}>Desafio 16 Dias</button>

          <button onClick={() => goToRef(comoFuncionaRef)}>
            Como Funciona
          </button>

          <button onClick={() => goToRef(depoimentosRef)}>Depoimentos</button>

          <button onClick={() => goToRef(praQuemERef)}>Pra quem é</button>

          <button onClick={() => goToRef(quemSomosRef)}>Quem Somos</button>

          <button onClick={() => goToRef(duvidasRef)}>Dúvidas</button>
        </div>
      </div>
    </header>
  )
}

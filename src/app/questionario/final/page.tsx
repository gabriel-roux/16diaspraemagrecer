import Image from 'next/image'
import Logo from '@/assets/logo.png'
import Vsl from './vsl'
import { Comentarios } from '@/components/comments'

export default function FinalPage() {
  return (
    <main className="p-6 md:p-10">
      <div className="flex flex-col items-center justify-center gap-12">
        <Image
          src={Logo}
          alt="16 Dias para Mudar"
          width={225}
          height={225}
          quality={100}
          className="object-contain"
        />

        <div className="flex flex-col gap-3">
          <h3 className="font-nunito text-2xl md:text-5xl max-w-6xl font-black text-center">
            CONQUISTE O CORPO E A BARRIGA DOS{' '}
            <span className="text-purple-600 underline">
              SONHOS EM ATÉ 16 DIAS
            </span>
          </h3>

          <p className="font-nunito text-sm md:text-lg max-w-6xl text-gray-400 text-center">
            <b>Se você já fez de tudo para perder peso (ou manter)</b> e não
            teve resultados. Aqui está a solução! Assista o video da Nutri para
            saber como.
          </p>
        </div>

        <Vsl />

        <Comentarios />
      </div>
    </main>
  )
}

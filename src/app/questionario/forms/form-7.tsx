import { SealCheck } from '@phosphor-icons/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Formulario1Props {
  nextStep: () => void
}

export function Formulario7({ nextStep }: Formulario1Props) {
  const [selected, setSelected] = useState(0)

  const handleSelected = (value: number) => {
    setSelected(value)
    localStorage.setItem('form7', value.toString())
    nextStep()
  }

  useEffect(() => {
    const form7 = localStorage.getItem('form7')
    if (form7) setSelected(Number(form7))
  }, [])

  return (
    <>
      <div>
        <h3 className="font-nunito text-2xl font-bold text-center">
          7. NÍVEL DE MOTIVAÇÃO
        </h3>
        <p className="font-nunito text-lg text-gray-400 text-center">
          Como descreveria o seu nível de motivação para atingir os seus
          objetivos?
        </p>
      </div>

      <div className="flex flex-col gap-4 px-4 md:px-0">
        <div
          onClick={() => handleSelected(1)}
          className={`py-4 px-6 bg-[#2e2a41] rounded-lg md:w-[460px] border ${
            selected === 1 ? 'border-purple-600' : 'border-transparent'
          } hover:border-purple-600 transition-all duration-200 cursor-pointer shadow-lg shadow-gray-800/20 flex items-center justify-between`}
        >
          <p className="font-nunito text-lg text-white font-semibold">
            Extremamente motivada, focada e determinada
          </p>

          {selected === 1 && (
            <SealCheck
              size={24}
              weight="fill"
              className="text-purple-500 flex-shrink-0"
            />
          )}
        </div>
        <div
          onClick={() => handleSelected(2)}
          className={`py-4 px-6 bg-[#2e2a41] rounded-lg md:w-[460px] border ${
            selected === 2 ? 'border-purple-600' : 'border-transparent'
          } hover:border-purple-600 transition-all duration-200 cursor-pointer shadow-lg shadow-gray-800/20 flex items-center justify-between`}
        >
          <p className="font-nunito text-lg text-white font-semibold">
            Motivada na maioria das vezes, mas às vezes perco o foco
          </p>
          {selected === 2 && (
            <SealCheck
              size={24}
              weight="fill"
              className="text-purple-500 flex-shrink-0"
            />
          )}
        </div>
        <div
          onClick={() => handleSelected(3)}
          className={`py-4 px-6 bg-[#2e2a41] rounded-lg md:w-[460px] border ${
            selected === 3 ? 'border-purple-600' : 'border-transparent'
          } hover:border-purple-600 transition-all duration-200 cursor-pointer shadow-lg shadow-gray-800/20 flex items-center justify-between`}
        >
          <p className="font-nunito text-lg text-white font-semibold">
            Moderadamente motivado, busco constante inspiração
          </p>
          {selected === 3 && (
            <SealCheck
              size={24}
              weight="fill"
              className="text-purple-500 flex-shrink-0"
            />
          )}
        </div>
        <div
          onClick={() => handleSelected(4)}
          className={`py-4 px-6 bg-[#2e2a41] rounded-lg md:w-[460px] border ${
            selected === 4 ? 'border-purple-600' : 'border-transparent'
          } hover:border-purple-600 transition-all duration-200 cursor-pointer shadow-lg shadow-gray-800/20 flex items-center justify-between`}
        >
          <p className="font-nunito text-lg text-white font-semibold">
            Pouco motivada, às vezes sinto dificuldade em começar
          </p>
          {selected === 4 && (
            <SealCheck
              size={24}
              weight="fill"
              className="text-purple-500 flex-shrink-0"
            />
          )}
        </div>
        <div
          onClick={() => handleSelected(5)}
          className={`py-4 px-6 bg-[#2e2a41] rounded-lg md:w-[460px] border ${
            selected === 5 ? 'border-purple-600' : 'border-transparent'
          } hover:border-purple-600 transition-all duration-200 cursor-pointer shadow-lg shadow-gray-800/20 flex items-center justify-between`}
        >
          <p className="font-nunito text-lg text-white font-semibold">
            Sem motivação, luto para encontrar um propósito ou objetivo
          </p>
          {selected === 5 && (
            <SealCheck
              size={24}
              weight="fill"
              className="text-purple-500 flex-shrink-0"
            />
          )}
        </div>

        <Link
          href="/questionario/final"
          className="px-7 py-4 flex items-center justify-center rounded-lg uppercase bg-purple-500 shadow-lg shadow-violet-800/50 font-bold transition-all duration-200 hover:bg-purple-600"
        >
          Finalizar questionário
        </Link>
      </div>
    </>
  )
}

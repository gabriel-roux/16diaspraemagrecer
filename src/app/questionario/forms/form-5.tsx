import { SealCheck } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

interface Formulario1Props {
  nextStep: () => void
}

export function Formulario5({ nextStep }: Formulario1Props) {
  const [selected, setSelected] = useState(0)

  const handleSelected = (value: number) => {
    setSelected(value)
    localStorage.setItem('form5', value.toString())
    nextStep()
  }

  useEffect(() => {
    const form5 = localStorage.getItem('form5')
    if (form5) setSelected(Number(form5))
  }, [])

  return (
    <>
      <div>
        <h3 className="font-nunito text-2xl font-bold text-center">
          5. NÍVEL DE SATISFAÇÃO COM A VIDA
        </h3>
        <p className="font-nunito text-lg text-gray-400 text-center">
          Quão satisfeita está com a sua vida no geral?
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
            Muito satisfeita, não mudaria nada
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
            Satisfeita, mas sempre há espaço para melhorias
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
            Neutra, nem satisfeita nem insatisfeita
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
            Insatisfeita, gostaria de fazer algumas mudanças
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
            Muito insatisfeita, gostaria de mudar muitas coisas
          </p>
          {selected === 5 && (
            <SealCheck
              size={24}
              weight="fill"
              className="text-purple-500 flex-shrink-0"
            />
          )}
        </div>
      </div>
    </>
  )
}

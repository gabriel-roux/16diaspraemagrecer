import { SealCheck } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

interface Formulario1Props {
  nextStep: () => void
}

export function Formulario6({ nextStep }: Formulario1Props) {
  const [selected, setSelected] = useState(0)

  const handleSelected = (value: number) => {
    setSelected(value)
    localStorage.setItem('form6', value.toString())
    nextStep()
  }

  useEffect(() => {
    const form6 = localStorage.getItem('form6')
    if (form6) setSelected(Number(form6))
  }, [])

  return (
    <>
      <div>
        <h3 className="font-nunito text-2xl font-bold text-center">
          6. FLEXIBILIDADE
        </h3>
        <p className="font-nunito text-lg text-gray-400">
          Quão flexível é em termos de horários e planos?
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div
          onClick={() => handleSelected(1)}
          className={`py-4 px-6 bg-[#2e2a41] rounded-lg w-[460px] border ${
            selected === 1 ? 'border-purple-600' : 'border-transparent'
          } hover:border-purple-600 transition-all duration-200 cursor-pointer shadow-lg shadow-gray-800/20 flex items-center justify-between`}
        >
          <p className="font-nunito text-lg text-white font-semibold">
            Muito flexível, consigo adaptar-me facilmente a mudanças
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
          className={`py-4 px-6 bg-[#2e2a41] rounded-lg w-[460px] border ${
            selected === 2 ? 'border-purple-600' : 'border-transparent'
          } hover:border-purple-600 transition-all duration-200 cursor-pointer shadow-lg shadow-gray-800/20 flex items-center justify-between`}
        >
          <p className="font-nunito text-lg text-white font-semibold">
            Geralmente flexível, mas prefiro seguir um plano
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
          className={`py-4 px-6 bg-[#2e2a41] rounded-lg w-[460px] border ${
            selected === 3 ? 'border-purple-600' : 'border-transparent'
          } hover:border-purple-600 transition-all duration-200 cursor-pointer shadow-lg shadow-gray-800/20 flex items-center justify-between`}
        >
          <p className="font-nunito text-lg text-white font-semibold">
            Moderadamente flexível, mas algumas mudanças me incomodam
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
          className={`py-4 px-6 bg-[#2e2a41] rounded-lg w-[460px] border ${
            selected === 4 ? 'border-purple-600' : 'border-transparent'
          } hover:border-purple-600 transition-all duration-200 cursor-pointer shadow-lg shadow-gray-800/20 flex items-center justify-between`}
        >
          <p className="font-nunito text-lg text-white font-semibold">
            Pouco flexível, prefiro seguir uma rotina fixa
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
          className={`py-4 px-6 bg-[#2e2a41] rounded-lg w-[460px] border ${
            selected === 5 ? 'border-purple-600' : 'border-transparent'
          } hover:border-purple-600 transition-all duration-200 cursor-pointer shadow-lg shadow-gray-800/20 flex items-center justify-between`}
        >
          <p className="font-nunito text-lg text-white font-semibold">
            Inflexível, não gosto de alterações nos meus planos
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

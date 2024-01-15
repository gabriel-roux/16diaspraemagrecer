import { SealCheck } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

interface Formulario1Props {
  nextStep: () => void
}

export function Formulario3({ nextStep }: Formulario1Props) {
  const [selected, setSelected] = useState(0)

  const handleSelected = (value: number) => {
    setSelected(value)
    localStorage.setItem('form3', value.toString())
    nextStep()
  }

  useEffect(() => {
    const form3 = localStorage.getItem('form3')
    if (form3) setSelected(Number(form3))
  }, [])

  return (
    <>
      <div>
        <h3 className="font-nunito text-2xl font-bold text-center">
          3. NÍVEL DE ESTRESSE
        </h3>
        <p className="font-nunito text-lg text-gray-400">
          Como descreveria o seu nível de estresse geral?
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
            Estou sempre relaxada, raramente me sinto estressada
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
            Consigo lidar com o estresse na maioria das vezes
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
            Sinto-me frequentemente estressada, mas consigo administrar
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
            O estresse afeta significativamente minha vida diária
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
            Estou constantemente sobrecarregada e sinto dificuldade em lidar com
            o estresse
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

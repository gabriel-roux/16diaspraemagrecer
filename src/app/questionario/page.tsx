'use client'

import Image from 'next/image'
import Logo from '@/assets/logo.png'
import { ArrowRight, ArrowLeft } from '@phosphor-icons/react'
import Link from 'next/link'
import { useState } from 'react'
import { Formulario1 } from './forms/form-1'
import { Formulario2 } from './forms/form-2'
import { Formulario3 } from './forms/form-3'
import { Formulario4 } from './forms/form-4'
import { Formulario5 } from './forms/form-5'
import { Formulario6 } from './forms/form-6'
import { Formulario7 } from './forms/form-7'

export default function QuestionarioPage() {
  const [step, setStep] = useState(0)

  return (
    <>
      <header className="w-full py-4 bg-[#1b1929]">
        <div className="flex justify-center md:justify-between items-center max-w-4xl mx-auto w-full">
          <button
            disabled={step === 0}
            onClick={() => setStep(step - 1)}
            className="flex items-center gap-2 hover:text-purple-500 transition-all duration-200 disabled:opacity-30"
          >
            <ArrowLeft weight="bold" size={20} />
            <span className="text-lg font-bold">Voltar</span>
          </button>

          <Link href="/">
            <Image
              src={Logo}
              alt="16 Dias para Mudar"
              width={130}
              height={150}
              quality={100}
              className="object-contain"
            />
          </Link>

          <button
            onClick={() => setStep(step + 1)}
            disabled={step === 6}
            className="flex items-center gap-2 hover:text-purple-500 transition-all duration-200 disabled:opacity-50"
          >
            <span className="text-lg font-bold">Pular</span>
            <ArrowRight weight="bold" size={20} />
          </button>
        </div>
      </header>
      <main className="mt-14">
        <div className="max-w-2xl mx-auto flex items-center justify-start flex-col gap-6">
          {step === 0 ? (
            <Formulario1 nextStep={() => setStep(step + 1)} />
          ) : step === 1 ? (
            <Formulario2 nextStep={() => setStep(step + 1)} />
          ) : step === 2 ? (
            <Formulario3 nextStep={() => setStep(step + 1)} />
          ) : step === 3 ? (
            <Formulario4 nextStep={() => setStep(step + 1)} />
          ) : step === 4 ? (
            <Formulario5 nextStep={() => setStep(step + 1)} />
          ) : step === 5 ? (
            <Formulario6 nextStep={() => setStep(step + 1)} />
          ) : (
            <Formulario7 nextStep={() => setStep(step + 1)} />
          )}
        </div>
      </main>
    </>
  )
}

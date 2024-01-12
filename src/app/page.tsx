/* eslint-disable react/no-unescaped-entities */
import Book from '@/assets/book.png'
import Image from 'next/image'
import ChartLine from '@/components/icons/chart-line'
import Phone from '@/components/icons/phone'
import Pulse from '@/components/icons/pulse'
import Heartbeat from '@/components/icons/heart-beat'
import BookOpen from '@/components/icons/book-open'
import PiramideAlimentar from '@/assets/prato.png'
import ChaRoxo from '@/assets/cha-roxo.png'
import Atendente from '@/assets/atendente.png'
import Treinar from '@/assets/treinar.png'
import SealCheck from '@/components/icons/seal-check'
import Safety from '@/assets/safety/safety.png'

export default function Home() {
  return (
    <main className="mt-14">
      <section className="w-full bg-gradient-to-r from-[#14121c] to-[#6050a020] py-12">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="max-w-[50%] flex flex-col gap-8 items-start">
            <div className="flex flex-col gap-3">
              <h1 className="text-5xl font-bold text-white leading-[130%] max-w-lg">
                Desafio 16 Dias para Mudar: Descubra o{' '}
                <span className="text-purple-600">Poder da Mudança!</span>
              </h1>

              <p className="text-gray-400 text-sm">
                Seja a mudança que você busca. O Desafio 16 Dias é o caminho
                para uma transformação profunda e duradoura. Aceite o desafio,
                liberte seu potencial e conquiste uma nova versão de si mesmo!
              </p>
            </div>

            <button className="px-7 py-3 rounded-full uppercase bg-purple-500 shadow-lg shadow-violet-800/50 font-bold transition-all duration-200 hover:bg-purple-600">
              Começar o Desáfio
            </button>
          </div>

          <Image
            src={Book}
            alt="16 Dias para Mudar"
            width={350}
            height={350}
            quality={100}
            className="rounded-xl rotate-6 flutter"
          />
        </div>
      </section>

      <section className="w-full py-20 max-w-7xl mx-auto flex flex-col gap-8">
        <div>
          <h2 className="text-4xl font-bold text-center text-gray-100">
            Como Funciona o Nosso{' '}
            <span className="text-purple-600">Desafio de Emagrecimento</span> em
            16 Dias
          </h2>

          <p className="text-center text-gray-400 text-base max-w-[60%] mx-auto mt-4">
            Nosso programa foi cuidadosamente elaborado para oferecer uma
            abordagem prática, eficaz e sustentável para alcançar seus objetivos
            de perda de peso. Aqui está como o desafio funciona
          </p>
        </div>

        <div className="flex flex-col items-center w-full max-w-[600px] gap-6 mx-auto">
          {/* Guia Prático e Simplificado */}
          <div className="p-6 bg-[#2e2a41] rounded-lg shadow-md w-full">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold text-left text-gray-100">
                Guia Transformador
              </h3>
              <p className="flex gap-1 text-purple-400 font-bold text-2xl">
                <BookOpen size={32} />
              </p>
            </div>
            <p className="text-left text-gray-400 text-sm mx-auto mt-4">
              Conquiste resultados visíveis em 16 dias com nosso guia
              transformador, combinando nutrição e exercícios para um
              emagrecimento eficaz e saudável.
            </p>
          </div>

          {/* Plano Nutricional Personalizado */}
          <div className="p-6 bg-[#2e2a41] rounded-lg shadow-md w-full">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold text-left text-gray-100">
                Alimentação Inteligente
              </h3>
              <p className="flex gap-1 text-purple-400 font-bold text-2xl">
                <Heartbeat size={32} />
              </p>
            </div>
            <p className="text-left text-gray-400 text-sm mx-auto mt-4">
              Explore planos alimentares personalizados, focados em nutrição
              balanceada e sabor, para transformar sua saúde e bem-estar.
            </p>
          </div>

          {/* Rotinas de Exercícios Eficientes */}
          <div className="p-6 bg-[#2e2a41] rounded-lg shadow-md w-full">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold text-left text-gray-100">
                Exercícios Dinâmicos
              </h3>
              <p className="flex gap-1 text-purple-400 font-bold text-2xl">
                <Pulse size={32} />
              </p>
            </div>
            <p className="text-left text-gray-400 text-sm mx-auto mt-4">
              Acesse rotinas de exercícios adaptáveis e eficazes, perfeitas para
              qualquer nível de condicionamento, integradas facilmente em sua
              rotina diária.
            </p>
          </div>

          {/* Suporte Contínuo */}
          <div className="p-6 bg-[#2e2a41] rounded-lg shadow-md w-full">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold text-left text-gray-100">
                Comunidade e Apoio
              </h3>
              <p className="flex gap-1 text-purple-400 font-bold text-2xl">
                <Phone size={32} />
              </p>
            </div>
            <p className="text-left text-gray-400 text-sm mx-auto mt-4">
              Junte-se à nossa comunidade online para suporte contínuo,
              compartilhamento de experiências e motivação coletiva.
            </p>
          </div>

          {/* Monitoramento de Progresso */}
          <div className="p-6 bg-[#2e2a41] rounded-lg shadow-md w-full">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold text-left text-gray-100">
                Acompanhe Seu Sucesso
              </h3>
              <p className="flex gap-1 text-purple-400 font-bold text-2xl">
                <ChartLine size={32} />
              </p>
            </div>
            <p className="text-left text-gray-400 text-sm mx-auto mt-4">
              Monitore seu progresso e celebre cada conquista com nossas
              ferramentas intuitivas de acompanhamento.
            </p>
          </div>

          <button className="px-7 py-3 rounded-full bg-purple-500 shadow-lg shadow-violet-800/50 font-bold text-xl mt-4 uppercase transition-all duration-200 hover:bg-purple-600">
            Quero Garantir o Meu Agora
          </button>
        </div>
      </section>

      <section className="w-full py-20 bg-purple-600 flex flex-col items-center gap-12">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-20">
          <h2 className="text-4xl font-black text-center text-gray-100">
            UM PROGRAMA COMPLETO QUE VAI, LITERALMENTE{' '}
            <span className="text-purple-950">
              PEGAR VOCÊ PELA MÃO E TE GUIAR PARA UMA VIDA COM MAIS SAÚDE
            </span>
            , AUTOESTIMA E FELICIDADE
          </h2>

          <div className="grid grid-cols-4 gap-6">
            <div className="p-6 bg-white h-[400px] rounded-lg shadow-lg flex flex-col items-center gap-6">
              <Image
                src={PiramideAlimentar}
                alt="Pirâmide Alimentar"
                width={175}
                height={175}
                quality={100}
                className="object-contain"
              />

              <div>
                <h3 className="text-xl font-black text-center text-gray-800">
                  Cardápio Transformador
                </h3>

                <p className="text-center text-gray-600 text-medium mx-auto mt-2">
                  Explore cardápios e receitas que aceleram o metabolismo e são
                  fáceis de preparar, projetados para nutrir seu corpo e mente.
                </p>
              </div>
            </div>
            <div className="p-6 bg-white h-[400px] rounded-lg shadow-lg flex flex-col items-center gap-6">
              <Image
                src={ChaRoxo}
                alt="Cha Roxo"
                width={175}
                height={175}
                quality={100}
                className="h-[175px] flex-shrink-0"
              />

              <div>
                <h3 className="text-xl font-black text-center text-gray-800">
                  Elixir do Vitalidade
                </h3>

                <p className="text-center text-gray-600 text-medium mx-auto mt-2">
                  Emagreça de vez com o chá natural que acelera o metabolismo e
                  elimina gordura. Testado e aprovado por dezenas de mulheres no
                  Brasil!
                </p>
              </div>
            </div>
            <div className="p-6 bg-white h-[400px] rounded-lg shadow-lg flex flex-col items-center gap-6">
              <Image
                src={Atendente}
                alt="Cha Roxo"
                width={175}
                height={175}
                quality={100}
                className="object-contain h-[175px] flex-shrink-0"
              />

              <div>
                <h3 className="text-xl font-black text-center text-gray-800">
                  Mentoria e Suporte
                </h3>

                <p className="text-center text-gray-600 text-medium mx-auto mt-2">
                  Não está sozinho! Receba orientação personalizada de nossos
                  especialistas para esclarecer dúvidas e manter-se no caminho
                  certo.
                </p>
              </div>
            </div>
            <div className="p-6 bg-white h-[400px] rounded-lg shadow-lg flex flex-col items-center gap-6">
              <Image
                src={Treinar}
                alt="Treinar"
                width={175}
                height={175}
                quality={100}
                className="object-contain h-[175px] flex-shrink-0 object-[20px]"
              />

              <div>
                <h3 className="text-xl font-black text-center text-gray-800">
                  Movimente-se e Celebre
                </h3>

                <p className="text-center text-gray-600 text-medium mx-auto mt-2">
                  Descubra rotinas de exercícios que você pode amar, com vídeos
                  motivacionais para todos os níveis, projetados para queimar
                  calorias e fortalecer o corpo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="px-7 py-3 rounded-full bg-white text-purple-600 shadow-lg shadow-violet-800/50 font-bold text-2xl mt-4 uppercase transition-all duration-200 hover:bg-gray-200">
          QUERO TER RESULTADOS DE VERDADE
        </button>
      </section>

      <section className="w-full py-20 flex flex-col items-center gap-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-8">
              <h3 className="text-[39px] font-black text-white">
                Pra quem é a comunidade do <br />
                <span className="text-6xl text-purple-600">
                  DESAFIO 16 DIAS?
                </span>
              </h3>

              <ul className="flex flex-col gap-3">
                <li className="text-purple-200 font-bold flex items-center gap-2 text-lg">
                  <SealCheck weight="fill" size={24} /> Mulheres que querem
                  emagrecer de forma saudável e definitiva.
                </li>
                <li className="text-purple-200 font-bold flex items-center gap-2 text-lg">
                  <SealCheck weight="fill" size={24} /> Não quer passar fome
                  para emagrecer.
                </li>
                <li className="text-purple-200 font-bold flex items-center gap-2 text-lg">
                  <SealCheck weight="fill" size={24} /> Não quer passar horas na
                  academia.
                </li>
                <li className="text-purple-200 font-bold flex items-center gap-2 text-lg">
                  <SealCheck weight="fill" size={24} /> Não quer gastar dinheiro
                  com remédios.
                </li>
                <li className="text-purple-200 font-bold flex items-center gap-2 text-lg">
                  <SealCheck weight="fill" size={24} /> Está com vergonha de
                  olhar no espelho.
                </li>
                <li className="text-purple-200 font-bold flex items-center gap-2 text-lg">
                  <SealCheck weight="fill" size={24} /> Quer ficar bem usando
                  roupas mais justas.
                </li>
                <li className="text-purple-200 font-bold flex items-center gap-2 text-lg">
                  <SealCheck weight="fill" size={24} /> Não tem tempo ou
                  dinheiro a perder.
                </li>
              </ul>

              <div className="w-full flex items-center flex-col gap-6">
                <button className="w-full px-7 py-3 rounded-full bg-purple-500 shadow-lg shadow-violet-800/50 font-bold text-xl mt-4 uppercase transition-all duration-200 hover:bg-purple-600">
                  Quero Emagrecer com Saúde
                </button>

                <Image
                  src={Safety}
                  alt="Segurança"
                  width={400}
                  height={400}
                  quality={100}
                  className="object-contain text-center"
                />
              </div>
            </div>

            <Image
              src={Book}
              alt="16 Dias para Mudar"
              width={350}
              height={350}
              quality={100}
              className="rounded-xl rotate-6 flutter"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

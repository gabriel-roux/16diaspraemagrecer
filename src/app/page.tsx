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
import MulherEmagrecendo from '@/assets/mulher-emagrecendo.png'
import ProdutoMockup from '@/assets/produto-mockup.png'
import Garantia from '@/assets/garantia.png'
import Duvidas from '@/assets/duvidas.png'
import FaqComponent from '@/components/duvidas'
import AntesDepois1 from '@/assets/depoimentos/antes-e-depois-1.png'
import AntesDepois2 from '@/assets/depoimentos/antes-e-depois-2.png'
import AntesDepois3 from '@/assets/depoimentos/antes-e-depois-3.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Carousel from '@/components/carousel'

export default function Home() {
  return (
    <main className="mt-14">
      <section className="w-full bg-gradient-to-r from-[#14121c] to-[#6050a020] px-4 md:px-0 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <div className="w-full md:max-w-[50%] flex flex-col gap-8 items-start">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-[130%] max-w-lg">
                Desafio 16 Dias para Mudar: Descubra o{' '}
                <span className="text-purple-600">Poder da Mudança!</span>
              </h1>

              <p className="text-gray-400 text-lg md:text-sm">
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
            className="rounded-xl flutter hidden md:block"
          />

          <Image
            src={Book}
            alt="16 Dias para Mudar"
            width={350}
            height={350}
            quality={100}
            className="rounded-xl mt-16"
          />
        </div>
      </section>

      <section className="w-full px-4 md:px-0 py-20 max-w-7xl mx-auto flex flex-col gap-8">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-100">
            Como Funciona o Nosso{' '}
            <span className="text-purple-600">Desafio de Emagrecimento</span> em
            16 Dias
          </h2>

          <p className="text-center text-gray-400 text-base md:max-w-[60%] mx-auto mt-4">
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

      <section className="w-full px-4 md:px-0 py-24 bg-[#9168f7] flex flex-col items-center gap-12">
        <h3 className="text-2xl md:text-4xl font-black text-center text-white md:max-w-[60%]">
          Junte-se a mulheres que seguiram o guia e hoje estão felizes e
          realizadas,{' '}
          <span className="text-purple-950 underline">
            COM O CORPO E SAÚDE QUE TANTO QUERIAM.
          </span>
        </h3>

        <div className="w-full md:max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <Image
            src={AntesDepois1}
            alt="Antes e Depois"
            width={400}
            height={400}
            quality={100}
            className="object-contain"
          />
          <Image
            src={AntesDepois2}
            alt="Antes e Depois"
            width={400}
            height={400}
            quality={100}
            className="object-contain"
          />
          <Image
            src={AntesDepois3}
            alt="Antes e Depois"
            width={400}
            height={400}
            quality={100}
            className="object-contain"
          />
        </div>

        <div className="w-full max-w-6xl mx-auto">
          <Carousel />
        </div>
      </section>

      <section className="w-full px-4 md:px-0 py-20 bg-[#1b1929] flex flex-col items-center gap-12">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-20">
          <h2 className="text-2xl md:text-4xl font-black text-center text-gray-100">
            UM PROGRAMA COMPLETO QUE VAI, LITERALMENTE{' '}
            <span className="text-purple-600">
              PEGAR VOCÊ PELA MÃO E TE GUIAR PARA UMA VIDA COM MAIS SAÚDE
            </span>
            , AUTOESTIMA E FELICIDADE
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 bg-[#2e2a41] h-[400px] rounded-lg shadow-lg flex flex-col items-center gap-6">
              <Image
                src={PiramideAlimentar}
                alt="Pirâmide Alimentar"
                width={175}
                height={175}
                quality={100}
                className="object-contain"
              />

              <div>
                <h3 className="text-xl font-black text-center text-white">
                  Cardápio Transformador
                </h3>

                <p className="text-center text-gray-400 text-medium mx-auto mt-2">
                  Explore cardápios e receitas que aceleram o metabolismo e são
                  fáceis de preparar, projetados para nutrir seu corpo e mente.
                </p>
              </div>
            </div>
            <div className="p-6 bg-[#2e2a41] h-[400px] rounded-lg shadow-lg flex flex-col items-center gap-6">
              <Image
                src={ChaRoxo}
                alt="Cha Roxo"
                width={175}
                height={175}
                quality={100}
                className="h-[175px] flex-shrink-0"
              />

              <div>
                <h3 className="text-xl font-black text-center text-white">
                  Elixir do Vitalidade
                </h3>

                <p className="text-center text-gray-400 text-medium mx-auto mt-2">
                  Emagreça de vez com o chá natural que acelera o metabolismo e
                  elimina gordura. Testado e aprovado por dezenas de mulheres no
                  Brasil!
                </p>
              </div>
            </div>
            <div className="p-6 bg-[#2e2a41] h-[400px] rounded-lg shadow-lg flex flex-col items-center gap-6">
              <Image
                src={Atendente}
                alt="Cha Roxo"
                width={175}
                height={175}
                quality={100}
                className="object-contain h-[175px] flex-shrink-0"
              />

              <div>
                <h3 className="text-xl font-black text-center text-white">
                  Mentoria e Suporte
                </h3>

                <p className="text-center text-gray-400 text-medium mx-auto mt-2">
                  Não está sozinho! Receba orientação personalizada de nossos
                  especialistas para esclarecer dúvidas e manter-se no caminho
                  certo.
                </p>
              </div>
            </div>
            <div className="p-6 bg-[#2e2a41] h-[400px] rounded-lg shadow-lg flex flex-col items-center gap-6">
              <Image
                src={Treinar}
                alt="Treinar"
                width={175}
                height={175}
                quality={100}
                className="object-contain h-[175px] flex-shrink-0 object-[20px]"
              />

              <div>
                <h3 className="text-xl font-black text-center text-white">
                  Movimente-se e Celebre
                </h3>

                <p className="text-center text-gray-400 text-medium mx-auto mt-2">
                  Descubra rotinas de exercícios que você pode amar, com vídeos
                  motivacionais para todos os níveis, projetados para queimar
                  calorias e fortalecer o corpo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="px-7 py-3 rounded-full bg-purple-600 text-[#1b1929] shadow-lg shadow-violet-800/50 font-bold text-2xl mt-4 uppercase transition-all duration-200 hover:bg-purple-700">
          QUERO TER RESULTADOS DE VERDADE
        </button>
      </section>

      <section className="w-full px-4 md:px-0 py-20 flex flex-col items-center gap-12 relative bg-white">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-8">
              <h3 className="text-2xl md:text-[39px] font-black text-black">
                Pra quem é a comunidade do <br />
                <span className="text-[40px] md:text-6xl text-purple-600">
                  DESAFIO 16 DIAS?
                </span>
              </h3>

              <ul className="flex flex-col gap-3">
                <li className="text-purple-950 font-bold flex items-center gap-2 text-lg">
                  <SealCheck weight="fill" size={24} /> Mulheres que querem
                  emagrecer de forma saudável e definitiva.
                </li>
                <li className="text-purple-950 font-bold flex items-center gap-2 text-lg">
                  <SealCheck weight="fill" size={24} /> Não quer passar fome
                  para emagrecer.
                </li>
                <li className="text-purple-950 font-bold flex items-center gap-2 text-lg">
                  <SealCheck weight="fill" size={24} /> Não quer passar horas na
                  academia.
                </li>
                <li className="text-purple-950 font-bold flex items-center gap-2 text-lg">
                  <SealCheck weight="fill" size={24} /> Não quer gastar dinheiro
                  com remédios.
                </li>
                <li className="text-purple-950 font-bold flex items-center gap-2 text-lg">
                  <SealCheck weight="fill" size={24} /> Está com vergonha de
                  olhar no espelho.
                </li>
                <li className="text-purple-950 font-bold flex items-center gap-2 text-lg">
                  <SealCheck weight="fill" size={24} /> Quer ficar bem usando
                  roupas mais justas.
                </li>
                <li className="text-purple-950 font-bold flex items-center gap-2 text-lg">
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
              src={MulherEmagrecendo}
              alt="16 Dias para Mudar"
              width={500}
              height={500}
              quality={100}
              className="rounded-xl transform absolute bottom-0 right-52 object-contain z-10 hidden md:block"
            />

            <div
              style={{ filter: 'blur(80px)' }}
              className="absolute w-32 h-32 bg-purple-500 right-56 rounded-full top-[20%] hidden md:block"
            />
            <div
              style={{ filter: 'blur(80px)' }}
              className="absolute w-32 h-32 bg-indigo-400 right-96 rounded-full bottom-0 hidden md:block"
            />
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-0 py-24 flex flex-col items-center gap-12 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto">
          <div className="mb-20">
            <h3 className="text-3xl md:text-5xl font-black text-white text-center md:leading-[60px]">
              Preparamos uma{' '}
              <span className="underline text-purple-600">
                oferta exclusiva para você
              </span>
              , que quer{' '}
              <span className="text-purple-600 underline">
                emagrecer de verdade
              </span>{' '}
              e ter uma vida mais saudável
            </h3>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-20">
            <Image
              alt=""
              src={ProdutoMockup}
              width={525}
              height={525}
              quality={100}
              className="flex-shrink-0 product-flutter"
            />

            <div className="flex flex-col gap-4 items-center">
              <h3 className="font-bold font-nunito text-3xl text-center">
                Por apenas:
              </h3>
              <div className="flex flex-col items-center gap-2">
                <h2 className="text-5xl font-nunito font-black">
                  8x de <span className="text-purple-600">R$3,48</span>
                </h2>
                <h3 className="font-medium font-nunito text-xl">
                  Ou R$27,90 à vista
                </h3>
              </div>

              <div className="w-full flex items-center flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <button className="w-full px-8 py-4 rounded-lg bg-purple-500 shadow-lg shadow-violet-800/50 font-bold text-xl mt-4 uppercase transition-all duration-200 hover:bg-purple-600">
                    QUERO ADQUIRIR AGORA
                  </button>
                  <p className="text-sm font-nunito text-purple-300">
                    Aviso: Está é uma Oferta Especial por tempo limitado{' '}
                  </p>
                </div>

                <Image
                  src={Safety}
                  alt="Segurança"
                  width={350}
                  height={350}
                  quality={100}
                  className="object-contain text-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-0 py-20 flex flex-col items-center gap-12 relative bg-[#1b1929]">
        <div className="w-full max-w-7xl mx-auto">
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-20">
            <div className="flex flex-col">
              <h3 className="text-2xl md:text-5xl font-black text-white text-left leading-10">
                RESULTADOS GARANTIDOS OU SEU{' '}
                <span className="text-purple-600 underline">
                  DINHEIRO DE VOLTA!
                </span>
              </h3>

              <p
                style={{ lineHeight: '30px' }}
                className="text-gray-400 text-left text-lg mt-4"
              >
                Se você seguir o nosso método e não tiver resultados, nós
                devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.{' '}
                <span className="text-purple-400 underline">
                  Você tem 7 dias de garantia incondicional
                </span>
                <br />
                <br />
                Você terá 7 dias para acessar e aplicar nosso guia e, não vendo
                a gordurinha derreter e ir embora durante esse período,
                devolvemos seu dinheiro.
              </p>
            </div>

            <Image
              src={Garantia}
              alt="Garantia"
              width={425}
              height={425}
              quality={100}
              className="flex-shrink-0 product-flutter"
            />
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-0 py-20 flex flex-col items-center gap-12 relative">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="w-full md:w-1/2 flex flex-col gap-8">
              <h3
                style={{ lineHeight: '60px' }}
                className="text-5xl font-black text-white text-center uppercase"
              >
                Dúvidas{' '}
                <span className="text-purple-600 underline">Frequentes</span>
              </h3>

              <div className="flex flex-col gap-4">
                <FaqComponent
                  title="Quais os benefícios do desafio 16 dias?"
                  faq="O desafio proporciona perda de peso eficaz, melhora na saúde digestiva e aumento da energia."
                />

                <FaqComponent
                  title="Quem pode fazer o desafio 16 dias?"
                  faq="O desafio é adequado para mulheres em busca de uma abordagem simples para emagrecimento."
                />

                <FaqComponent
                  title="O desafio 16 dias é seguro?"
                  faq="Sim, o desafio é projetado com foco na segurança, com orientações nutricionais equilibradas."
                />

                <FaqComponent
                  title="Como funciona o desafio 16 dias?"
                  faq="O desafio inclui um plano alimentar balanceado e exercícios, promovendo uma transformação saudável em 16 dias."
                />

                <FaqComponent
                  title="Quais são as etapas ou atividades envolvidas no desafio 16 dias?"
                  faq="Inclui dieta personalizada, rotina de exercícios adaptada e suporte online para maximizar os resultados."
                />

                <FaqComponent
                  title="Existem recomendações específicas para maximizar os resultados durante o desafio 16 dias?"
                  faq="Seguir as orientações alimentares rigorosamente, manter a consistência nos exercícios e buscar suporte da comunidade online são chaves para o sucesso."
                />
              </div>
            </div>

            <Image
              src={Duvidas}
              alt="Duvidas"
              width={400}
              height={400}
              quality={100}
              className="flex-shrink-0 object-contain rounded-xl absolute right-60 bottom-0 hidden md:block"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

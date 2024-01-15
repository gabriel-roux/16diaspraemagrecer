import Image, { StaticImageData } from 'next/image'
import Like from '../../../../public/like.webp'
import { useEffect, useState } from 'react'
import Like2 from '../../../../public/like2.png'
import { CaretDown, CaretRight } from '@phosphor-icons/react'

interface CommentProps {
  src: StaticImageData | string
  title: string
  desc: string
  time: string
  ammount: number
  hasRespostas?: boolean
  respostas?: {
    src: StaticImageData | string
    name: string
    desc: string
    time: string
    ammount: number
  }[]
}

export default function CommentStruture({
  title,
  src,
  desc,
  time,
  ammount,
  hasRespostas,
  respostas,
}: CommentProps) {
  const [likes, setLikes] = useState(0)

  useEffect(() => {
    setLikes(ammount)
  }, [ammount])

  const [alreadyLiked, setAlreadyLiked] = useState(false)

  const handleLike = () => {
    setLikes(alreadyLiked ? likes - 1 : likes + 1)

    setAlreadyLiked(!alreadyLiked)
  }

  const [openDesc, setOpenDesc] = useState(false)

  const handleOpenDesc = () => setOpenDesc(!openDesc)

  return (
    <div>
      <div
        style={{
          margin: '1rem 0',
        }}
      >
        <div className="w-full flex justify-start items-start text-start gap-4 text-white">
          <div className="flex flex-col items-center gap-2">
            <Image
              src={src}
              alt="ProfilePicture"
              quality={100}
              width={60}
              height={60}
              className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full flex-shrink-0"
            />
            <button
              onClick={handleLike}
              style={{
                color: alreadyLiked ? '#fff' : '#000',
                background: alreadyLiked
                  ? 'linear-gradient(90deg, #a855f7, #c084fc)'
                  : '#f0f2f5',
              }}
              className="flex items-center justify-center gap-2 px-3 py-1 text-sm md:text-base md:px-4 md:py-2 rounded-md font-bold hover:scale-[1.05] transition-all duration-200"
            >
              Curtir
            </button>
          </div>

          <div className="w-full md:min-w-[22rem] g-auto min-h-24 p-5 rounded-xl bg-[#2e2a41] shadow-xl">
            <div className="flex justify-between mb-2">
              <h4 className="font-bold">{title}</h4>
              <p className="text-gray-300">{time}</p>
            </div>
            <p className="text-gray-400 text-sm md:text-base">{desc}</p>
            <div className="flex items-center gap-1 px-2 py-1 rounded-3xl r-0 absolute bg-[#f8fafc] shadow-md transition-all duration-200 hover:scale-[1.05]">
              <Image
                src={Like}
                alt="Like"
                quality={100}
                className="w-5 h-5 flex-shrink-0 rounded-full"
              />
              <Image
                src={Like2}
                alt="Love"
                quality={100}
                className="w-5 h-5 flex-shrink-0 rounded-full"
              />
              <span className="text-black text-sm">{likes}</span>
            </div>
          </div>
        </div>
        {hasRespostas && (
          <div className="mt-4 mb-2">
            <button
              className="bg-transparent gap-1 items-center flex"
              onClick={handleOpenDesc}
            >
              {openDesc ? <p>Esconder respostas</p> : <p>Mostrar respostas</p>}
              {openDesc ? <CaretDown size={15} /> : <CaretRight size={15} />}
            </button>
          </div>
        )}
      </div>
      {openDesc &&
        respostas &&
        respostas.map((item2) => (
          <div className="mt-6 pl-8" key={item2.desc}>
            <CommentStruture
              src={item2.src}
              title={item2.name}
              desc={item2.desc}
              time={item2.time}
              ammount={item2.ammount}
            />
          </div>
        ))}
    </div>
  )
}

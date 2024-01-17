'use client'

import {
  ArrowCircleDown,
  ArrowCircleUp,
  CaretDown,
  Trash,
} from '@phosphor-icons/react'
import CommentStruture from './ComentarioStruture'
import Avatar from '../../../public/avatar.webp'
import { useState, Fragment } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { comentarios } from './array'
import { ptBR } from 'date-fns/locale'

interface TesteProps {
  comment: string
  date: Date
}

export function Comentarios() {
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState<TesteProps[]>([])
  const [expandirHeight, setExpandirHeight] = useState(false)
  const [toShow, setToShow] = useState(1)

  const MostrarMais = () => {
    setExpandirHeight(!expandirHeight)

    if (expandirHeight) {
      setToShow(3)
    } else {
      setToShow(comentarios().length)
    }
  }

  const removeFeedback = (comment: string) => {
    const newArrayComments = comments.filter(
      (commentToRemove) => commentToRemove.comment !== comment,
    )
    setComments(newArrayComments)
  }

  const handleAddNewFeedback = () => {
    setComments([
      ...comments,
      {
        comment,
        date: new Date(),
      },
    ])
    setComment('')
  }

  return (
    <div
      className="w-full flex items-center justify-center mt-10"
      id="chatSection"
    >
      <div className="w-full md:w-[50rem] h-auto bg-[#1b1929] py-8 rounded-lg shadow-lg flex flex-col">
        <div className="flex items-center gap-2 px-6">
          <h1 className="text-white font-lg">
            <u>Mais Recentes</u>
          </h1>
          <CaretDown size={20} className="text-white" weight="bold" />{' '}
        </div>

        <div className="flex flex-col p-6">
          {comments.map((comment) => {
            return (
              <div className="flex items-center gap-4" key={comment.comment}>
                <CommentStruture
                  src={Avatar}
                  title={'User Anônimo'}
                  desc={comment.comment}
                  time={formatDistanceToNow(comment.date, {
                    locale: ptBR,
                  })}
                  ammount={0}
                />

                <button onClick={() => removeFeedback(comment.comment)}>
                  <Trash className="text-red-500" size={24} />
                </button>
              </div>
            )
          })}

          {comentarios()
            .filter((item, index) => index < toShow)
            .map((item) => (
              <Fragment key={item.name}>
                <CommentStruture
                  src={item.src}
                  title={item.name}
                  desc={item.desc}
                  time={item.time}
                  ammount={item.ammount}
                  hasRespostas={item.hasRespostas}
                  respostas={item.respostas}
                />
              </Fragment>
            ))}
        </div>
        <div className="flex justify-end px-6">
          <button
            className="flex gap-1 p-2 rounded-xl items-center font-bold bg-gradient-to-r from-purple-400 to-purple-500"
            onClick={MostrarMais}
          >
            {expandirHeight ? 'Mostrar Menos' : 'Mostrar Mais'}
            {expandirHeight ? (
              <ArrowCircleUp size={17} weight="bold" />
            ) : (
              <ArrowCircleDown size={17} weight="bold" />
            )}
          </button>
        </div>

        <div className="w-full px-6 flex flex-col justify-start gap-4">
          <h1 className="text-lg">Escreva um comentário</h1>
          <textarea
            className="border-0 rounded-lg bg-[#2e2a41] resize-none outline-none focus:outline-purple-500 p-4"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="Deixe seu comentario..."
          />
          <button
            className="flex items-center justify-center cursor-pointer gap-1 p-2 py-3 rounded-xl font-bold bg-gradient-to-r opacity-85 hover:opacity-100 transition-all duration-150 from-purple-400 to-purple-500"
            disabled={!comment}
            onClick={handleAddNewFeedback}
          >
            Publicar
          </button>
        </div>
      </div>
    </div>
  )
}

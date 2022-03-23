import './style.css'
import Icone from './../Icone'

import { useState } from 'react'

export default function Flashcard({ frente, verso, indice }) {

    function montarConteudoEtapa() {

        if (etapa === 1) {
            return (
                <div className="painel fechado" onClick={() => setEtapa(2)} >
                    <p>Flashcard {indice}</p>
                    <Icone icone='play' />
                </div>
            )
        }

        if (etapa === 2) {
            return (<h2 onClick={() => setEtapa(3)}>{frente}</h2>)
        }

        if (etapa === 3) {
            return (<h1 onClick={() => setEtapa(4)}>{verso}</h1>)
        }

        if (etapa === 4) {
            return (<h1>fim</h1>)
        }
    }

    const [etapa, setEtapa] = useState(1)

    const conteudo = montarConteudoEtapa()
    return <div className="Flashcard">{conteudo}</div>
}
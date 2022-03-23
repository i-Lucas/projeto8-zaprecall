import data from './../../Data/index'
import logoPequeno from '../../assets/img/logo-pequeno.png'
import './style.css'

import { useState } from 'react'
import Flashcard from '../Flashcard'

export default function Deck() {

    function montarFlashcards() {

        if (questoes.length === 0) {

            // sorteando o array data aleatoriamente
            data.sort((a, b) => Math.random() - 0.5)
            // preenchendo o array de questões com as questões do data
            setQuestoes([...data])
            return <></>

        } else {

            return questoes.map(({ frente, verso }, index) => {

                return <Flashcard
                    frente={frente}
                    verso={verso}
                    indice={index + 1}
                    key={index} />
            })
        }
    }

    const [questoes, setQuestoes] = useState([])

    return (
        <div className="Deck">
            <header>
                <img src={logoPequeno} alt="ZapRecall" />
                <h1>ZapRecall</h1>
            </header>
            <main>
                {montarFlashcards()}
            </main>
            <footer>
                0/4 Concluídos
            </footer>
        </div>
    )
}
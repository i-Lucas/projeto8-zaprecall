import data from './../../Data/index'
import logoPequeno from '../../assets/img/logo-pequeno.png'
import './style.css'

import { useState } from 'react'

export default function Deck() {

    function montarFlashcards() {

        if (questoes.length === 0) {

            data.sort((a, b) => Math.random() - 0.5)
            setQuestoes([...data])
            return <></>
        } else {

            return questoes.map((questao, index) => {
                return <p>{questao.frente}</p>
            })
        }
    }

    const [questoes, setQuestoes] = useState([])
    const flashcards = montarFlashcards();

    return (
        <div className="Deck">
            <header>
                <img src={logoPequeno} alt="ZapRecall" />
                <h1>ZapRecall</h1>
            </header>
            <main>
                {flashcards}
            </main>
            <footer>
                0/4 Concluídos
            </footer>
        </div>
    )
}
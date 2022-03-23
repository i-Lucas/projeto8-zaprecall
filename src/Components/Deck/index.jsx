import data from './../../Data/index'
import logoPequeno from '../../assets/img/logo-pequeno.png'
import './style.css'

import { useState } from 'react'
import Flashcard from '../Flashcard'
import Icone from '../Icone'

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
                    key={index}
                    aoFinalizar={resposta => setRespostas([...respostas, resposta])}
                />
            })
        }
    }

    const [questoes, setQuestoes] = useState([])
    const [respostas, setRespostas] = useState([])

    const footer = montarFooter()

    function montarFooter() {

        let resultado = <></>;

        if (respostas.length === questoes.length && questoes.length > 0) {
            if (!respostas.includes("erro")) {
                resultado = (
                    <div className="resultado">
                        <span><Icone icone="festinha" /> Parabéns!</span>
                        <p>Você não esqueceu de nenhum flashcard!</p>
                    </div>
                )
            } else {
                resultado = (
                    <div className="resultado">
                        <span><Icone icone="triste" /> Putz!</span>
                        <p>Ainda faltam alguns...Mas não desanime!</p>
                    </div>
                )
            }
        }
        return (
            <>
                {resultado}
                <p>{respostas.length}/{questoes.length} concluídos</p>
                {respostas.map((resposta, index) => <Icone icone={resposta} key={index} />)}
            </>
        )
    }

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
                {footer}
            </footer>
        </div>
    )
}
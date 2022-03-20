import { useState } from 'react'
import icon from './setinha.png'
import './card.css'

export default function Card({ id, question, answer }) {

    const [cardstate, setCardState] = useState('flashcard')

    const showQuestion = () => setCardState('question')
    const showAnswer = () => setCardState('answer')
    const cardInfo = (info) =>  setCardState(info)

    return (
        cardstate === 'flashcard' ?
            <RenderFlashCard id={id} showQuestion={showQuestion} />

            : cardstate === 'question' ?
                <RenderQuestion question={question} showAnswer={showAnswer} />

                : cardstate === 'answer' ?
                    <RenderAnswer answer={answer} cardInfo={cardInfo} /> :
                    <RenderCardStatus id={id} status={cardstate} />
    )
}


function RenderFlashCard({ id, showQuestion }) {
    return (
        <div className="card">
            <div className="card-number">
                <h1>Pergunta {id}</h1>
            </div>
            <div className="card-icon" onClick={() => showQuestion()}>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        </div>
    )
}

function RenderQuestion({ question, showAnswer }) {
    return (
        <div className="question">
            <div className="question-text">
                <h1>{question}</h1>
            </div>
            <div className="question-icon" onClick={() => showAnswer()}>
                <img src={icon} alt="" />
            </div>
        </div>
    )
}

function RenderAnswer({ answer, cardInfo }) {
    return (
        <div className="answer">
            <div className="answer-text">
                <h1>{answer}</h1>
            </div>
            <div className="answer-options">
                <div className="option-1" onClick={() => cardInfo(1)}>Não lembrei</div>
                <div className="option-2" onClick={() => cardInfo(2)}>Quase não lembrei</div>
                <div className="option-3" onClick={() => cardInfo(3)}>Zap!</div>
            </div>
        </div>
    )
}

function RenderCardStatus({ id, status }) {

    let cardinfo = {}
    if (status === 1) { cardinfo = { color: 'opc1', icon: <div className="opc1"><ion-icon name="close-circle"></ion-icon></div> } }
    if (status === 2) { cardinfo = { color: 'opc2', icon: <div className="opc2"><ion-icon name="help-circle"></ion-icon></div> } }
    if (status === 3) { cardinfo = { color: 'opc3', icon: <div className="opc3"><ion-icon name="checkmark-circle"></ion-icon></div> } }

    return (
        <div className="card">
            <div className="card-number">
                <h1 className={cardinfo.color}>Pergunta {id}</h1>
            </div>
            <div className="card-icon">
                {cardinfo.icon}
            </div>
        </div>
    )
}
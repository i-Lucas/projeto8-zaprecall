import logo from './logo-small.png'
import './deck.css'

import Card from '../Cards/Card'

export default function ShowDeck() {

    const cards_jsx = [

        { id: 1, question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript' },
        { id: 2, question: 'O React é __ ', answer: 'Uma biblioteca JavaScript para construção de interfaces' },
        { id: 3, question: 'Componentes devem iniciar com __ ', answer: 'letra maiúscula' },
        { id: 4, question: 'Podemos colocar __ dentro do JSX', answer: 'expressões' },
        { id: 5, question: 'O ReactDOM nos ajuda __ ', answer: 'interagindo com a DOM para colocar componentes React na mesma' },
        { id: 6, question: 'Usamos o npm para __', answer: 'gerenciar os pacotes necessários e suas dependências' },
        { id: 7, question: 'Usamos props para __ ', answer: 'passar diferentes informações para componentes ' },
        { id: 8, question: 'Usamos estado (state) para __', answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' }
    ]

    return (
        <section className="deck">
            <header>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </header>
            <main>
                <RenderCards cards = {cards_jsx}/>
            </main>
            <footer>
                <h1>0/4 CONCLUÍDOS</h1>
            </footer>
        </section>
    )
}


function RenderCards({cards}) {

    return cards.map(({ id, question, answer }) =>
        <Card key={id} id={id} question={question} answer ={answer} />)
}
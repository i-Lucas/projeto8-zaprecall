import reactDom from "react-dom";
import { useState } from 'react'

import Home from './Home/Home'
import ShowDeck from './Deck/Deck'

function App() {

    const [start, setStart] = useState(true)
    const startApp = () => setStart(!start)
    const CheckStart = () => start === false ? <Home func={startApp} /> : <ShowDeck />
    return  <CheckStart />
}

reactDom.render(<App />, document.querySelector('.root'))
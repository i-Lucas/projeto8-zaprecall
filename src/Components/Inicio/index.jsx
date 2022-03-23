import { useState } from 'react'

import logo from '../../assets/img/logo.png'
import './style.css'

export default function Inicio() {

    const [visible, setVisible] = useState(false)

    if (visible) {
        return (
            <div className="Inicio">
                <img src={logo} alt="ZapRecall" />
                <h1>ZapRecall</h1>
                <button onClick={() => setVisible(false)}>Iniciar Recall !</button>
            </div>
        )
    }

    else return <></>
}
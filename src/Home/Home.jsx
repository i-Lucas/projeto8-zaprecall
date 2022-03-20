import logo from './logo.png'
import './home.css'

export default function Home({func}) {

    return (
        <section className="home">
            <div className="img">
                <img src={logo} alt="logo" />
            </div>
            <div className="appname">
                <h1>ZapRecall</h1>
            </div>
            <div className="btn">
                <button onClick={func}>Iniciar Recall !</button>
            </div>
        </section>
    )
}
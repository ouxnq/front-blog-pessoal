import './Home.css'
import homeImage from './Home.jpg'

function Home() {
    return (
        <>
            <div className='container-imagem'>
                <div className='container-titulo'>
                    <h1 className='titulo'>Eu sou a Página Home</h1>
                    <h2 className='subtitulo'>Página principal do Blog Pessoal</h2>
                </div>
                <img src={homeImage} className='img'></img>
            </div>
        </>
    )
}

export default Home

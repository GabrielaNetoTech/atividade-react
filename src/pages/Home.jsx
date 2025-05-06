import logo from '../assets/react.svg'

const Home = () => {
    return (
        <>
            <main>
                <div>
                    <h1>Gabriela Neto</h1>
                    <h2>Estudando React</h2>
                </div>

                <div>
                    <h3>Esso é o símbolo do react:</h3>
                    <img src={logo} />
                </div>
                <div>
                    <h3>Coisas que gostei no React</h3>
                    <ul>
                        <li>A organização</li>
                        <li>A forma de chamar o servidor</li>
                        <li>Ser aclopado com o HTML</li>
                    </ul>
                </div>
            </main>
        </>
    );
}

export default Home;
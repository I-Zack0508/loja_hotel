import estilos from './Topo.module.css'
export default function Topo() {
    return (
        <header>
            <div className={estilos.topo}>
                <picture>
                    <img src='./logo.jpg'/>
                </picture>

                <nav>
                    <a href="#">Produtos</a>
                    <a href="#">Sobre</a>
                    <a href="#">Contato</a>
                </nav>
            </div>
        </header>
    )
}
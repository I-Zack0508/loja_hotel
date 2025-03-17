import estilos from './Produtos.module.css';

export default function Produtos() {
    return (
        <section className={estilos.produtos}>
            <div className={estilos.secao_produto}>
                <h2 className={estilos.titulos}>Nosso Qaurtos</h2>
                <p>
                    Quartos de alta qualidade, sofisticação e modernidade, os quartos são equipados com a mais recente tendência de roupas de cama.
                </p>

                <p>
                    Experiência mais autêntica | A melhor hospedagem do mundo |
                    Reserve já!
                </p>

                <div className={estilos.card_quarto_imgs}>
                    <div className={estilos.card_quarto}>
                        <h3>Suíte de luxo</h3>
                        <picture>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgMAxIlgnhvJFucssqlWKZYgh4OUpXrFLX7g&s' alt="Suíte de luxo"/>
                        </picture>
                        <p>R$ 500,00</p>
                    </div>

                    <div className={estilos.card_quarto}>
                        <h3>Suíte Básica</h3>
                        <picture>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSozyW0k899nHZKlOTXpTAI6-hEgquPR2B4zQ&s' alt="Suíte Básica"/>
                        </picture>
                        <p>R$ 20,00</p>
                    </div>

                    <div className={estilos.card_quarto}>
                        <h3>Suíte Básica</h3>
                        <picture>
                            <img src='https://ideabrasil.com.br/wp-content/uploads/2022/07/Captura-de-tela-2022-07-25-091723.png' alt="Quarto monarquia"/>
                        </picture>
                        <p>R$ 749,99</p>
                    </div>


                    <div className={estilos.card_quarto}>
                        <h3>Suíte Básica</h3>
                        <picture>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXrn80yemr_hxZxPy_qxbgFlXnYLFYMsIXeg&s' alt="Quarto escritorio"/>
                        </picture>
                        <p>R$ 100,99</p>
                    </div>
                    

                </div>
            </div>
        </section>
    );
}

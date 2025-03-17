import estilos from './Sobre.module.css'

export default function Sobre() {
    return (
        <section>
            <div className={estilos.title_sobre}>
                <h2>Sobre</h2>
                <p>Lorem</p>
            </div>

            <div className={estilos.sobre_content}>

                <div className={estilos.sbr_col1}>
                    <picture className={estilos.img_sbr}>
                        <img src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/487545863.jpg?k=9655a95de0817c06d26a71b843ab3b587be679d714949284a75a5e6617216ed8&o=&hp=1' />
                    </picture>

                    <div className={estilos.text_sbr_content}>
                        <h3>Sobre</h3>
                        <p>Lorem Impsu Dolor</p>
                    </div>

                </div>

                <div className={estilos.sbr_col2}>
                    <picture className={estilos.img_sbr}>
                        <img src='https://img.freepik.com/fotos-gratis/piscina_74190-1977.jpg' />
                    </picture>

                    <div className={estilos.text_sbr_content}>
                        <h3>Sobre</h3>
                        <p>Lorem Impsu Dolor</p>
                    </div>

                </div>

            </div>

        </section>
    )
}
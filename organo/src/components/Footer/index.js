import './Footer.css'

function Footer(){
    return (
        <footer className="footer">
            <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/images/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/images/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/images/ig.png" alt="" />
                    </a>
                </li>
            </ul>
            </section>
            <section>
                <img src="/images/logo.png" alt="Organo" />
            </section>
            <section>
                Desenvolvido por Alura (implementado por @Khyquer)
            </section>
        </footer>
    )
}

export default Footer
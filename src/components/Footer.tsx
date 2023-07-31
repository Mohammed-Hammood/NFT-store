import "styles/footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__location">
                    <img src="./img/Footer_logo.svg" alt="Логотип" className="footer__logo" />
                    <ul className="adress">
                        <li className="footer__list">Россия, г. Москва, 119002</li>
                        <li className="footer__list">ул. Арбат 51/1/8А</li>
                        <li className="footer__list">e-mail: info@lionmax.ru</li>
                    </ul>
                    <div className="footer__social">
                        <img src="./img/Footer_ico_Twitter.svg" alt="Логотип twitter" />
                        <img src="./img/Footer_ico_VK.svg" alt="Логотип vk" />
                    </div>
                </div>
                <nav className="footer__info">
                    <div className="nft nft_pad">
                        <p className="footer__link footer__link_main">NFT</p>
                        <a href="#" className="footer__link">Что такое NFT</a>
                        <a href="#" className="footer__link">Создайте NFT с нами</a>
                    </div>
                    <div className="company">
                        <p className="footer__link footer__link_main">Компания</p>
                        <a href="#" className="footer__link">О нас</a>
                        <a href="#" className="footer__link">Отправить запрос</a>
                    </div>
                    <div className="another">
                        <p className="footer__link footer__link_main">Другое</p>
                        <a href="#" className="footer__link">Условия использования</a>
                        <a href="#" className="footer__link">Политика конфиденциальности</a>
                    </div>
                </nav>
            </div>
            <div className="footer__decorate">
                <img src="./img/Footer_ico_Star.svg" alt="Картинка звезды" className="footer__star" />
                <div className="copyright">&#64; tnft.ru Company, Inc</div>
            </div>
        </footer>
    )
}
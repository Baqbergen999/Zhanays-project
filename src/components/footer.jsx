"use client"

export function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: white;
          padding: 80px 48px 40px;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-logo {
          font-size: 32px;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-description {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
          max-width: 350px;
        }

        .footer-column h4 {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 24px;
          color: rgba(255, 255, 255, 0.8);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 15px;
          transition: all 0.3s;
        }

        .footer-links a:hover {
          color: white;
          padding-left: 8px;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-copyright {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
        }

        .footer-social {
          display: flex;
          gap: 24px;
        }

        .footer-social a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s;
        }

        .footer-social a:hover {
          color: #667eea;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 60px 24px 32px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 24px;
            text-align: center;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">ESSE.KZ Premium</div>
              <p className="footer-description">
                Премиальные технологические решения для современных кафе и ресторанов. Инновации, качество и поддержка
                на высшем уровне.
              </p>
            </div>

            <div className="footer-column">
              <h4>Продукты</h4>
              <ul className="footer-links">
                <li>
                  <a href="#shop">Оборудование</a>
                </li>
                <li>
                  <a href="#shop">Холодильники</a>
                </li>
                <li>
                  <a href="#shop">Витрины</a>
                </li>
                <li>
                  <a href="#shop">Кофемашины</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Компания</h4>
              <ul className="footer-links">
                <li>
                  <a href="#about">О нас</a>
                </li>
                <li>
                  <a href="#about">Наша миссия</a>
                </li>
                <li>
                  <a href="#about">Партнёры</a>
                </li>
                <li>
                  <a href="#about">Контакты</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Поддержка</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Документация</a>
                </li>
                <li>
                  <a href="#">Центр помощи</a>
                </li>
                <li>
                  <a href="#">Политика конфиденциальности</a>
                </li>
                <li>
                  <a href="#">Условия использования</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">© 2025 ESSE.KZ Premium. Все права защищены.</p>
            <div className="footer-social">
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
              <a href="#">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

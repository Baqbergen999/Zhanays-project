"use client"

export function About() {
  return (
    <>
      <style>{`
        .about-section {
          padding: 120px 48px;
          background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
        }

        .about-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .about-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .about-subtitle {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          color: #6366f1;
          letter-spacing: 2px;
        }

        .about-title {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a2e;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .about-description {
          font-size: 18px;
          color: #4b5563;
          line-height: 1.8;
          margin-bottom: 24px;
        }

        .about-features {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          flex-shrink: 0;
        }

        .feature-text {
          flex: 1;
        }

        .feature-title {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 8px;
        }

        .feature-description {
          font-size: 15px;
          color: #6b7280;
          line-height: 1.6;
        }

        .about-image-container {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .about-image {
          width: 100%;
          height: 600px;
          object-fit: cover;
        }

        .stats-overlay {
          position: absolute;
          bottom: 40px;
          left: 40px;
          right: 40px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 32px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 36px;
          font-weight: 700;
          color: #6366f1;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 14px;
          color: #6b7280;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .stats-overlay {
            grid-template-columns: repeat(3, 1fr);
            padding: 24px;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 80px 24px;
          }
          .about-title {
            font-size: 36px;
          }
          .stats-overlay {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>

      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-grid">
            <div className="about-content">
              <div className="about-subtitle">О Нас</div>
              <h2 className="about-title">Мы создаём будущее кафе-технологий</h2>
              <p className="about-description">
                С 2015 года мы помогаем владельцам кафе и ресторанов трансформировать их бизнес с помощью передовых
                технологий. Наша миссия — сделать профессиональное оборудование доступным и простым в использовании.
              </p>

              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon">🏆</div>
                  <div className="feature-text">
                    <div className="feature-title">Премиум качество</div>
                    <div className="feature-description">
                      Работаем только с проверенными производителями и предоставляем расширенную гарантию на всё
                      оборудование
                    </div>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🔧</div>
                  <div className="feature-text">
                    <div className="feature-title">Полная поддержка</div>
                    <div className="feature-description">
                      Бесплатная установка, обучение персонала и круглосуточная техническая поддержка для всех клиентов
                    </div>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">💡</div>
                  <div className="feature-text">
                    <div className="feature-title">Инновации</div>
                    <div className="feature-description">
                      Постоянно обновляем каталог новейшими технологиями и умными решениями для вашего бизнеса
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-image-container">
              <img
                src="https://www.indesignlive.sg/wp-content/uploads/2019/11/03_KaizenCoffeeCoSpacecraftccKetsireeWongwan_interior-768x1024.jpg"
                alt="Современное кафе с технологиями"
                className="about-image"
              />
              <div className="stats-overlay">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Довольных клиентов</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Рейтинг качества</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Поддержка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

"use client"

export function Testimonials() {
  return (
    <>
      <style>{`
        .testimonials-section {
          padding: 120px 48px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
        }

        .testimonials-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="1" fill="white" opacity="0.1"/></svg>');
          pointer-events: none;
        }

        .testimonials-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .testimonials-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .testimonials-subtitle {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .testimonials-title {
          font-size: 48px;
          font-weight: 700;
          color: white;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 32px;
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .testimonial-avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .testimonial-author-info {
          flex: 1;
        }

        .testimonial-author {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 4px;
        }

        .testimonial-role {
          font-size: 14px;
          color: #6b7280;
        }

        .testimonial-quote {
          font-size: 16px;
          color: #4b5563;
          line-height: 1.8;
          font-style: italic;
          position: relative;
          padding-left: 24px;
        }

        .testimonial-quote::before {
          content: """;
          position: absolute;
          left: 0;
          top: -8px;
          font-size: 48px;
          color: #6366f1;
          opacity: 0.3;
          font-family: Georgia, serif;
        }

        .testimonial-rating {
          display: flex;
          gap: 4px;
          margin-top: 20px;
        }

        .star {
          color: #fbbf24;
          font-size: 18px;
        }

        @media (max-width: 768px) {
          .testimonials-section {
            padding: 80px 24px;
          }
          .testimonials-title {
            font-size: 36px;
          }
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <div className="testimonials-subtitle">Отзывы клиентов</div>
            <h2 className="testimonials-title">Нам доверяют лучшие заведения</h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <img
                  src="/professional-woman-cafe-owner-portrait.jpg"
                  alt="Сара Митчелл"
                  className="testimonial-avatar"
                />
                <div className="testimonial-author-info">
                  <div className="testimonial-author">Сара Митчелл</div>
                  <div className="testimonial-role">Владелец, Artisan Coffee House</div>
                </div>
              </div>
              <p className="testimonial-quote">
                ESSE.KZ полностью трансформировал наши операции. Прирост эффективности просто поразительный. Мы
                увеличили оборот на 40% за первые три месяца.
              </p>
              <div className="testimonial-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <img
                  src="/professional-man-restaurant-manager-portrait.jpg"
                  alt="Джеймс Чен"
                  className="testimonial-avatar"
                />
                <div className="testimonial-author-info">
                  <div className="testimonial-author">Джеймс Чен</div>
                  <div className="testimonial-role">Менеджер, Urban Brew</div>
                </div>
              </div>
              <p className="testimonial-quote">
                Технология интуитивно понятна, и наш персонал адаптировался мгновенно. Удовлетворённость клиентов
                взлетела до небес. Лучшее решение для нашего бизнеса.
              </p>
              <div className="testimonial-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <img
                  src="/professional-woman-business-director-portrait.jpg"
                  alt="Мария Родригес"
                  className="testimonial-avatar"
                />
                <div className="testimonial-author-info">
                  <div className="testimonial-author">Мария Родригес</div>
                  <div className="testimonial-role">Директор, Cafe Collective</div>
                </div>
              </div>
              <p className="testimonial-quote">
                Инвестиция, которая окупилась за несколько месяцев. Одна только аналитика стоит своих денег. Теперь мы
                принимаем решения на основе данных.
              </p>
              <div className="testimonial-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

"use client"

export function Features() {
  return (
    <>
      <style>{`
        .features-section {
          padding: 120px 48px;
          background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
        }

        .features-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .features-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .features-subtitle {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          color: #6366f1;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .features-title {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .features-description {
          font-size: 18px;
          color: #6b7280;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }

        .feature-card {
          background: white;
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          transform: scaleX(0);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(99, 102, 241, 0.2);
        }

        .feature-card:hover::before {
          transform: scaleX(1);
        }

        .feature-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          margin-bottom: 24px;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .feature-title {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 16px;
        }

        .feature-description {
          font-size: 16px;
          color: #6b7280;
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .features-section {
            padding: 80px 24px;
          }
          .features-title {
            font-size: 36px;
          }
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="features-section">
        <div className="features-container">
          <div className="features-header">
            <div className="features-subtitle">Наши Решения</div>
            <h2 className="features-title">Технологии для вашего успеха</h2>
            <p className="features-description">
              Комплексные решения для автоматизации и оптимизации работы вашего кафе с использованием передовых
              технологий
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Умные POS-системы</h3>
              <p className="feature-description">
                Оптимизируйте операции с интеллектуальными кассовыми системами, разработанными для кафе с высокой
                проходимостью
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3 className="feature-title">Цифровые меню</h3>
              <p className="feature-description">
                Привлекайте клиентов динамическими дисплеями высокого разрешения, демонстрирующими ваши предложения
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3 className="feature-title">Автоматизация кухни</h3>
              <p className="feature-description">
                Оптимизируйте рабочий процесс с автоматизированным управлением заказами и системами отслеживания
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Аналитика клиентов</h3>
              <p className="feature-description">
                Лучше понимайте своих клиентов с помощью расширенной аналитики данных и инсайтов
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">☁️</div>
              <h3 className="feature-title">Облачное управление</h3>
              <p className="feature-description">
                Управляйте всеми точками из одного места с облачной системой управления и мониторинга
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Безопасность данных</h3>
              <p className="feature-description">
                Защитите данные клиентов и бизнеса с помощью современных систем шифрования и резервного копирования
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

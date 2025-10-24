"use client"

export function Location() {
  return (
    <>
      <style>{`
        .location-section {
          padding: 120px 48px;
          background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
        }

        .location-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .location-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .location-subtitle {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          color: #6366f1;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .location-title {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 24px;
        }

        .location-description {
          font-size: 18px;
          color: #6b7280;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .location-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .location-info {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .info-card {
          background: white;
          padding: 32px;
          border-radius: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s;
        }

        .info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(99, 102, 241, 0.15);
        }

        .info-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin-bottom: 20px;
        }

        .info-title {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 12px;
        }

        .info-text {
          font-size: 16px;
          color: #6b7280;
          line-height: 1.6;
        }

        .map-container {
          position: relative;
          width: 100%;
          height: 600px;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .map-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          color: white;
          font-size: 24px;
          font-weight: 600;
        }

        .map-icon {
          font-size: 80px;
          margin-bottom: 20px;
        }

        @media (max-width: 1024px) {
          .location-content {
            grid-template-columns: 1fr;
          }
          
          .map-container {
            height: 400px;
          }
        }

        @media (max-width: 768px) {
          .location-section {
            padding: 80px 24px;
          }
          
          .location-title {
            font-size: 36px;
          }
          
          .map-container {
            height: 300px;
          }
        }
      `}</style>

      <section id="location" className="location-section">
        <div className="location-container">
          <div className="location-header">
            <div className="location-subtitle">Наше Местоположение</div>
            <h2 className="location-title">Посетите наш шоурум</h2>
            <p className="location-description">
              Приглашаем вас посетить наш выставочный зал, где вы сможете увидеть всё оборудование в действии и получить
              профессиональную консультацию.
            </p>
          </div>

          <div className="location-content">
            <div className="location-info">
              <div className="info-card">
                <div className="info-icon">📍</div>
                <h3 className="info-title">Адрес</h3>
                <p className="info-text">
                  г. Москва, ул. Тверская, д. 15, стр. 1<br />
                  БЦ "Технопарк", 3 этаж
                </p>
              </div>

              <div className="info-card">
                <div className="info-icon">🕐</div>
                <h3 className="info-title">Часы работы</h3>
                <p className="info-text">
                  Понедельник - Пятница: 9:00 - 20:00
                  <br />
                  Суббота: 10:00 - 18:00
                  <br />
                  Воскресенье: Выходной
                </p>
              </div>

              <div className="info-card">
                <div className="info-icon">📞</div>
                <h3 className="info-title">Контакты</h3>
                <p className="info-text">
                  Телефон: +7 (495) 123-45-67
                  <br />
                  Email: info@essekz.ru
                  <br />
                  WhatsApp: +7 (999) 888-77-66
                </p>
              </div>
            </div>

            <div className="map-container">
              <div className="map-placeholder">
                <div className="map-icon">🗺️</div>
                <div>Интерактивная карта</div>
                <div style={{ fontSize: "16px", marginTop: "12px", opacity: 0.9 }}>г. Москва, ул. Тверская, д. 15</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

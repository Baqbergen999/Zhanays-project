"use client"

export function Process() {
  const steps = [
    {
      number: "01",
      title: "Консультация",
      description: "Обсуждаем ваши потребности и подбираем оптимальное оборудование для вашего кафе",
      icon: "💬",
    },
    {
      number: "02",
      title: "Подбор решения",
      description: "Составляем индивидуальное коммерческое предложение с учётом вашего бюджета",
      icon: "📋",
    },
    {
      number: "03",
      title: "Оформление заказа",
      description: "Заключаем договор и согласовываем сроки поставки и установки",
      icon: "✍️",
    },
    {
      number: "04",
      title: "Доставка и установка",
      description: "Доставляем оборудование и выполняем профессиональный монтаж",
      icon: "🚚",
    },
    {
      number: "05",
      title: "Обучение персонала",
      description: "Проводим обучение вашего персонала работе с оборудованием",
      icon: "👨‍🏫",
    },
    {
      number: "06",
      title: "Поддержка",
      description: "Обеспечиваем техническую поддержку и сервисное обслуживание",
      icon: "🛠️",
    },
  ]

  return (
    <>
      <style>{`
        .process-section {
          padding: 120px 48px;
          background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
          position: relative;
          overflow: hidden;
        }

        .process-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .process-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .process-subtitle {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          color: #6366f1;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .process-title {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 24px;
        }

        .process-description {
          font-size: 18px;
          color: #6b7280;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .process-card {
          background: white;
          padding: 40px;
          border-radius: 32px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s;
          position: relative;
        }

        .process-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(99, 102, 241, 0.2);
        }

        .process-number {
          position: absolute;
          top: -20px;
          right: 30px;
          font-size: 72px;
          font-weight: 700;
          color: #f3f4f6;
          line-height: 1;
        }

        .process-icon {
          font-size: 56px;
          margin-bottom: 24px;
          display: block;
        }

        .process-card-title {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 16px;
        }

        .process-card-description {
          font-size: 16px;
          color: #6b7280;
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .process-section {
            padding: 80px 24px;
          }
          
          .process-title {
            font-size: 36px;
          }
          
          .process-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
      `}</style>

      <section id="process" className="process-section">
        <div className="process-container">
          <div className="process-header">
            <div className="process-subtitle">Как Мы Работаем</div>
            <h2 className="process-title">Простой процесс сотрудничества</h2>
            <p className="process-description">
              От первой консультации до послепродажного обслуживания — мы сопровождаем вас на каждом этапе
            </p>
          </div>

          <div className="process-grid">
            {steps.map((step, index) => (
              <div key={index} className="process-card">
                <div className="process-number">{step.number}</div>
                <span className="process-icon">{step.icon}</span>
                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

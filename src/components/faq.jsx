"use client"

import { useState } from "react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "Какая гарантия на оборудование?",
      answer:
        "Мы предоставляем официальную гарантию от производителя на всё оборудование. Стандартный срок гарантии составляет от 1 до 3 лет в зависимости от типа оборудования. Также доступно расширенное гарантийное обслуживание.",
    },
    {
      question: "Предоставляете ли вы услуги по установке?",
      answer:
        "Да, мы предлагаем полный комплекс услуг по установке и настройке оборудования. Наши сертифицированные специалисты выполнят монтаж, подключение и пусконаладочные работы. Также проводим обучение персонала работе с оборудованием.",
    },
    {
      question: "Возможна ли рассрочка или лизинг?",
      answer:
        "Мы работаем с ведущими банками и лизинговыми компаниями. Доступна рассрочка до 12 месяцев без процентов и лизинг на срок до 5 лет. Наши менеджеры помогут подобрать оптимальную схему финансирования.",
    },
    {
      question: "Как быстро доставляется оборудование?",
      answer:
        "Оборудование, имеющееся на складе, доставляется в течение 1-3 рабочих дней по Москве и области. Доставка в регионы занимает 3-7 дней. Оборудование под заказ поставляется в течение 2-4 недель.",
    },
    {
      question: "Предоставляете ли вы техническое обслуживание?",
      answer:
        "Да, мы предлагаем договоры на регулярное техническое обслуживание. Это включает профилактические осмотры, чистку, настройку и замену расходных материалов. Также доступна экстренная техподдержка 24/7.",
    },
    {
      question: "Можно ли протестировать оборудование перед покупкой?",
      answer:
        "Конечно! В нашем шоуруме вы можете протестировать любое оборудование. Мы также предлагаем демонстрацию оборудования на вашей площадке. Для крупных заказов возможна аренда оборудования на тестовый период.",
    },
  ]

  return (
    <>
      <style>{`
        .faq-section {
          padding: 120px 48px;
          background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
        }

        .faq-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .faq-subtitle {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          color: #6366f1;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .faq-title {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 24px;
        }

        .faq-description {
          font-size: 18px;
          color: #6b7280;
          line-height: 1.6;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .faq-item {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s;
        }

        .faq-item:hover {
          box-shadow: 0 8px 30px rgba(99, 102, 241, 0.15);
        }

        .faq-question {
          width: 100%;
          padding: 28px 32px;
          background: none;
          border: none;
          text-align: left;
          font-size: 18px;
          font-weight: 700;
          color: #1a1a2e;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s;
        }

        .faq-question:hover {
          color: #6366f1;
        }

        .faq-icon {
          font-size: 24px;
          transition: transform 0.3s;
          color: #6366f1;
        }

        .faq-icon.open {
          transform: rotate(180deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease-out, padding 0.4s ease-out;
        }

        .faq-answer.open {
          max-height: 500px;
          padding: 0 32px 28px 32px;
        }

        .faq-answer-text {
          font-size: 16px;
          color: #6b7280;
          line-height: 1.8;
        }

        @media (max-width: 768px) {
          .faq-section {
            padding: 80px 24px;
          }
          
          .faq-title {
            font-size: 36px;
          }
          
          .faq-question {
            font-size: 16px;
            padding: 20px 24px;
          }
          
          .faq-answer.open {
            padding: 0 24px 20px 24px;
          }
        }
      `}</style>

      <section id="faq" className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <div className="faq-subtitle">Часто Задаваемые Вопросы</div>
            <h2 className="faq-title">Ответы на ваши вопросы</h2>
            <p className="faq-description">
              Собрали самые популярные вопросы от наших клиентов. Не нашли ответ? Свяжитесь с нами!
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button className="faq-question" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                  <span>{faq.question}</span>
                  <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>▼</span>
                </button>
                <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
                  <p className="faq-answer-text">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

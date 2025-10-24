"use client"

import React from "react"

import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    alert("Спасибо за обращение! Мы свяжемся с вами в ближайш��е время.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <style>{`
        .contact-section {
          padding: 120px 48px;
          background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
        }

        .contact-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .contact-content {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .contact-subtitle {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          color: #6366f1;
          letter-spacing: 2px;
        }

        .contact-title {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a2e;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .contact-description {
          font-size: 18px;
          color: #4b5563;
          line-height: 1.8;
          margin-bottom: 24px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .contact-icon {
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

        .contact-info-text {
          flex: 1;
        }

        .contact-info-label {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 4px;
        }

        .contact-info-value {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a2e;
        }

        .contact-form {
          background: white;
          padding: 48px;
          border-radius: 32px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 8px;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 16px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 16px;
          font-family: inherit;
          transition: all 0.3s;
          background: #f9fafb;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #6366f1;
          background: white;
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
        }

        .form-textarea {
          min-height: 150px;
          resize: vertical;
        }

        .submit-button {
          width: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 18px 32px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(99, 102, 241, 0.4);
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 80px 24px;
          }
          .contact-title {
            font-size: 36px;
          }
          .contact-form {
            padding: 32px 24px;
          }
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">
            <div className="contact-content">
              <div className="contact-subtitle">Свяжитесь с нами</div>
              <h2 className="contact-title">Готовы трансформировать ваше кафе?</h2>
              <p className="contact-description">
                Наша команда экспертов готова помочь вам выбрать идеальное решение для вашего бизнеса. Получите
                бесплатную консультацию и персональное предложение.
              </p>

              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-info-text">
                    <div className="contact-info-label">Телефон</div>
                    <div className="contact-info-value">+7 (495) 123-45-67</div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-info-text">
                    <div className="contact-info-label">Email</div>
                    <div className="contact-info-value">info@essekz.ru</div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-info-text">
                    <div className="contact-info-label">Адрес</div>
                    <div className="contact-info-value">Москва, ул. Тверская, 15</div>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ваше имя"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Сообщение *
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Расскажите о вашем проекте..."
                />
              </div>

              <button type="submit" className="submit-button">
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

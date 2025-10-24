"use client"

export function Hero() {
  return (
    <>
      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%);
        }

        .nav {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 20;
          padding: 24px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a2e;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-link {
          color: #1a1a2e;
          text-decoration: none;
          font-weight: 500;
          transition: opacity 0.3s;
        }

        .nav-link:hover {
          opacity: 0.7;
        }

        .cta-button {
          background: #6366f1;
          color: white;
          border: none;
          padding: 12px 32px;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 120px 24px 60px;
          max-width: 1200px;
        }

        .rating-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.9);
          padding: 8px 20px;
          border-radius: 50px;
          margin-bottom: 32px;
          font-size: 14px;
          font-weight: 600;
          color: #1a1a2e;
          backdrop-filter: blur(10px);
        }

        .hero-title {
          font-size: 72px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 24px;
          line-height: 1.1;
          text-shadow: 0px 0px 10px #9fb1ffff, 0px 0px 10px #97aaffff;
        }

        .hero-title-accent {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0px 0px 10px #667eea;
        }

        .hero-subtitle {
          font-size: 20px;
          color: #ffffffff;
          margin-bottom: 40px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
          text-shadow: 0px 0px 5px #9fb1ffff, 0px 0px 5px #9fb1ffff, 0px 0px 5px #9fb1ffff, 0px 0px 5px #9fb1ffff, 0px 0px 5px #9fb1ffff;
        }

        .hero-button {
          background: #6366f1;
          color: white;
          border: none;
          padding: 16px 48px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .hero-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(99, 102, 241, 0.4);
        }

        .floating-cards {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
        }

        .floating-card {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 60px;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1));
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          animation: float 6s ease-in-out infinite;
        }

        .floating-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-1 {
          top: 15%;
          left: 10%;
          animation-delay: 0s;
        }

        .card-2 {
          top: 20%;
          right: 15%;
          animation-delay: 1s;
        }

        .card-3 {
          bottom: 25%;
          left: 8%;
          animation-delay: 2s;
        }

        .card-4 {
          bottom: 20%;
          right: 12%;
          animation-delay: 1.5s;
        }

        .decorative-star {
          position: absolute;
          font-size: 24px;
          animation: rotate 10s linear infinite;
        }

        .star-1 {
          top: 30%;
          left: 25%;
        }

        .star-2 {
          bottom: 35%;
          right: 30%;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 48px;
          }
          .nav-links {
            gap: 16px;
          }
          .floating-card {
            width: 120px;
            height: 120px;
          }
        }
      `}</style>

      <section className="hero-section">
        <nav className="nav">
          <div className="logo">ESSE.KZ</div>
          <div className="nav-links">
            <a href="#products" className="nav-link">
              Продукты
            </a>
            <a href="#shop" className="nav-link">
              Магазин
            </a>
            <a href="#solutions" className="nav-link">
              Решения
            </a>
            <button className="cta-button">Связаться</button>
          </div>
        </nav>

        <div className="floating-cards">
          <div className="floating-card card-1">
            <img src="https://www.techbusinessnews.com.au/wp-content/uploads/2021/05/types-of-technology.jpg" alt="Barista" />
          </div>
          <div className="floating-card card-2">
            <img src="https://mccabecoffee.com/cdn/shop/files/barista-course.jpg?v=1729846579&width=2048" alt="Cafe" />
          </div>
          <div className="floating-card card-3">
            <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000" alt="Technology" />
          </div>
          <div className="floating-card card-4">
            <img src="https://shopcafebueno.com/cdn/shop/files/Group_1321315547.jpg?v=1731952312" alt="Customer" />
          </div>
          <div className="decorative-star star-1">✦</div>
          <div className="decorative-star star-2">★</div>
        </div>

        <div className="hero-content">
          <div className="rating-badge">
            <span>⭐ 4.9/5 Рейтинг</span>
            <span>•</span>
            <span>4800+ Отзывов</span>
          </div>

          <h1 className="hero-title">
            Умные Решения
            <br />
            Создают <span className="hero-title-accent">Сильные Бренды</span>
          </h1>

          <p className="hero-subtitle">
            Партнёр с креативной командой, создающей смелые бренды, повышающей узнаваемость и масштабирующей рост через
            дизайн и технологии для вашего кафе
          </p>

          <button className="hero-button">Бесплатный План Бренда</button>
        </div>
      </section>
    </>
  )
}

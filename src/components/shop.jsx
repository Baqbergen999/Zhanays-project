"use client"

import { useState } from "react"

export function Shop() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState("equipment")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const equipmentProducts = [
    {
      id: 3,
      name: "Эспрессо Машина Elite",
      category: "Оборудование",
      price: "379 990 ₽",
      images: [
        "/professional-espresso-machine-modern-design.jpg",
        "/espresso-machine-making-coffee.jpg",
        "/espresso-machine-control-panel.jpg",
      ],
      description: "Профессиональная эспрессо-машина с двойным бойлером",
      fullDescription:
        "Топовая эспрессо-машина с двумя бойлерами, PID-контроллером температуры, программируемыми настройками и возможностью приготовления до 200 чашек в день.",
      specs: [
        "Бойлеры: 2 независимых",
        "Группы: 2 профессиональные",
        "Давление: 9 бар",
        "Производительность: 200 чашек/день",
      ],
    },
    {
      id: 4,
      name: "Умная Кофемолка",
      category: "Оборудование",
      price: "98 990 ₽",
      images: [
        "/modern-coffee-grinder-with-digital-display.jpg",
        "/coffee-grinder-grinding-beans.jpg",
        "/coffee-grinder-close-up-burrs.jpg",
      ],
      description: "Прецизионная кофемолка с программируемыми настройками",
      fullDescription:
        "Профессиональная кофемолка с коническими жерновами из закалённой стали, 40 степеней помола, цифровым дисплеем и программируемой дозировкой.",
      specs: ["Жернова: Конические 64мм", "Степени помола: 40", "Бункер: 1.2 кг", "Скорость: 3-5 сек/порция"],
    },
    {
      id: 2,
      name: "Система Витринных Полок",
      category: "Витрины",
      price: "67 990 ₽",
      images: [
        "/modern-glass-display-shelf-with-led-lights.jpg",
        "/display-shelf-with-pastries.jpg",
        "/display-shelf-side-angle.jpg",
      ],
      description: "Элегантная стеклянная витрина с LED-подсветкой",
      fullDescription:
        "Современная витринная система с закалённым стеклом, регулируемыми полками и встроенной LED-подсветкой. Создаёт привлекательную презентацию ваших продуктов.",
      specs: ["Размер: 120x60x180 см", "Материал: Закалённое стекло", "LED-подсветка: RGB", "Полки: 4 регулируемые"],
    },
    {
      id: 7,
      name: "Профессиональный Блендер",
      category: "Оборудование",
      price: "45 990 ₽",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      description: "Мощный блендер для смузи и коктейлей",
      fullDescription: "Профессиональный блендер с мощностью 2000 Вт, программируемыми режимами и самоочисткой.",
      specs: ["Мощность: 2000 Вт", "Объём: 2 литра", "Скорости: 10 программ", "Материал: Нержавеющая сталь"],
    },
    {
      id: 8,
      name: "Тостер Конвейерный",
      category: "Оборудование",
      price: "78 990 ₽",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      description: "Конвейерный тостер для высокой производительности",
      fullDescription:
        "Профессиональный конвейерный тостер с регулируемой скоростью и температурой для идеальных тостов.",
      specs: [
        "Производительность: 300 тостов/час",
        "Ширина: 35 см",
        "Регулировка: Температура и скорость",
        "Гарантия: 2 года",
      ],
    },
    {
      id: 9,
      name: "Посудомоечная Машина",
      category: "Оборудование",
      price: "156 990 ₽",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      description: "Коммерческая посудомоечная машина",
      fullDescription: "Высокоскоростная посудомоечная машина с циклом 90 секунд и низким потреблением воды.",
      specs: ["Цикл: 90 секунд", "Корзины: 40 в час", "Потребление воды: 2.5 л/цикл", "Температура: 85°C"],
    },
    {
      id: 10,
      name: "Микроволновая Печь Pro",
      category: "Оборудование",
      price: "34 990 ₽",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      description: "Коммерческая микроволновая печь",
      fullDescription: "Мощная микроволновая печь с программируемыми настройками для быстрого разогрева.",
      specs: ["Мощность: 1800 Вт", "Объём: 34 литра", "Программы: 10", "Материал: Нержавеющая сталь"],
    },
  ]

  const refrigerationProducts = [
    {
      id: 1,
      name: "Коммерческий Холодильник Pro",
      category: "Холодильное оборудование",
      price: "189 990 ₽",
      images: [
        "/commercial-refrigerator-stainless-steel-front-view.jpg",
        "/commercial-refrigerator-interior-shelves.jpg",
        "/commercial-refrigerator-side-view.jpg",
      ],
      description: "Премиальный холодильник из нержавеющей стали с умным контролем температуры",
      fullDescription:
        "Профессиональный коммерческий холодильник с системой No Frost, цифровым управлением температурой, LED-подсветкой и энергоэффективностью класса A++. Идеально подходит для хранения продуктов и напитков в кафе.",
      specs: ["Объём: 600 литров", "Температура: -2°C до +8°C", "Энергопотребление: A++", "Гарантия: 3 года"],
    },
    {
      id: 5,
      name: "Витрина для Выпечки",
      category: "Витрины",
      price: "136 990 ₽",
      images: [
        "/curved-glass-pastry-display-case.jpg",
        "/pastry-display-case-with-cakes.jpg",
        "/placeholder.svg?height=600&width=600",
      ],
      description: "Витрина с изогнутым стеклом и охлаждением",
      fullDescription:
        "Элегантная холодильная витрина с панорамным изогнутым стеклом, регулируемой температурой и влажностью, идеальна для демонстрации выпечки и десертов.",
      specs: ["Объём: 400 литров", "Температура: +2°C до +10°C", "Стекло: Панорамное изогнутое", "Полки: 3 уровня"],
    },
    {
      id: 6,
      name: "Коммерческий Морозильник",
      category: "Холодильное оборудование",
      price: "249 990 ₽",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      description: "Энергоэффективный морозильник с цифровым управлением",
      fullDescription:
        "Мощный коммерческий морозильник с системой быстрой заморозки, цифровым контролем температуры, автоматической разморозкой и низким энергопотреблением.",
      specs: ["Объём: 700 литров", "Температура: -18°C до -25°C", "Энергокласс: A+++", "Быстрая заморозка: Да"],
    },
    {
      id: 11,
      name: "Ледогенератор",
      category: "Холодильное оборудование",
      price: "89 990 ₽",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      description: "Автоматический ледогенератор высокой производительности",
      fullDescription:
        "Профессиональный ледогенератор с производительностью 50 кг льда в сутки и встроенным хранилищем.",
      specs: ["Производительность: 50 кг/сутки", "Хранилище: 25 кг", "Тип льда: Кубики", "Охлаждение: Воздушное"],
    },
    {
      id: 12,
      name: "Барная Холодильная Витрина",
      category: "Витрины",
      price: "112 990 ₽",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      description: "Стильная барная витрина для напитков",
      fullDescription:
        "Элегантная холодильная витрина с LED-подсветкой и стеклянными дверцами для демонстрации напитков.",
      specs: ["Объём: 300 литров", "Температура: +2°C до +8°C", "Дверцы: Стеклянные раздвижные", "LED-подсветка: Да"],
    },
  ]

  const currentProducts = activeCategory === "equipment" ? equipmentProducts : refrigerationProducts

  const totalPages = Math.ceil(currentProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const displayedProducts = currentProducts.slice(startIndex, endIndex)

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setActiveImageIndex(0)
  }

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  return (
    <>
      <style>{`
        .shop-section {
          padding: 120px 48px;
          background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
        }

        .shop-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .shop-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .shop-subtitle {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          color: #6366f1;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .shop-title {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 24px;
        }

        .shop-description {
          font-size: 18px;
          color: #6b7280;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 32px;
          margin-bottom: 60px;
        }

        .category-tabs {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 60px;
        }

        .category-tab {
          background: white;
          border: 2px solid #e5e7eb;
          color: #6b7280;
          padding: 16px 40px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .category-tab:hover {
          border-color: #6366f1;
          color: #6366f1;
        }

        .category-tab.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-color: transparent;
          color: white;
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
        }

        .product-card {
          background: white;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(99, 102, 241, 0.2);
        }

        .product-image-container {
          position: relative;
          width: 100%;
          padding-top: 100%;
          overflow: hidden;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .product-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .product-card:hover .product-image {
          transform: scale(1.1);
        }

        .product-category {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(99, 102, 241, 0.95);
          color: white;
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .product-info {
          padding: 28px;
        }

        .product-name {
          font-size: 22px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 12px;
        }

        .product-description {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .product-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .product-price {
          font-size: 28px;
          font-weight: 700;
          color: #6366f1;
        }

        .view-details-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .view-details-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.3s ease-out;
        }

        .modal-content {
          background: white;
          border-radius: 32px;
          max-width: 1100px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.3);
        }

        .modal-close {
          position: absolute;
          top: 24px;
          right: 24px;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          font-size: 24px;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-close:hover {
          background: #f3f4f6;
          transform: rotate(90deg);
        }

        .modal-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          padding: 48px;
        }

        .modal-images {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .main-modal-image {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 24px;
          object-fit: cover;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .thumbnail-images {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .thumbnail {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 16px;
          object-fit: cover;
          cursor: pointer;
          transition: all 0.3s;
          border: 3px solid transparent;
        }

        .thumbnail:hover {
          border-color: #6366f1;
          transform: scale(1.05);
        }

        .thumbnail.active {
          border-color: #6366f1;
          box-shadow: 0 0 0 2px white, 0 0 0 4px #6366f1;
        }

        .modal-details {
          display: flex;
          flex-direction: column;
        }

        .modal-category {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 16px;
          width: fit-content;
        }

        .modal-name {
          font-size: 36px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .modal-price {
          font-size: 42px;
          font-weight: 700;
          color: #6366f1;
          margin-bottom: 24px;
        }

        .modal-description {
          font-size: 16px;
          color: #4b5563;
          line-height: 1.8;
          margin-bottom: 32px;
        }

        .modal-specs {
          background: #f9fafb;
          border-radius: 20px;
          padding: 24px;
          margin-bottom: 32px;
        }

        .specs-title {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 16px;
        }

        .specs-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .specs-list li {
          padding: 12px 0;
          border-bottom: 1px solid #e5e7eb;
          color: #4b5563;
          font-size: 15px;
        }

        .specs-list li:last-child {
          border-bottom: none;
        }

        .modal-actions {
          display: flex;
          gap: 16px;
        }

        .add-to-cart-btn {
          flex: 1;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 18px 32px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .add-to-cart-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(99, 102, 241, 0.4);
        }

        .contact-btn {
          background: white;
          color: #6366f1;
          border: 2px solid #6366f1;
          padding: 18px 32px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .contact-btn:hover {
          background: #6366f1;
          color: white;
        }

        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          margin-top: 60px;
        }

        .pagination-btn {
          background: white;
          border: 2px solid #e5e7eb;
          color: #6b7280;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pagination-btn:hover:not(:disabled) {
          border-color: #6366f1;
          color: #6366f1;
          transform: scale(1.05);
        }

        .pagination-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .pagination-btn.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-color: transparent;
          color: white;
        }

        .pagination-info {
          color: #6b7280;
          font-size: 14px;
          font-weight: 500;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1024px) {
          .modal-grid {
            grid-template-columns: 1fr;
          }
          .products-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .shop-section {
            padding: 80px 24px;
          }
          .shop-title {
            font-size: 36px;
          }
          .products-grid {
            grid-template-columns: 1fr;
          }
          .modal-grid {
            padding: 24px;
            gap: 24px;
          }
        }
      `}</style>

      <section id="shop" className="shop-section">
        <div className="shop-container">
          <div className="shop-header">
            <div className="shop-subtitle">Премиум Оборудование</div>
            <h2 className="shop-title">Магазин эксклюзивной коллекции</h2>
            <p className="shop-description">
              Профессиональное оборудование, разработанное для современных кафе. Все продукты поставляются с гарантией и
              поддержкой установки.
            </p>
          </div>

          <div className="category-tabs">
            <button
              className={`category-tab ${activeCategory === "equipment" ? "active" : ""}`}
              onClick={() => handleCategoryChange("equipment")}
            >
              Оборудование и Витрины
            </button>
            <button
              className={`category-tab ${activeCategory === "refrigeration" ? "active" : ""}`}
              onClick={() => handleCategoryChange("refrigeration")}
            >
              Холодильное Оборудование
            </button>
          </div>

          <div className="products-grid">
            {displayedProducts.map((product) => (
              <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
                <div className="product-image-container">
                  <img src={product.images[0] || "/placeholder.svg"} alt={product.name} className="product-image" />
                  <div className="product-category">{product.category}</div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <button className="view-details-btn">Подробнее</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="pagination-btn"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                ←
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`pagination-btn ${currentPage === page ? "active" : ""}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}

              <button
                className="pagination-btn"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                →
              </button>

              <span className="pagination-info">
                Страница {currentPage} из {totalPages}
              </span>
            </div>
          )}
        </div>

        {selectedProduct && (
          <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedProduct(null)}>
                ×
              </button>

              <div className="modal-grid">
                <div className="modal-images">
                  <img
                    src={selectedProduct.images[activeImageIndex] || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    className="main-modal-image"
                  />
                  <div className="thumbnail-images">
                    {selectedProduct.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img || "/placeholder.svg"}
                        alt={`${selectedProduct.name} ${idx + 1}`}
                        className={`thumbnail ${idx === activeImageIndex ? "active" : ""}`}
                        onClick={() => setActiveImageIndex(idx)}
                      />
                    ))}
                  </div>
                </div>

                <div className="modal-details">
                  <span className="modal-category">{selectedProduct.category}</span>
                  <h2 className="modal-name">{selectedProduct.name}</h2>
                  <div className="modal-price">{selectedProduct.price}</div>
                  <p className="modal-description">{selectedProduct.fullDescription}</p>

                  <div className="modal-specs">
                    <h3 className="specs-title">Технические характеристики</h3>
                    <ul className="specs-list">
                      {selectedProduct.specs.map((spec, idx) => (
                        <li key={idx}>{spec}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-actions">
                    <button className="add-to-cart-btn">🛒 Добавить в корзину</button>
                    <button className="contact-btn">Связаться</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

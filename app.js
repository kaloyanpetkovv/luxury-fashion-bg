// Примерни данни за продукти
const products = [
    {
        title: "Stone Island Кофи",
        price: "219.99 лв",
        image: "https://via.placeholder.com/300x300?text=Stone+Island"
    },
    {
        title: "Moncler Якета",
        price: "349.99 лв",
        image: "https://via.placeholder.com/300x300?text=Moncler"
    },
    {
        title: "Dior Тениски",
        price: "129.99 лв",
        image: "https://via.placeholder.com/300x300?text=Dior"
    },
    {
        title: "Gucci Рокли",
        price: "279.99 лв",
        image: "https://via.placeholder.com/300x300?text=Gucci"
    }
];

// Функция за показване на продуктите
function renderProducts() {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">${product.price}</p>
            </div>
        `;
        productContainer.appendChild(productCard);
    });
}

// Стартиране при зареждане на страницата
document.addEventListener('DOMContentLoaded', renderProducts);
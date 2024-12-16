function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}


function renderProducts(filter) {
    const productsWrapper = document.querySelector('.product__grid');
    
    const products = getProducts();

    if (filter === "LOW_TO_HIGH") {
        products.sort((a, b) => a.price - b.price);
    }
    else if (filter === "HIGH_TO_LOW") {
        products.sort((a, b) => b.price - a.price);
    }
    else if (filter === "RATING") {
        products.sort((a, b) => b.rating - a.rating);
    }

    const productsHTML = products.map(product => {
        return `<div class="product">
            <figure class="product__img--wrapper">
                <img src="${product.url}" alt="soap" class="product__img" />
            </figure>
            <h3 class="product__title">${product.title}</h3>
            <p class="product__description">
                this is a great product for dry skin.
            </p>
            <p class="product__price">
                $${product.price}
                <a href="./products.html" class="view__product--link">
                    view
                </a>
            </p>
            <i class="fa fa-star rating">${product.rating}</i>
        </div>`;
        
    }).join("");
    
    productsWrapper.innerHTML = productsHTML;
};

function filterProducts(event) {
    renderProducts(event.target.value);
    
}


setTimeout(() => {
    renderProducts();
});

function getProducts() {
    return [
        {
            id: 1,
            title: "Raw Shea Butter",
            url: "assets/soap1.jpg",
            price: 11.99,
            rating: 4.5,
        },
        {
            id: 2,
            title: "Raw Cocoa Butter",
            url: "assets/soap2.jpg",
            price: 14.99,
            rating: 5,
        },
        {
            id: 3,
            title: "Raw Almond Butter",
            url: "assets/soap3.jpg",
            price: 9.99,
            rating: 5,
        },
        {
            id: 4,
            title: "Raw Jelly Butter",
            url: "assets/soap4.jpg",
            price: 14.99,
            rating: 5,
        },
        {
            id: 5,
            title: "Natural Raw Soap",
            url: "assets/soap5.jpg",
            price: 6.99,
            rating: 4,
        },
        {
            id: 6,
            title: "Natural Shampoo",
            url: "assets/soap6.jpg",
            price: 14.99,
            rating: 5,
        },
        {
            id: 7,
            title: "Natural Conditioner",
            url: "assets/soap7.jpg",
            price: 12.99,
            rating: 4.5,
        },
        {
            id: 8,
            title: "Natural Shea Soap",
            url: "assets/soap8.jpg",
            price: 7.99,
            rating: 4.5,
        }
    ]
}
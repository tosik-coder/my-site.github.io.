const products = [
    { name: "Світшот", price: 450, img: "https://argo.ua/storage/images/db/db0395f9-d5aa-460f-8ef6-db59b1f7af52/s2/AUljnMQdZEL2SAH5lqpseL0bKnuUmDt5PDjaX2Oa.jpg" },
    { name: "Худачок без принта", price: 900, img: "https://ladan-shop.com.ua/assets/images/products/6962/kw7-black2.jpg" },
    { name: "Худачок з принтом", price: 1200, img: "https://imagedelivery.net/nmdL8GYRvCm2wKaYqp-7sg/6452b433b29bbec3c84804cadd2d8d6d.png/original" },
    { name: "Лонгслівчик", price: 900, img: "https://pullup.com.ua/wp-content/uploads/2024/07/longsliv-ash-345g.webp" },
    { name: "Зіпочка", price: 1230, img: "https://purplelama.com.ua/wp-content/uploads/2025/09/img_4333.webp" },
];

const container = document.getElementById("products");
const priceValue = document.getElementById("priceValue");
const priceRange = document.getElementById("priceRange");

function renderProducts(maxPrice) {
    container.innerHTML = "";
    products
        .filter(p => p.price <= maxPrice)
        .forEach(p => {
            container.innerHTML += `
                <div class="card">
                    <img src="${p.img}">
                    <h3>${p.name}</h3>
                    <p class="price">${p.price} грн</p>
                </div>
            `;
        });
}

priceRange.addEventListener("input", () => {
    priceValue.textContent = priceRange.value;
    renderProducts(priceRange.value);
});

renderProducts(priceRange.value);

const products = [
    { name: "Казьол", price: 150, img: "https://i.pinimg.com/736x/05/f6/fb/05f6fb13711b9b6349668a663d71df2e.jpg" },
    { name: "Коровки", price: 300, img: "https://i.pinimg.com/736x/67/64/da/6764da61b7ba55771374308cb63fa0df.jpg" },
    { name: "Змійки", price: 450, img: "https://i.pinimg.com/736x/0e/0c/72/0e0c7223d356ce0e890ed3f44ba2d9a9.jpg" },
    { name: "На п_2-шиних ножках", price: 3.1415, img: "https://i.pinimg.com/736x/fd/06/04/fd06045e2b6b107acb80c7fe22c9c100.jpg" },
    { name: "З кругним носиком", price: 3122, img: "https://i.pinimg.com/736x/6d/c1/98/6dc198e80f7e9d9e782c1e9b789b1a63.jpg" },
    { name: "Мотоцикл бр бр", price: 2288, img: "https://i.pinimg.com/736x/25/23/b8/2523b85d1800431d10d0c2a597a1ba08.jpg" },
    { name: "Кіцічки", price: 1111, img: "https://i.pinimg.com/736x/fd/0b/b6/fd0bb660faf77d0b388ee75d9a65ae7b.jpg" },
    { name: "Бджели", price: 3312, img: "https://i.pinimg.com/736x/9c/79/f8/9c79f8a1dda26d540cfba4f322f04e61.jpg" },
    { name: "Бананчікі", price: 712, img: "https://i.pinimg.com/736x/e1/bd/a0/e1bda019dece5f161e8234806eeef301.jpg" },
    { name: "Хрючели", price: 699, img: "https://i.pinimg.com/736x/61/dd/50/61dd50f8bfc16c5ea2c9a4d3cff777e6.jpg" },
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

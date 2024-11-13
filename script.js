fetch(`https://api.telegram.org/bot<your_bot_token>/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        chat_id: "<your_chat_id>",
        text: `Product purchased: ${product.name} for $${product.price}`
    })
});

const products = [
    { name: "Product 1", price: 10, description: "This is product 1" },
    { name: "Product 2", price: 15, description: "This is product 2" },
    { name: "Product 3", price: 20, description: "This is product 3" }
];

const productSection = document.getElementById("products");

products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
    `;
    productSection.appendChild(productDiv);
});

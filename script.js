const botToken = '7566416998:AAFeeQplxMVsQ9tMpskOZl4uPuAnzsShbLc';
const chatId = '7228202401';

const products = [
    { name: "Product 1", price: 10, description: "This is product 1" },
    { name: "Product 2", price: 15, description: "This is product 2" },
    { name: "Product 3", price: 20, description: "This is product 3" }
];

const productSection = document.getElementById("products");

// Check that the productSection exists in the DOM
console.log("Product section:", productSection);

products.forEach(product => {
    console.log("Creating product:", product); // Debug: confirm each product is accessed

    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
        <button>Buy Now</button>
    `;

    // Add an event listener to the "Buy Now" button
    productDiv.querySelector("button").addEventListener("click", () => {
        console.log("Button clicked for:", product.name); // Debug: button click

        // Send a message to Telegram when the button is clicked
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: `Product purchased: ${product.name} for $${product.price}`
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Message sent:', data); // Debug: confirm message sent
            alert(`Order placed for ${product.name}! You will receive a notification.`);
        })
        .catch(error => console.error('Error:', error));
    });

    productSection.appendChild(productDiv);
});

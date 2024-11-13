const botToken = '7566416998:AAFeeQplxMVsQ9tMpskOZl4uPuAnzsShbLc';
const chatId = '7228202401';

const products = [
    { name: "John Pork Shirt", price: 25.99, description: "Black John Pork Cotton Shortsleeve", image: "product1.jpg" },
    { name: "Product 2", price: 15, description: "This is product 2", image: "product2.jpg" },
    { name: "Product 3", price: 20, description: "This is product 3", image: "product3.jpg" },
    { name: "Product 4", price: 25, description: "This is product 4", image: "product4.jpg" },
    { name: "Product 5", price: 30, description: "This is product 5", image: "product5.jpg" },
    { name: "Product 6", price: 35, description: "This is product 6", image: "product6.jpg" },
    { name: "Product 7", price: 40, description: "This is product 7", image: "product7.jpg" },
    { name: "Product 8", price: 45, description: "This is product 8", image: "product8.jpg" },
    { name: "Product 9", price: 50, description: "This is product 9", image: "product9.jpg" }
];

const productSection = document.getElementById("products");

// Ensure the productSection exists in the DOM
if (productSection) {
    console.log("Product section found:", productSection);

    // Loop through the products array
    products.forEach(product => {
        console.log("Creating product:", product); // Debug: confirm each product is accessed

        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        // Create the product structure with an image container, name, description, and price
        productDiv.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
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

        // Append the product to the product section
        productSection.appendChild(productDiv);
    });
} else {
    console.error("Product section not found in the DOM.");
}

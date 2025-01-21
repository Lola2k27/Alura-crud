const productGrid = document.getElementById('product-grid');
const productForm = document.getElementById('product-form');

// Agregar producto
productForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;

    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <button class="delete-btn">&times;</button>
        <img src="${image}" alt="${name}">
        <h3>${name}</h3>
        <p>$${price}</p>
    `;

    // Botón de eliminar
    productCard.querySelector('.delete-btn').addEventListener('click', () => {
        productGrid.removeChild(productCard);
    });

    productGrid.appendChild(productCard);

    productForm.reset();
});

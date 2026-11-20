let cart = JSON.parse(localStorage.getItem('meltZestCart')) || [];

function updateCartCount() {
    const countEl = document.getElementById('cart-count');
    if (countEl) {
        const totalItem = cart.reduce((sum, item) => sum + item.qty, 0);
        countEl.textContent = totalItem;
    }
}

function simpanKeranjang(produk) {
    const existingIndex = cart.findIndex(
        item => item.nama === produk.nama && item.varian === produk.varian
    );

    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push(produk);
    }

    localStorage.setItem('meltZestCart', JSON.stringify(cart));
    updateCartCount();
    alert(`${produk.nama} (${produk.varian}) berhasil ditambahkan ke keranjang!`);
}

function tambahRoti() {
    const rasaEl = document.getElementById('rasa-es');
    const toppingEl = document.getElementById('topping-roti');
    const rasa = rasaEl ? rasaEl.value : 'Vanila';
    const topping = toppingEl ? toppingEl.value : 'Oreo Remuk';

    simpanKeranjang({
        nama: 'Roti Ice Cream',
        varian: `Es ${rasa} + Topping ${topping}`,
        harga: 13000,
        qty: 1
    });
}

function tambahAsinan() {
    const pedasEl = document.getElementById('level-pedas');
    const catatanEl = document.getElementById('catatan-asinan');
    const pedas = pedasEl ? pedasEl.value : 'Pedas Sedang';
    const catatan = catatanEl ? catatanEl.value.trim() : '';
    const detailVarian = catatan ? `${pedas} (${catatan})` : pedas;

    simpanKeranjang({
        nama: 'Asinan Buah',
        varian: detailVarian,
        harga: 10000,
        qty: 1
    });
}

document.addEventListener('DOMContentLoaded', updateCartCount);
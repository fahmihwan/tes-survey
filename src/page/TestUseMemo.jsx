import React, { useMemo, useState } from 'react';

const products = [
    { id: 1, name: 'Laptop', price: 1000, category: 'Electronics', rating: 4.5 },
    { id: 2, name: 'Shirt', price: 50, category: 'Clothing', rating: 4.0 },
    { id: 3, name: 'Shoes', price: 100, category: 'Footwear', rating: 3.5 },
    // 1000 more products...
];

function TestUseMemo() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    // Menggunakan useMemo untuk menyaring dan menyortir produk hanya ketika searchTerm atau sortOrder berubah
    const filteredAndSortedProducts = useMemo(() => {
        return products
            .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price));
    }, [searchTerm, sortOrder]);  // Hanya menghitung ulang jika searchTerm atau sortOrder berubah

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search products"
            />
            <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
                Sort by Price ({sortOrder})
            </button>

            <ul>
                {filteredAndSortedProducts.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TestUseMemo;

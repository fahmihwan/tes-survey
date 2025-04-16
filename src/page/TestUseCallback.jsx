import React, { useState, useCallback } from 'react';

function Item({ id, onSelect }) {
    console.log(`Item ${id} rendered`);
    return <button onClick={() => onSelect(id)}>Select Item {id}</button>;
}

function TestUseCallback() {
    const [selectedItem, setSelectedItem] = useState(null);

    // Menggunakan useCallback untuk menghindari pembuatan fungsi baru
    const handleSelect = useCallback((id) => {
        setSelectedItem(id);
    }, []);

    return (
        <div>
            <h1>Selected Item: {selectedItem}</h1>
            <div>
                {Array.from({ length: 5 }).map((_, index) => (
                    <Item key={index} id={index} onSelect={handleSelect} />
                ))}
            </div>
        </div>
    );
}

export default TestUseCallback;

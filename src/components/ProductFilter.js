import React, { useState } from 'react';
import "./ProductFilter.css"
import { motion } from 'framer-motion';

const ProductFilter = ({ categories, onFilterChange, getTitle }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        onFilterChange(event.target.value);
    };

    const containerMotion = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemMotion = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }


    return (
        <>
            <motion.div className="Container-heading"
                variants={containerMotion}
                initial="hidden"
                animate="visible"
            >
                <h1 className="allProduct">{getTitle}</h1>
                <h2 >Product Filter: </h2>
                <motion.select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className='droptown'
                    variants={itemMotion}
                >
                    <option value="">All Product</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </motion.select>
            </motion.div>
        </>
    );
}

export default ProductFilter;
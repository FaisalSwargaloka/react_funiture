import "./product.css"
import React, { useState, useContext } from 'react';
import mejaOlserod from "../../asset/meja_OLSERÖD_599.000.png"
import mejaMicke from "../../asset/meja_MICKE_999.000.png"
import mejaAddieSandsberg from "../../asset/meja_ADDE_SANDSBERG_1.369.000.png"
import sofaParup from "../../asset/sofa_PÄRUP_8.495.000.png"
import sofaKivic from "../../asset/sofa_KIVIK_7.295.000.png"
import sofaBillesholm from "../../asset/sofa_BILLESHOLM_1.595.000.png"
import decorationBjorkspirea from "../../asset/dekorasi_BJÖRKSPIREA_249.000.png"
import decorationHandsup from "../../asset/dekorasi_handsup_399.000.png"
import decorationSjalsligt from "../../asset/dekorasi_SJÄLSLIGT_299.000.png"
import LampHektar from "../../asset/lampu_HEKTAR_399.000.png"
import LampNymane from "../../asset/lampu_NYMÅNE_299.000.png"
import lampu_TERTIAL_199 from "../../asset/lampu_TERTIAL_199.000.png"
import bottleKorken from "../../asset/bottle_KORKEN_29.000.png"
import bottleKecap from "../../asset/bottle_kecap_19.000.png"
import penutupBotol from "../../asset/penutupBotol_89.900.png"
import rakEkenabben from "../../asset/rak_EKENABBEN_699.000.png"
import rakKallax from "../../asset/rak_KALLAX_2.579.000.png"
import rakVittsjo from "../../asset/rak_VITTSJÖ_999.000.png"
import Footer from "../../components/Footer";
import { FaCartPlus } from "react-icons/fa"
import ProductFilter from "../../components/ProductFilter";
import { motion } from "framer-motion";
import { CartContext } from "../../components/CartContext";

const Product = () => {

    const { addToCart } = useContext(CartContext);

    const products = [
        { id: 1, name: 'MEJA ADDIE SANDSBREG', image: mejaAddieSandsberg, category: 'meja/sofa', price: 1369000 },
        { id: 2, name: 'MEJA MICKE', image: mejaMicke, category: 'meja/sofa', price: 999000 },
        { id: 3, name: 'MEJA OLSEROD', image: mejaOlserod, category: 'meja/sofa', price: 569000 },
        { id: 4, name: 'SOFA KIVIC', image: sofaKivic, category: 'meja/sofa', price: 7295000 },
        { id: 5, name: 'SOFA BILLESHOLM', image: sofaBillesholm, category: 'meja/sofa', price: 1595000 },
        { id: 6, name: 'SOFA PARUP', image: sofaParup, category: 'meja/sofa', price: 8495000 },
        { id: 7, name: 'BJORKASPIREA', image: decorationBjorkspirea, category: 'Decoration/Lampu', price: 249000000 },
        { id: 8, name: 'HANDS UP', image: decorationHandsup, category: 'Decoration/Lampu', price: 399000 },
        { id: 9, name: 'SJALSLIGHT', image: decorationSjalsligt, category: 'Decoration/Lampu', price: 299000 },
        { id: 10, name: 'LAMPU TERTIAL', image: lampu_TERTIAL_199, category: 'Decoration/Lampu', price: 199000 },
        { id: 11, name: 'LAMPU HEKTAR', image: LampHektar, category: 'Decoration/Lampu', price: 399000 },
        { id: 12, name: 'LAMPU NYMANE', image: LampNymane, category: 'Decoration/Lampu', price: 299000 },
        { id: 13, name: 'BOTTLE KECAP', image: bottleKecap, category: 'Bottle', price: 19000 },
        { id: 14, name: 'BOTTLE KORKEN', image: bottleKorken, category: 'Bottle', price: 29000 },
        { id: 15, name: 'PENUTUP BOTTLE', image: penutupBotol, category: 'Bottle', price: 89000 },
        { id: 16, name: 'RAK EKENABBEN', image: rakEkenabben, category: 'Rak ', price: 699000 },
        { id: 17, name: 'RAK KALLAX', image: rakKallax, category: 'Rak ', price: 2579000 },
        { id: 18, name: 'RAK VITTSJO', image: rakVittsjo, category: 'Rak ', price: 999000 },
    ];

    const categories = Array.from(new Set(products.map((product) => product.category)));

    const [filteredProducts, setFilteredProducts] = useState(products);

    const [getTitle, setGetTitle] = useState("all Product")

    const handleFilterChange = (selectedCategory) => {
        if (selectedCategory === '') {
            setFilteredProducts(products);
            setGetTitle("Al Product");
        } else {
            const filteredProducts = products.filter((product) => product.category === selectedCategory);
            setFilteredProducts(filteredProducts);
            setGetTitle(selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1) + " Products")
        }
    };


    const containerMotion = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
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
            <div className="product-Bg">
                <div>
                    <ProductFilter categories={categories} onFilterChange={handleFilterChange} getTitle={getTitle} />
                    <h1 className="title-filter" >Filtered Products : {getTitle}</h1>
                    <motion.div className="container-item-product"
                        variants={containerMotion}
                        initial="hidden"
                        animate="visible"
                    >
                        {filteredProducts.map((product, i) => (
                            <motion.div className="image-wrapper" key={i} variants={itemMotion}>
                                <img src={product.image} className="image-item" alt="" />
                                <div className="nama">{product.name} </div>
                                <p className="price">Rp.{product.price.toLocaleString()}</p>
                                <button className="icon-cart" onClick={() => addToCart({ ...product, quantity: 1 })} ><FaCartPlus size={20} />
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Product;
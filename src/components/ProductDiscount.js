import "./productDiscount.css"
import React from 'react';
import { Link } from "react-router-dom";
import sofaBillesholm from "../asset/sofa_BILLESHOLM_1.595.000.png"

const ProductDiscount = () => {
    return (
        <>
            <div className="container-discount">
                <section className="section-item-left">
                    <article className="articel-item">
                        <h1 className="huge-sale">HUGE SALE!!!</h1>
                        <h2 className="discount">50% OFFER</h2>
                        <p className="detail-discount">Artikel, artikula, atau kata sandang adalah kata yang tidak memiliki arti tapi menjelaskan nomina. Contoh dalam bahasa Indonesia adalah si, sang, dan kaum. Kata sandang bisa </p>
                        <Link to='/product'>
                            <button className="btn-discount-product">View Product </button>
                        </Link>
                    </article>
                </section>
                <section className="section-item-right">
                    <img src={sofaBillesholm} alt="" className="img-discount" />
                </section>
            </div>
        </>
    );
}

export default ProductDiscount;
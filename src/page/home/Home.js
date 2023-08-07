import "../home/home.css"
import bagroundImg from "../../asset/bg/baground1.jpg"
import sofaParup from "../../asset/sofa_PÄRUP_8.495.000.png"
import lampHektar from "../../asset/lampu_HEKTAR_399.000.png"
import rakKalax from "../../asset/rak_KALLAX_2.579.000.png"
import ProductHome from "../../components/ProductHome"
import ProductDiscount from "../../components/ProductDiscount"
import Footer from "../../components/Footer"
import React from 'react';

const Home = () => {
    return (
        <>
            <div
                className="bgHome"
            >
                <div className="container-home">
                    <img className="funiture-bg-image" src={bagroundImg} alt="sda" />
                    <div className="title-first">
                        <h1>BCOM FUNITURE</h1>
                        <h3>With The Ethics Of Making Aesthetics</h3>
                    </div>
                </div>
                <ProductDiscount />
                <div className="title-newProduct">New Product</div>
                <div className="container-card-home">
                    <section className="section-1">
                        <article className="artickel-home">
                            <h3>SOFA PÄRUP</h3>
                            merupakan salah satu produk terbaru dari industri furnitur, menawarkan kombinasi sempurna antara elegansi dan kenyamanan
                            desainnya yang elegan dan modern. Sofa ini memiliki bentuk yang simpel namun menarik dengan garis-garis halus dan sudut yang lembut. Dengan desain yang bersih dan minimalis
                        </article>
                        <div className="card-wrapper">
                            <img className="card-image" src={sofaParup} alt="" />
                        </div>
                    </section >
                    <section className="section-2">
                        <div className="card-wrapper-reverse">
                            <img className="card-image" src={rakKalax} alt="" />
                        </div>
                        <article className="article-reverse">
                            <h3>Rak Kallax</h3>
                            merupakan salah satu produk terbaru dari industri furnitur, menawarkan kombinasi sempurna antara elegansi dan kenyamanan
                            desainnya yang elegan dan modern. Sofa ini memiliki bentuk yang simpel namun menarik dengan garis-garis halus dan sudut yang lembut. Dengan desain yang bersih dan minimalis
                        </article>
                    </section>
                    <section className="section-1">
                        <article className="artickel-home">
                            <h3>Lamp Hektar</h3>
                            merupakan salah satu produk terbaru dari industri furnitur, menawarkan kombinasi sempurna antara elegansi dan kenyamanan
                            desainnya yang elegan dan modern. Sofa ini memiliki bentuk yang simpel namun menarik dengan garis-garis halus dan sudut yang lembut. Dengan desain yang bersih dan minimalis
                        </article>
                        <div className="card-wrapper">
                            <img className="card-image" src={lampHektar} alt="" />
                        </div>
                    </section>
                </div>
                <ProductHome />
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Home;
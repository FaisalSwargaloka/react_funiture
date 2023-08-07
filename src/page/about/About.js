import image1 from "../../asset/about/image-1.jpg"
import image2 from "../../asset/about/image-2.jpg"
import image3 from "../../asset/about/image-3.jpg"
import "./about.css"
import Footer from "../../components/Footer"
import React from 'react';

const About = () => {

    return (
        <>
            <div className="aboutBg">
                <img className="image-about-1" src={image1} alt="" />
                <div className="container-about-main">
                    <section className="section-welcome">
                        <div className="text-welcome">
                            <h1 className="title-welcome">Selamat datang di Bcom Funiture!</h1>
                            <p>selamat datang di Bcom Furniture, destinasi online terbaik Anda untuk semua kebutuhan furnitur terkini dan terbaik. Di sini, kami menyediakan beragam produk furnitur berkualitas tinggi untuk memenuhi kebutuhan dekorasi rumah dan kantor Anda.</p>
                        </div>
                    </section>
                    <section className="section-service">
                        <div className="service-left">
                            <img className="image-service-2" src={image2} alt="" />
                        </div>
                        <div className="service-right">
                            <div className="text-service">
                                <h1 className="title-service">Service</h1>
                                <p>Pelayanan Pelanggan
                                    Kepuasan pelanggan adalah prioritas utama kami. Tim layanan pelanggan kami siap membantu Anda dengan senang hati dalam mencari produk yang tepat, memberikan informasi tentang produk, serta membantu dalam proses pembelian dan pengiriman. Kami menghargai setiap masukan dan saran dari pelanggan kami, karena itu membantu kami untuk terus meningkatkan pelayanan kami.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="section-filosofi">
                        <div className="text-filosofi">
                            <h1 className="title-filosofi">Filosofi Kami</h1>
                            <p>Di Bcom Funiture, kami percaya bahwa furnitur adalah lebih dari sekadar barang untuk penggunaan sehari-hari; itu adalah pernyataan gaya dan kepribadian Anda. Oleh karena itu, kami berkomitmen untuk menyediakan furnitur yang dirancang dengan cermat, menggunakan bahan berkualitas tinggi, dan diproduksi dengan standar kualitas yang ketat.
                                Kami juga selalu berusaha untuk tetap up-to-date dengan tren dan inovasi terbaru dalam industri furnitur. Dengan menyediakan koleksi terbaru dari produsen terkemuka, kami ingin memastikan Anda selalu mendapatkan akses ke pilihan terbaik dan terbaru yang sesuai dengan selera Anda.
                            </p>
                        </div>
                    </section>
                    <section className="section-misi">
                        <div className="misi-left">
                            <div className="text-misi">
                                <h1 className="title-misi">Misi Kami</h1>
                                <p>Misi kami adalah menjadi toko online furnitur terpercaya yang menyediakan berbagai pilihan produk berkualitas tinggi, memberikan layanan pelanggan terbaik, dan menjadi sumber inspirasi dalam mendekorasi ruang hidup Anda.
                                    Kami ingin menciptakan pengalaman berbelanja yang menyenangkan bagi Anda, di mana Anda dapat menemukan furnitur yang mencerminkan gaya pribadi Anda dan memberikan kenyamanan bagi rumah atau kantor Anda.
                                </p>
                            </div>
                        </div>
                        <div className="misi-right">
                            <img className="image-misi-3" src={image3} alt="" />
                        </div>
                    </section>
                    <section className="section-aboutUs">
                        <div className="text-aboutUs">
                            <h1 className="title-aboutUs">Tentang Kami</h1>
                            <p>Bcom Funiture didirikan dengan tujuan memberikan pengalaman berbelanja furnitur yang menyenangkan dan menyediakan pelanggan dengan pilihan terbaik dari berbagai gaya dan desain. Tim kami terdiri dari para ahli industri furnitur yang berdedikasi untuk memberikan kualitas terbaik, desain yang menarik, dan harga yang kompetitif.
                                Kami memiliki berbagai kategori produk untuk memenuhi kebutuhan setiap pelanggan kami. Mulai dari ruang tamu, ruang makan, kamar tidur, hingga ruang kantor, kami menawarkan berbagai pilihan furnitur modern dan klasik, serta gaya kontemporer yang akan melengkapi setiap sudut rumah Anda dengan keindahan dan kenyamanan.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
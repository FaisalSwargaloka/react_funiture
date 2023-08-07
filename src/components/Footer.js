import "./Footer.css"
import github from "../asset/sosmed/github.png"
import instagram from "../asset/sosmed/instagram.png"
import twitter from "../asset/sosmed/twitterr.png"
import linkin from "../asset/sosmed/linkin.png"
import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="container-footer">
                <section className="section-footer">
                    <div className="logo-footer">BCOM FUNITURE</div>
                    <footer className="footer-sosmed">
                        <div className="titlle-sosmed">find us in media</div>
                        <ul>
                            <img src={github} className="img-sosmed" alt="" />
                            <img src={instagram} className="img-sosmed" alt="" />
                            <img src={twitter} className="img-sosmed" alt="" />
                            <img src={linkin} className="img-sosmed" alt="" />
                        </ul>
                    </footer>
                    <footer className="footer">
                        <div className="titlle-footer">COMMUNITY</div>
                        <ul>
                            <li>Blog</li>
                            <li>Community</li>
                            <li>Ideas</li>
                            <li>Developer</li>
                        </ul>
                    </footer>
                    <footer className="footer">
                        <div className="titlle-footer">COMPANY</div>
                        <ul>
                            <li>About</li>
                            <li>Team</li>
                            <li>Media</li>
                            <li>Contact & imprunt</li>
                            <li>Affliates</li>
                            <li>Reseller</li>
                        </ul>
                    </footer>
                    <div className="copyright-footer">
                        <p>
                            @{new Date().getFullYear()} FaisalSwargaloka. All right reserved.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Footer;
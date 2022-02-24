import React from 'react';
import "./Home.css";
import back from '../src/img/371.png';
import logo from '../src/img/naf white.png';

import img2 from '../src/img/Union.png'
import img3 from '../src/img/Vector (3).png'
import img4 from '../src/img/Vector (4).png'
import img5 from '../src/img/Vector (5).png'
import img6 from '../src/img/bi_window-stack.png'
import img7 from '../src/img/Vector (33).png'
import img8 from '../src/img/Vector (44).png'
import img9 from '../src/img/Vector (55).png'
import img10 from '../src/img/Vector (66).png'
import back2 from '../src/img/725.png';
import img11 from '../src/img/clarity_login-line.png';
import img12 from '../src/img/akar-icons_person-add.png'
import img13 from '../src/img/carbon_document-preliminary.png'
import img14 from '../src/img/mdi_file-document-edit-outline.png'

const hoverpost = () => {
    return (
        <div>
            <header>
            <div style={{ backgroundImage: `url(${back})` }} class="header">
                <div class="container">
                    <div class="nav">
                        <div class="logo">
                            <img src={logo} alt="" />
                        </div>

                        <div class="menu">
                            <ul>
                                <li><a href="#">Kirish</a></li>

                                <li>
                                    <select name="" id="">
                                        <option value="">Ru</option>
                                        <option value="">Uz</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="header_text">
                        <div class="text">
                            <h1>
                                NafCRM <br />
                                Biznesni boshqarish tizimi
                            </h1>
                            <p>
                                Yagona dasturda kompaniya ishini rejalashtirish,
                                tashkil etish va nazorat qilish
                            </p>
                            <button>
                                <a href="#">Boshlash</a>
                                <i class="fa fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div class="working_info">
            <div class="container">
                <div class="working_content">
                    <div class="top_content">
                        <div class="text">
                            <h1>U qanday ishlaydi?</h1>
                            <p>
                                CRM jarayonlarni avtomatlashtirish orqali
                                xaridor bilan samaraliroq muloqot o'rnatishga,
                                <br />
                                ishdagi xatolardan qochishga va natijada unga
                                ko'proq sotishga yordam beradi.
                            </p>
                        </div>
                    </div>

                    <div class="bottom_content">
                        <div class="block">
                            <div class="item">
                                <div class="img">
                                    <img src={img2} alt="" />
                                </div>

                                <div class="item_text">
                                    <img src={img3} alt="" />
                                    <p>
                                        Mijozlar uchun buxgalteriya hisobi
                                        (mijoz bazasi)
                                    </p>
                                </div>
                            </div>

                            <div class="item">
                                <div class="img">
                                    <img src={img2} alt="" />
                                </div>

                                <div class="item_text">
                                    <img src={img4} alt="" />
                                    <p>Xodimlarni boshqarish</p>
                                </div>
                            </div>

                            <div class="item">
                                <div class="img">
                                    <img src={img2} alt="" />
                                </div>

                                <div class="item_text">
                                    <img src={img5} alt="" />
                                    <p>Buxgalteriya hisobi va ombor hisobi</p>
                                </div>
                            </div>

                            <div class="item">
                                <div class="img">
                                    <img src={img2} alt="" />
                                </div>

                                <div class="item_text">
                                    <img src={img6} alt="" />
                                    <p>Sayt boshqaruvi</p>
                                </div>
                            </div>
                        </div>

                        <div class="block">
                            <div class="item">
                                <div class="img">
                                    <img src={img2} alt="" />
                                </div>

                                <div class="item_text">
                                    <img src={img7} alt="" />
                                    <p>Loyiha boshqaruvi</p>
                                </div>
                            </div>

                            <div class="item">
                                <div class="img">
                                    <img src={img2} alt="" />
                                </div>

                                <div class="item_text">
                                    <img src={img8} alt="" />
                                    <p>Hujjatlar oqimi</p>
                                </div>
                            </div>

                            <div class="item">
                                <div class="img">
                                    <img src={img2} alt="" />
                                </div>

                                <div class="item_text">
                                    <img src={img9} alt="" />
                                    <p>O'rnatilgan kommunikatsiyalar</p>
                                </div>
                            </div>

                            <div class="item">
                                <div class="img">
                                    <img src={img2} alt="" />
                                </div>

                                <div class="item_text">
                                    <img src={img10} alt="" />
                                    <p>Yakuniy tahlil</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style={{ backgroundImage: `url(${back2})` }} class="program">
            <div class="container">
                <div class="program_content">
                    <div class="program_title">
                        <h1>Dasturda ishlashning oddiy bosqichlari</h1>

                        <p>
                            Bu ketma ketliklarni bajarish orqali biznesingizni
                            yuqori darajada o’sishiga yordam bering
                        </p>
                    </div>

                    <div class="program_block">
                        <a href="#" class="program_item">
                            <div class="img">
                                <img src={img11} alt="" />
                            </div>

                            <div class="box">
                                <h1>01</h1>
                                <h2>Ro’yhatdan o’tish</h2>
                                <p>Dastur 7 kun davomida bepul bo'ladi</p>
                            </div>
                        </a>

                        <a href="#" class="program_item">
                            <div class="img">
                                <img
                                    src={img12}
                                    alt=""
                                />
                            </div>

                            <div class="box">
                                <h1>02</h1>
                                <h2>Xodimlarni qo'shing</h2>
                                <p>
                                    Ularning elektron pochta manzillarini
                                    ko'rsatgan holda
                                </p>
                            </div>
                        </a>

                        <a href="#" class="program_item">
                            <div class="img">
                                <img
                                    src={img13}
                                    alt=""
                                />
                            </div>

                            <div class="box">
                                <h1>03</h1>
                                <h2>Tizimga kiring</h2>
                                <p>
                                    Mijozlar, hujjatlar, loyihalar, buyurtmalar
                                    bilan ishlang
                                </p>
                            </div>
                        </a>

                        <a href="#" class="program_item">
                            <div class="img">
                                <img
                                    src={img14}
                                    alt=""
                                />
                            </div>

                            <div class="box">
                                <h1>04</h1>
                                <h2>Hisobotlarni tahlil qilish</h2>
                                <p>Kompaniya taraqqiyotini kuzatib boring</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="signup">
            <div class="container">
                <div class="sign_content">
                    <div class="title">
                        <h1>Bepul CRM uchun tez ro'yxatdan o'ting</h1>
                        <p>Bugunoq NafCRMdan foydalanishni boshlang</p>
                    </div>

                    <div class="sign_block">
                        <input id="input" type="text" placeholder="Name" />
                        <input id="input" type="email" placeholder="Email" />
                        <input id="input" type="number" placeholder="Phone" />
                        <input
                            id="input"
                            type="text"
                            placeholder="Company name"
                        />
                    </div>

                    <button onclick="btn()">Yuborish</button>
                </div>
            </div>
        </div>

        <footer>
            <div class="text">
                <p>
                    nafcrm.uz <br />
                    © 2022 NAF, made with passion in 🇺🇿
                </p>
            </div>
        </footer>
        </div>
    );
};


export default hoverpost;
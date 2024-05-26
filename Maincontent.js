// src/components/Maincontent.js

import React from 'react';
import Hero from "./Hero";
import Cardjurusan from "./Cardjurusan";
import Cardkegiatan from "./Cardkegiatan";
import kegiatan1 from "./../assets/pramukaa.png";
import kegiatan2 from "./../assets/kegiatan_futsal.jpg";
import kegiatan3 from "./../assets/bulu_tangkisa.jpg";


const Maincontent = () => {
    return (
        <div>
            <Hero />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Jurusan Sekolah</h1>
                    </div>
                    <div className="col-lg-4 col-6">
                        <Cardjurusan jurusan="Jurusan Multimedia" />
                    </div>
                    <div className="col-lg-4 col-6">
                        <Cardjurusan jurusan="Jurusan Teknik Komputer" />
                    </div>
                    <div className="col-lg-4 col-6">
                        <Cardjurusan jurusan="Jurusan Perkantoran" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Ekstrakurikuler</h1>
                    </div>
                    <div className="col-12">
                        <Cardkegiatan image={kegiatan1} description="Pendidikan kepramukaan merupakan kegiatan ekstrakurikuler yang wajib dilaksanakan di sekolah. Kegiatan dilaksanakan melalui gugus depan gerakan pramuka yang berpangkalan di sekolah MA Darul Ulum Nurdiniyyah Ciwidey Jawa Barat. Melalui pendidikan kepramukaan ini dapat dilakukan pembinaan ketaqwaan terhadap Tuhan Yang Maha Esa. Kehidupan berbangsa dan bernegara berlandaskan Pancasila, pendidikan pendahuluan bela Negara, kepribadian dan budi pekerti luhur, berorientasi, pendidikan kewiraswastaan, kesegaran jasmani dan daya kreasi, persepsi, apresiasi dan karya seni, tali temali, baris berbaris, sandi morse."/>
                    </div>
                    <div className="col-12">
                        <Cardkegiatan image={kegiatan2} description="Ekstrakurikuler futsal adalah kegiatan ekstrakurikuler di sekolah yang menawarkan kesempatan bagi siswa untuk belajar dan mengembangkan keterampilan dalam bermain futsal. Futsal adalah olahraga yang mirip dengan sepak bola, namun dimainkan dalam ruangan yang lebih kecil dan dengan jumlah pemain yang lebih sedikit. Kegiatan ekstrakurikuler futsal juga dapat memberikan manfaat bagi kesehatan mental siswa, seperti membantu mengurangi stres, meningkatkan rasa percaya diri, dan mengembangkan kemampuan pemecahan masalah. Selain itu, siswa yang berpartisipasi dalam ekstrakurikuler futsal juga dapat tampil dalam acara sekolah, turnamen futsal antar sekolah, atau bahkan kompetisi futsal tingkat daerah atau nasional."/>
                    </div>
                    <div className="col-12">
                        <Cardkegiatan image={kegiatan3} description="Ekstrakurikuler badminton ini adalah sebagai wadah untuk para siswa-siswi (MA) Madrasah Aliyah Darul 'Ulum Nurdiniyyah yang memiliki bakat dan potensi di bidang olahraga bulutangkis agar dapat mengembangkan kemampuan serta bakat yang dimiliki agar dapat terus berkembang. Dalam kegiatan ekskul kita tidak hanya mendapat materi tentang teknik-teknik dasar bulutangkis/cara bermain dengan baik dan benar. Akan tetapi, kita juga akan mendapat bermacam-macam latihan fisik yang akan membuat tubuh kita semakin kuat, diantaranya seperti; lari, skipping, push up, sit up, squat jump, dan sebagainya."/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Maincontent;

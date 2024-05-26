import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  const iconStyle = {
    fontSize: '30px', // Ubah ukuran ikon sesuai kebutuhan
  };

  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h4>Follow Me</h4>
            <div className="d-flex justify-content-center">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white mx-2"><FaFacebook style={iconStyle} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white mx-2"><FaTwitter style={iconStyle} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white mx-2"><FaInstagram style={iconStyle} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white mx-2"><FaLinkedin style={iconStyle} /></a>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <h4>Lokasi</h4>
            <p>Alamat: Jl. Makom Karomah Kabuyutan "Ciwidey" Rt03/01 Desa. Pasirjambu Kec. Pasirjambu Kabupaten Bandung 40972</p>
            {/* Tempat untuk menambahkan peta jika diperlukan */}
          </div>
          <div className="col-lg-4 mb-4 ml-auto">
            <h4>Kontak Sekolah</h4>
            <p>Email: madu2019@gmail.com</p>
            <p>Telepon: 0895365498656</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="text-center">Hak Cipta © {new Date().getFullYear()} Copyright © 2016-2024 MA Darul Ulum Ciwidey</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

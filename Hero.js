import { Carousel, CarouselItem } from "react-bootstrap";
import hero1 from './../assets/gapura.jpg';
import hero2 from './../assets/upacara.png';
import hero3 from './../assets/tampilan kelas.jpg';


const Hero = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero1}// 
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Gerbang Sekolah</h3>
          <p>Yayasan MA Darul Ulum Nurdiniyyah ini bertempat di Jl. Makom Karomah Kabuyutan "Ciwidey" Rt03/01 Desa. Pasirjambu Kec. Pasirjambu Kabupaten Bandung 40972</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero2} 
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Upacara Bendera Setiap Hari Senin</h3>
          <p>Setiap hari Senin, di setiap lembaga pendidikan terutama sekolah dilaksanakan kegiatan Upacara Bendera pada pagi hari sebelum Kegiatan Belajar Mengajar (KBM) dimulai. Termasuk di MA Darul Ulum Nurdiniyyah. Upacara Bendera sudah menjadi kegiatan rutin yang dilaksanakan setiap hari Senin.
          Upaca Bendera hari Senin mempunyai manfaat yang sangat baik bagi upaya penumbuhan budi pekerti dan karakter bangsa, terutama nilai-nilai kebangsaan dan kebhinekaan. Nilai-nilai tersebut terkandung di dalam setiap urutan kegiatan/tata upacara bendera. Nilai-nilai tersebut diantaranya adalah nilai kedisiplinan, kepemimpinan, kerja sama dan kekompakan, kekuatan fisik dan mental, patriotisme (kepahlawanan), dan lain sebagainya.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <CarouselItem><img
          className="d-block w-100"
          src={hero3} 
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Tampilan Kelas Untuk Belajar Siswa dan Siswi</h3>
          <p>Tampilan Kelas Sekolah Kami yang pasti nyaman,inspiratif, dan siap untuk menemani perjalanan belajar siswa-siswi kami setiap hari.</p>
        </Carousel.Caption>
        </CarouselItem>
    </Carousel>
  );
}

export default Hero;

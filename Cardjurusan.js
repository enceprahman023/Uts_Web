import React from 'react';
import { Card } from 'react-bootstrap';
import jurusan1 from "./../assets/Teknik_tkj.png";
import jurusan2 from "./../assets/bahasa_arab.png";
import jurusan3 from "./../assets/Perkantoran.jpg";

const JurusanCard = ({ jurusan, image }) => {
  return (
    <Card style={{ width: '10rem' }} className="m-3">
      <div className="image-container">
        <Card.Img variant="top" src={image} className="rounded-circle" />
      </div>
      <Card.Body>
        <Card.Title>{jurusan}</Card.Title>
      </Card.Body>
    </Card>
  );
};

const Jurusan = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <JurusanCard jurusan="Teknik TKJ" image={jurusan1} />
      <JurusanCard jurusan="Bahasa Arab" image={jurusan2} />
      <JurusanCard jurusan="Perkantoran" image={jurusan3} />
    </div>
  );
};

export default Jurusan;

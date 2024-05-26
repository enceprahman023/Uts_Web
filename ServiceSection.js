import React from 'react';
import { Card } from 'react-bootstrap';
import service1Image from '../assets/Perkantoran.jpg';
import service2Image from '../assets/kegiatan_futsal.jpg';
import service3Image from '../assets/upacara.png';

const ServiceSection = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 mb-4">
                    <Card className="bg-dark text-white rounded-0 border-0">
                        <Card.Img src={service1Image} alt="Service 1" />
                        <Card.ImgOverlay>
                            <Card.Title>Service 1</Card.Title>
                            <Card.Text>
                                This is a short description of Service 1.
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>
                <div className="col-lg-4 mb-4">
                    <Card className="bg-dark text-white rounded-0 border-0">
                        <Card.Img src={service2Image} alt="Service 2" />
                        <Card.ImgOverlay>
                            <Card.Title>Service 2</Card.Title>
                            <Card.Text>
                                This is a short description of Service 2.
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>
                <div className="col-lg-4 mb-4">
                    <Card className="bg-dark text-white rounded-0 border-0">
                        <Card.Img src={service3Image} alt="Service 3" />
                        <Card.ImgOverlay>
                            <Card.Title>Service 3</Card.Title>
                            <Card.Text>
                                This is a short description of Service 3.
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;

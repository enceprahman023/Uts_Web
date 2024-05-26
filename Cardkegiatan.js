import { Card } from "react-bootstrap";

const Cardkegiatan = (props) => {
    return (
        <Card>
            <Card.Img variant="top" src={props.image} style={{ width: '100%', maxHeight: '300px' }} />
            <Card.Body>
                <Card.Text>
                    {props.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Cardkegiatan;

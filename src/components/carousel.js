import React from "react";
import { Row, Col, Carousel } from 'react-materialize';
import '../App.css';
import tileData from '../assets/tileObject.js';

class CarouselComp extends React.Component {
    render() {
        let tileDiv =
            tileData.map(({ key, title, description, description2, image, link, builtWith, howTo, url }) => {
                return <div key={key}>
                            <div className="z-depth-5" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(' + image + ')', height: "100%", backgroundSize: "cover"}}>
                                <Row className='flow-text textStyle' style={{ paddingTop: '5vh', paddingLeft: "5px"}}>
                                    {title}
                                </Row>
                                 <Col s={12} style={{height: "70%", overflowY: "scroll"}} id="carouselText" className=' textStyle'>
                                    <Row className='textStyle'>{description2}</Row>
                                    <Row>{builtWith}</Row>
                                    <Row>{howTo}</Row>
                                </Col>
                                <Col s={12} style={{ height: "10%", textAlign: "center"}} className='textStyle'>
                                    <a target="_blank" rel="noopener noreferrer" href={url}>Visit site in new tab</a>
                                </Col>
                            </div>
                        </div>;
            });
        return (
            <Carousel options={{ fullWidth: true, indicators: true}}>
                {tileDiv}
            </Carousel>
        );
    }
}
export default CarouselComp;

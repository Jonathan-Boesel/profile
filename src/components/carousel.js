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
                                {/*<Row className='tileDescription textStyle' style={{textAlign: 'center'}}>
                                    {description2}
                                </Row>*/}
                            </div>
                        </div>;
            });
        return (
            <Carousel options={{ fullWidth: true, indicators: true}}>
                {tileDiv}
                {/*<div className="z-depth-5" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(' + tileData[0].image + ')', height: "100%", backgroundSize: "cover"}}>
                                <Row className='flow-text textStyle' style={{ paddingTop: '5vh', paddingLeft: "5px"}}>
                                    {tileData[0].title}
                                </Row>
                                    
                                <Row className='tileDescription textStyle' style={{textAlign: 'center'}}>
                                    {tileData[0].tileContent}
                                </Row>
                            </div>
                <div className="z-depth-5">
                    <Row>
                        <Col s={8} className='tileImageContainer'>
                            <Row className='tileImage z-depth-5' style= {{backgroundImage: 'url(' + tileData[0].image + ')', float: "left"}}>
                                <a />
                            </Row >
                        </Col>
                        <Col s={4}>
                            <Row className='flow-text' style={{textAlign: 'center', paddingTop: '5vh'}}>
                                {tileData[0].title}
                            </Row>
                            <Row className="carouselLink" style={{textAlign: "center", cursor: "pointer"}}>
                                {tileData[0].link}
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{paddingTop: "2vh"}}>
                        {tileData[0].description2}
                    </Row>
                </div>
                <div className="z-depth-5">
                    <Row>
                        <Col s={8} className='tileImageContainer'>
                            <Row className='tileImage z-depth-5' style= {{backgroundImage: 'url(' + tileData[1].image + ')', float: "left"}}>
                                <a />
                            </Row >
                        </Col>
                        <Col s={4}>
                            <Row className='flow-text' style={{textAlign: 'center', paddingTop: '5vh'}}>
                                {tileData[1].title}
                            </Row>
                            <Row className="carouselLink" style={{textAlign: "center", cursor: "pointer"}}>
                                {tileData[1].link}
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{paddingTop: "2vh"}}>
                        {tileData[1].description2}
                    </Row>
                </div>
                <div className="z-depth-5">
                    <Row>
                        <Col s={8} className='tileImageContainer'>
                            <Row className='tileImage z-depth-5' style= {{backgroundImage: 'url(' + tileData[2].image + ')', float: "left"}}>
                                <a />
                            </Row >
                        </Col>
                        <Col s={4}>
                            <Row className='flow-text' style={{textAlign: 'center', paddingTop: '5vh'}}>
                                {tileData[2].title}
                            </Row>
                            <Row className="carouselLink" style={{textAlign: "center", cursor: "pointer"}}>
                                {tileData[2].link}
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{paddingTop: "2vh"}}>
                        {tileData[2].description2}
                    </Row>
                </div>
                <div className="z-depth-5">
                    <Row>
                        <Col s={8} className='tileImageContainer'>
                            <Row className='tileImage z-depth-5' style= {{backgroundImage: 'url(' + tileData[3].image + ')', float: "left"}}>
                                <a />
                            </Row >
                        </Col>
                        <Col s={4}>
                            <Row className='flow-text' style={{textAlign: 'center', paddingTop: '5vh'}}>
                                {tileData[3].title}
                            </Row>
                            <Row className="carouselLink" style={{textAlign: "center", cursor: "pointer"}}>
                                {tileData[3].link}
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{paddingTop: "2vh"}}>
                        {tileData[3].description2}
                    </Row>
                </div>
                <div className="z-depth-5">
                    <Row>
                        <Col s={8} className='tileImageContainer'>
                            <Row className='tileImage z-depth-5' style= {{backgroundImage: 'url(' + tileData[4].image + ')', float: "left"}}>
                                <a />
                            </Row >
                        </Col>
                        <Col s={4}>
                            <Row className='flow-text' style={{textAlign: 'center', paddingTop: '5vh'}}>
                                {tileData[4].title}
                            </Row>
                            <Row className="carouselLink" style={{textAlign: "center", cursor: "pointer"}}>
                                {tileData[4].link}
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{paddingTop: "2vh"}}>
                        {tileData[4].description2}
                    </Row>
                </div>
                <div className="z-depth-5">
                    <Row>
                        <Col s={8} className='tileImageContainer'>
                            <Row className='tileImage z-depth-5' style= {{backgroundImage: 'url(' + tileData[5].image + ')', float: "left"}}>
                                <a />
                            </Row >
                        </Col>
                        <Col s={4}>
                            <Row className='flow-text' style={{textAlign: 'center', paddingTop: '5vh'}}>
                                {tileData[5].title}
                            </Row>
                            <Row className="carouselLink" style={{textAlign: "center", cursor: "pointer"}}>
                                {tileData[5].link}
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{paddingTop: "2vh"}}>
                        {tileData[5].description2}
                    </Row>
                </div>*/}
                
            </Carousel>
        );
    }
}
export default CarouselComp;

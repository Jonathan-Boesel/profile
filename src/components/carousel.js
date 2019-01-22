import React from "react";
import { Row, Col, Carousel } from 'react-materialize';
import '../App.css';
import tileData from '../assets/tileObject.js';

class CarouselComp extends React.Component {
    render() {
        // let tileDiv =
        //     tileData.map(({ key, title, description, description2, image, link }) => {
        //         return <div key={key}>
        //                     <Row>
        //                         <Col s={4} className='tileImageContainer'>
        //                             <Row className='tileImage z-depth-5' style= {{backgroundImage: 'url(' + image + ')', float: "left"}}>
        //                                 <a />
        //                             </Row >
        //                             <Row>
        //                                 {link}
        //                             </Row>
        //                         </Col>
        //                         <Col s={8}>
        //                             <Row className='flow-text' style={{textAlign: 'center', paddingTop: '5vh'}}>
        //                                 {title}
        //                             </Row>
        //                             <Row style={{float: "left"}}>
        //                                 <div>{description2}</div>
        //                             </Row>
        //                         </Col>
        //                     </Row>
        //                 </div>;
        //     });
        return (
            <Carousel options={{ fullWidth: true}}>
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
                </div>
                
            </Carousel>
        );
    }
}
export default CarouselComp;

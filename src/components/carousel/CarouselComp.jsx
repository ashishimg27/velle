import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselComp = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div style={{margin: "5px"}}>
            <Carousel 
            responsive={responsive}
            // showDots={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            >
                <div style={{margin: "0px 5px"}}>
                    <img src='https://images.bewakoof.com/uploads/grid/app/OOF-SALE-Common-1x1-1696507938.jpg' />
                </div>
                <div style={{margin: "0px 5px"}}>
                    <img src='https://images.bewakoof.com/uploads/grid/app/1x1-b3999-1696568385.jpg' />
                </div>
                <div style={{margin: "0px 5px"}}>
                    <img src='https://images.bewakoof.com/uploads/grid/app/OOF-Sale-1x1-Banner-1696508486.jpg' />
                </div>
                <div style={{margin: "0px 5px"}}>
                    <img src='https://images.bewakoof.com/uploads/grid/app/Coke-1x1-Common-1696347285.jpg' />
                </div>
                <div style={{margin: "0px 5px"}}>
                    <img src='https://images.bewakoof.com/uploads/grid/app/720x720-Banner-1696568173.jpg' />
                </div>
            </Carousel>
        </div>
    )
}

export default CarouselComp;
import React from 'react';
import { ContainerSlider, ListaSlider, MenuSlider} from '../styles/CarruselStyle';

const CarruselHome = () => {

    return(
        <div>
        <header>
                <ContainerSlider>
                    <ListaSlider>
                        <li id="slide1">
                            <img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1646319703/Demoday/slider4_e4cb4t.jpg" alt="img de aguacate"/>
                        </li>

                        <li id="slide2">
                            <img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1646319702/Demoday/slider2_ocj2uh.jpg" alt="img de aguacate"/>
                        </li>

                        <li id="slide3">
                            <img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1646319702/Demoday/slider3_xbl67b.jpg" alt="img de aguacate"/>
                        </li>

                        <li id="slide4">
                            <img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1646319703/Demoday/slider4_e4cb4t.jpg" alt="img de aguacate"/>
                        </li>
                    </ListaSlider>
                </ContainerSlider>

                <MenuSlider>
                    <li>
                        <a href="#slide1">1</a>
                    </li>

                    <li>
                    <a href="#slide2">2</a>
                    </li>

                    <li>
                    <a href="#slide3">3</a>
                    </li>

                    <li>
                    <a href="#slide4">4</a>
                    </li>
                </MenuSlider>
        </header>
    </div>
    )
}

export default CarruselHome
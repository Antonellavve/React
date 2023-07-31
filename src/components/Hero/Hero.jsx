import React from 'react'
import { HeroContainer, HeroImg } from './HeroStyles'
import Button from '../Button/Button'

const Hero = () => {
    return (
        <>
        <HeroContainer>
            <h1>AKIKA</h1>
            {/* <Button radius='15'>
                Ver Mas
            </Button> */}
        </HeroContainer>
        <HeroImg>
            <img src="./src/assets/img.hero.png" alt="ImgHero" />
        </HeroImg>
        </>
    )
}

export default Hero

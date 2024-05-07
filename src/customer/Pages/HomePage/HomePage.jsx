import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCarasol/HomeSectionCarosel'
import { mens_kurta } from '../../Data/mens_kurta'
import { mensShoesPage1 } from '../../Data/Women/shoes'
import { lengha_page1 } from '../../Data/Women/LenghaCholi'
import { sareePage1 } from '../../Data/Saree/page1'
import { dressPage1 } from '../../Data/dress/page1'
import { gounsPage1 } from '../../Data/Gouns/gouns'
import { kurtaPage1 } from '../../Data/Kurta/kurta'

const HomePage = () => {
    return (
        <div>
            <MainCarosel />
            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"} />
                <HomeSectionCarosel data={mensShoesPage1} sectionName={"Men's Shoes"}/>
                <HomeSectionCarosel data={lengha_page1} sectionName={"Lengha Choli"}/>
                <HomeSectionCarosel data={sareePage1} sectionName={"Saree"}/>
                <HomeSectionCarosel data={dressPage1} sectionName={"Dress"} />
                <HomeSectionCarosel data={gounsPage1} sectionName={"Women's Gouns"} />
                <HomeSectionCarosel data={kurtaPage1} sectionName={"Women's Kurtas"} />
            </div>
        </div>
    )
}

export default HomePage
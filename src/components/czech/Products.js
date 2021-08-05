import React from 'react'
import ProductCard from "./ProductCard";
import './css/Products.css'


//image imports
import satchel from '../../assets/satchelbag.jpg'
import belt from '../../assets/belt.jpg'
import handbag from '../../assets/handbag.jpg'
import wallet from '../../assets/wallet.jpg'
import backpack from '../../assets/backpack.jpeg'
import clutchbag from '../../assets/clutchbag.jpg'
import luggagebag from '../../assets/luggagebag.jpg'
import phonecase from '../../assets/phonecase.jpg'


const Products = () => {
    return(
        <div className='products'>
            <div className='heading'>Produkty</div>
            <div className='products-container'>
                <ProductCard image={satchel} header='Brašny' className='product-card'/>
                <ProductCard image={belt} header='Pásy' className='product-card'/>
                <ProductCard image={handbag} header='Ruční tašky' className='product-card'/>
                <ProductCard image={wallet} header='Peněženky' className='product-card'/>
                <ProductCard image={backpack} header='Batohy' className='product-card'/>
                <ProductCard image={clutchbag} header='Spojkové tašky' className='product-card'/>
                <ProductCard image={luggagebag} header='Tašky na zavazadla'className='product-card'/>
                <ProductCard image={phonecase} header='Pouzdra na telefony' className='product-card'/>
            </div>
        </div>
    )
}

export default Products
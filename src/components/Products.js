import React from 'react'
import ProductCard from "./ProductCard";
import './css/Products.css'


//image imports
import shoes from '../assets/shoes.jpg'
import belt from '../assets/belt.jpg'
import handbag from '../assets/handbag.jpg'
import wallet from '../assets/wallet.jpg'
import backpack from '../assets/backpack.jpeg'
import clutchbag from '../assets/clutchbag.jpg'
import luggagebag from '../assets/luggagebag.jpg'
import phonecase from '../assets/phonecase.jpg'


const Products = () => {
    return(
        <div className='products'>
            <div className='heading'>Products</div>
            <div className='products-container'>
                <ProductCard image={shoes} header='Shoes' className='product-card'/>
                <ProductCard image={belt} header='Belts' className='product-card'/>
                <ProductCard image={handbag} header='Hand Bags' className='product-card'/>
                <ProductCard image={wallet} header='Wallets' className='product-card'/>
                <ProductCard image={backpack} header='Backpacks' className='product-card'/>
                <ProductCard image={clutchbag} header='Clutch Bags' className='product-card'/>
                <ProductCard image={luggagebag} header='Luggage Bags'className='product-card'/>
                <ProductCard image={phonecase} header='Phone Cases' className='product-card'/>
            </div>
        </div>
    )
}

export default Products
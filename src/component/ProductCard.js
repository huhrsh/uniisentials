import React from 'react';
import Rating from '@mui/material/Rating'; 
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {

    const navigate = useNavigate();

    function handleClick(id){
        navigate('/product');
    }

    const discountPercentage = Math.round(((product.price - product.discountedPrice) / product.price) * 100);

    return (
        <div onClick={()=>{handleClick(1)}} className="bg-white border shadow-md w-full cursor-pointer rounded-br-none rounded-bl-none">
            <div className="relative overflow-hidden border-b">
                <img src={product.image} alt={product.title} className="w-full aspect-square object-cover rounded-md rounded-br-none rounded-bl-none hover:scale-110 transition-all duration-300" />
            </div>

            <div className='px-3 py-1.5 pb-3'>
                <h3 className="text-lg font-semibold">{product.title}</h3>

                <div className="flex items-center space-x-2">
                    <span className="text-lg font-semibold text-neutral-700">₹{product.discountedPrice}</span>
                    <span className="text-sm text-gray-500 line-through">₹{product.price}</span>
                    <span className="text-[15px] text-sky-600 font-medium">{discountPercentage}% off</span>
                </div>

                <div className="flex items-end space-x-1 mt-2">
                    <Rating 
                        name="product-rating" 
                        value={product.rating} 
                        precision={0.1} 
                        readOnly 
                        style={{ fontSize: '24px', color: '#FFA41C' }} 
                    />
                    <span className="text-[15px] text-gray-500">({product.numReviews} reviews)</span>
                </div>
            </div>
        </div>
    );
}

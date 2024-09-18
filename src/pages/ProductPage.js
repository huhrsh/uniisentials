import React, { useState } from 'react';
import { Rating } from '@mui/material'; // Material UI Rating
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper JS for image slider
import 'swiper/css';
import 'swiper/css/navigation'; // Import additional Swiper modules
import 'swiper/css/scrollbar'; // Swiper Scrollbar
import dummyImage1 from '../assets/images/404 error lost in space-cuate.png';
import dummyImage2 from '../assets/images/user.png';
import dummyImage3 from '../assets/images/heart (1).png';
import dummyImage4 from '../assets/images/shopping-cart.png';

// Dummy user state (to simulate login status)
const isLoggedIn = false;

export default function ProductPage() {
    // State for selected image and user input for reviews
    const [selectedImage, setSelectedImage] = useState('');
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    // Dummy product data
    const product = {
        title: "Wireless Bluetooth Headphones",
        price: 4999,
        discountedPrice: 2999,
        discountPercentage: Math.round(((4999 - 2999) / 4999) * 100),
        description: "High-quality wireless Bluetooth headphones with noise cancellation.",
        rating: 4.5,
        numReviews: 1500,
        images: [
            dummyImage1,
            dummyImage2,
            dummyImage3,
            dummyImage4
        ],
        reviews: [
            { name: "John Doe", rating: 5, text: "Amazing product!" },
            { name: "Jane Doe", rating: 4, text: "Good value for money." }
        ]
    };

    // Set default image
    if (!selectedImage && product.images.length > 0) {
        setSelectedImage(product.images[0]);
    }

    // Handle review submission (in this case, just logs data)
    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            name: isLoggedIn ? "Logged-in User" : name,
            email: isLoggedIn ? "" : email,
            rating,
            text: review
        };
        console.log(newReview); // You'd typically send this to a server
    };

    return (
        <div className="w-screen p-4 flex flex-col items-center">
            <div className="flex w-full justify-between">
                {/* Vertical Image List with Swiper */}
                <div className="w-1/5">
                    <Swiper 
                        direction="vertical" 
                        slidesPerView={3} 
                        spaceBetween={10} 
                        style={{ height: '400px' }} // Set a fixed height for the Swiper container
                    >
                        {product.images.map((img, index) => (
                            <SwiperSlide key={index} onClick={() => setSelectedImage(img)}>
                                <img src={img} alt={`Product Image ${index}`} className="cursor-pointer w-full object-cover h-32" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Selected Image */}
                <div className="w-2/5">
                    <img src={selectedImage} alt="Selected Product" className="w-full object-cover h-96" />
                </div>

                {/* Product Details */}
                <div className="w-2/5 flex flex-col space-y-3">
                    <h2 className="text-3xl font-semibold">{product.title}</h2>
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-neutral-700">₹{product.discountedPrice}</span>
                        <span className="text-base text-gray-500 line-through">₹{product.price}</span>
                        <span className="text-sm text-green-600 font-semibold">{product.discountPercentage}% off</span>
                    </div>
                    <p>{product.description}</p>

                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                        <Rating name="read-only" value={product.rating} precision={0.1} readOnly />
                        <span className="text-sm text-gray-500">({product.numReviews} reviews)</span>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-10 w-full">
                <h3 className="text-2xl font-semibold mb-4">Customer Reviews</h3>

                {/* Review List */}
                <div className="space-y-4">
                    {product.reviews.map((review, index) => (
                        <div key={index} className="border p-3 rounded-lg">
                            <div className="flex items-center space-x-2">
                                <Rating name="read-only" value={review.rating} precision={0.1} readOnly />
                                <span className="font-semibold">{review.name}</span>
                            </div>
                            <p>{review.text}</p>
                        </div>
                    ))}
                </div>

                {/* Add Review Form */}
                <div className="mt-8">
                    <h4 className="text-xl font-semibold">Add a Review</h4>
                    <form onSubmit={handleReviewSubmit} className="space-y-4 mt-4">
                        {!isLoggedIn && (
                            <>
                                <input 
                                    type="text" 
                                    placeholder="Your Name" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    className="border w-full p-2 rounded-lg"
                                    required 
                                />
                                <input 
                                    type="email" 
                                    placeholder="Your Email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    className="border w-full p-2 rounded-lg"
                                    required 
                                />
                            </>
                        )}
                        <Rating 
                            name="user-rating" 
                            value={rating} 
                            precision={0.1} 
                            onChange={(e, newValue) => setRating(newValue)} 
                        />
                        <textarea 
                            placeholder="Write your review (optional)" 
                            value={review} 
                            onChange={(e) => setReview(e.target.value)} 
                            className="border w-full p-2 rounded-lg"
                        />
                        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg">Submit Review</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

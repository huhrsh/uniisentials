import ProductCard from "./ProductCard"
import product from "../assets/images/404 error lost in space-cuate.png"

export default function HomePage(){

    const productList = [
        {
            title: "Wireless Bluetooth Headphones",
            price: 49.99,
            discountedPrice: 29.99,
            rating: 4.1,
            numReviews: 1500,
            image: product
        },
        {
            title: "Wireless Bluetooth Headphones",
            price: 49.99,
            discountedPrice: 29.99,
            rating: 4.2,
            numReviews: 1500,
            image: product
        },
        {
            title: "Wireless Bluetooth Headphones",
            price: 49.99,
            discountedPrice: 29.99,
            rating: 4.3,
            numReviews: 1500,
            image: product
        },
        {
            title: "Wireless Bluetooth Headphones",
            price: 49.99,
            discountedPrice: 29.99,
            rating: 4.4,
            numReviews: 1500,
            image: product
        },
        {
            title: "Wireless Bluetooth Headphones",
            price: 49.99,
            discountedPrice: 29.99,
            rating: 4.5,
            numReviews: 1500,
            image: product
        }
    ]

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-12 py-6">
            {productList.map((product, index) => (
                <ProductCard product={product} key={index} />
            ))}
        </div>
    )
}
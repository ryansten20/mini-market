import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "./FeaturedItems.css";

export default function FeaturedItems({ title = "Featured Items", products }) {
    const navigate = useNavigate();
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Use provided products - component now requires products prop
    const displayProducts = products || [];

    // Don't render if no products are provided
    if (!products || products.length === 0) {
        return null;
    }

    const handleAddToCart = (productId) => {
        console.log(`Added product ${productId} to cart`);
        // TODO: Implement actual cart functionality
    };

    const handleImageClick = (productId) => {
        // Find the product data from the products array
        const product = displayProducts.find(p => p.id === productId);
        
        if (product) {
            // Store product data in localStorage
            localStorage.setItem(`product_${productId}`, JSON.stringify(product));
        }
        
        navigate(`/products/${productId}`);
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -264, // Width of one card (300px) + gap (16px)
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 264, // Width of one card (300px) + gap (16px)
                behavior: 'smooth'
            });
        }
    };

    const checkScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    return (
        <div className="featured-items">
            <div className="title">
                <h3 className="font-bold">{title}</h3>
            </div>

            {/* Carousel Container with Overlay Arrows */}
            <div className="items-container relative">
                <div 
                    ref={scrollContainerRef}
                    className="flex gap-4 overflow-x-auto custom-scrollbar"
                    onScroll={checkScrollButtons}
                >
                    {displayProducts.map((product) => (
                        <div key={product.id}>
                            <div>
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="product-image cursor-pointer"
                                    onClick={() => handleImageClick(product.id)}
                                />
                            </div>
                            
                            <div>
                                <div className="flex justify-between mb-3">
                                    <span>${product.price}</span>
                                    <div className="flex">
                                        <span>(4.8)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Left Arrow - Positioned to the left */}
                <button
                    onClick={scrollLeft}
                    disabled={!canScrollLeft}
                    className={`arrow-left ${
                        canScrollLeft 
                            ? 'cursor-pointer' 
                            : 'cursor-not-allowed'
                    }`}
                >
                    <i className="bi bi-chevron-left arrow-icon"></i>
                </button>

                {/* Right Arrow - Positioned to the right */}
                <button
                    onClick={scrollRight}
                    disabled={!canScrollRight}
                    className={`arrow-right ${
                        canScrollRight 
                            ? 'cursor-pointer' 
                            : 'cursor-not-allowed'
                    }`}
                >
                    <i className="bi bi-chevron-right arrow-icon"></i>
                </button>
            </div>
        </div>
    );
}

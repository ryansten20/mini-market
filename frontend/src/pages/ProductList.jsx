import { useParams, useNavigate } from "react-router-dom";
import BootstrapStarRating from "../components/BootstrapStarRating";
import "./ProductList.css";

export default function ProductList() {
    const { category } = useParams();
    const navigate = useNavigate();

    // Get products from localStorage
    const getCategoryProducts = () => {
        try {
            const storedProducts = localStorage.getItem(`category_${encodeURIComponent(category)}`);
            return storedProducts ? JSON.parse(storedProducts) : [];
        } catch (error) {
            console.error('Error parsing category products from localStorage:', error);
            return [];
        }
    };

    const categoryProducts = getCategoryProducts();

    const handleImageClick = (productId) => {
        // Find the product data from the products array
        const product = categoryProducts.find(p => p.id === productId);
        
        if (product) {
            // Store product data in localStorage
            localStorage.setItem(`product_${productId}`, JSON.stringify(product));
        }
        
        navigate(`/products/${productId}`);
    };

    const handleAddToCart = (productId) => {
        console.log(`Added product ${productId} to cart`);
    };

    return (
        <div className="product-list-container">
            <div className="product-list-header">
                <h1 className="product-list-title">
                    {category ? `Products in ${category}` : 'All Products'}
                </h1>
            </div>
            
            {categoryProducts.length === 0 ? (
                <div className="no-products">
                    <p>No products found in the "{category}" category.</p>
                </div>
            ) : (
                <div className="products-grid">
                    {categoryProducts.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-image-container">
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="product-image-list"
                                    onClick={() => handleImageClick(product.id)}
                                />
                            </div>
                            
                            <div className="product-info">
                                <h3 className="product-name">{product.name}</h3>
                                <div className="product-rating">
                                    <BootstrapStarRating rating={product.rating || 4.2} size="16px" />
                                    <span className="rating-text-list">({product.rating || 4.2})</span>
                                </div>
                                <div className="product-price">
                                    <span className="price">${product.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

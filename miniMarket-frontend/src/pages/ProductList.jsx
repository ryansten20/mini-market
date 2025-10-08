import { useParams, useNavigate } from "react-router-dom";
import BootstrapStarRating from "../components/BootstrapStarRating";
import "./ProductList.css";

export default function ProductList() {
    const { category, query } = useParams();
    const navigate = useNavigate();

    // Determine if this is a search or category view
    const isSearch = window.location.pathname.startsWith('/search/');
    const searchQuery = isSearch ? decodeURIComponent(query) : null;

    // Get all products from localStorage
    const getAllProducts = () => {
        try {
            const storedProducts = localStorage.getItem('allProducts');
            return storedProducts ? JSON.parse(storedProducts) : [];
        } catch (error) {
            console.error('Error parsing all products from localStorage:', error);
            return [];
        }
    };

    // Get products by category from localStorage
    const getCategoryProducts = () => {
        try {
            const storedProducts = localStorage.getItem(`category_${encodeURIComponent(category)}`);
            return storedProducts ? JSON.parse(storedProducts) : [];
        } catch (error) {
            console.error('Error parsing category products from localStorage:', error);
            return [];
        }
    };

    // Search function to filter products
    const searchProducts = (products, searchTerm) => {
        if (!searchTerm) return products;
        
        const term = searchTerm.toLowerCase();
        return products.filter(product => 
            product.name.toLowerCase().includes(term) ||
            product.description.toLowerCase().includes(term) ||
            product.category.toLowerCase().includes(term)
        );
    };

    // Get the appropriate products based on the route
    const getProducts = () => {
        if (isSearch) {
            const allProducts = getAllProducts();
            return searchProducts(allProducts, searchQuery);
        } else {
            return getCategoryProducts();
        }
    };

    const products = getProducts();

    const handleImageClick = (productId) => {
        // Find the product data from the products array
        const product = products.find(p => p.id === productId);
        
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
                    {isSearch ? `Search results for "${searchQuery}"` : `Products in ${category}`}
                </h1>
            </div>
            
            {products.length === 0 ? (
                <div className="no-products">
                    <p>{isSearch ? `No products found for "${searchQuery}"` : `No products found in the "${category}" category.`}</p>
                </div>
            ) : (
                <div className="products-grid">
                    {products.map((product) => (
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

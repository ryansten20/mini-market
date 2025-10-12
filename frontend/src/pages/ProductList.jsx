import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BootstrapStarRating from "../components/BootstrapStarRating";
import { useProducts } from "../context/ProductContext";
import "./ProductList.css";

export default function ProductList() {
    const { category, query } = useParams();
    const navigate = useNavigate();
    
    const { 
        fetchProductsByCategory, 
        searchProducts: apiSearchProducts,
        loading,
        error 
    } = useProducts();

    const [products, setProducts] = useState([]);
    const [localLoading, setLocalLoading] = useState(true);

    // Determine if this is a search or category view
    const isSearch = window.location.pathname.startsWith('/search/');
    const searchQuery = isSearch ? decodeURIComponent(query) : null;

    // Map display category names to internal category names
    const getCategoryName = (displayName) => {
        const categoryMap = {
            'Games': 'gaming',
            'Tools': 'outdoor',
            'Audio': 'electronics',
            'Kitchen': 'kitchen',
            'Vinyl Records': 'music',
            'Movies': 'movies',
            'Shoes': 'clothing',
            'Winter Clothing': 'clothing',
            'Autum Clothing': 'clothing',
            'Seasonal and Holiday': 'seasonal',
            'Arts & Crafts': 'arts',
            'Gym & Fitness': 'fitness'
        };
        
        return categoryMap[displayName] || displayName?.toLowerCase();
    };

    // Fetch products when component mounts or params change
    useEffect(() => {
        const loadProducts = async () => {
            setLocalLoading(true);
            try {
                if (isSearch && searchQuery) {
                    // Fetch search results
                    const results = await apiSearchProducts(searchQuery);
                    setProducts(results || []);
                } else if (category) {
                    // Map display name to internal category name
                    const internalCategory = getCategoryName(category);
                    
                    // Fetch products by category
                    const results = await fetchProductsByCategory(internalCategory);
                    setProducts(results || []);
                }
            } catch (err) {
                console.error("Error loading products:", err);
                setProducts([]);
            } finally {
                setLocalLoading(false);
            }
        };

        loadProducts();
    }, [category, searchQuery, isSearch, fetchProductsByCategory, apiSearchProducts]);

    const handleImageClick = (productId) => {
        navigate(`/products/${productId}`);
    };

    // Show loading state
    if (localLoading) {
        return (
            <div className="product-list-container">
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                        <p className="mt-4 text-gray-600">Loading products...</p>
                    </div>
                </div>
            </div>
        );
    }

    // Show error state
    if (error) {
        return (
            <div className="product-list-container">
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center">
                        <p className="text-red-600 mb-4">Error loading products: {error}</p>
                        <button 
                            onClick={() => window.location.reload()} 
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Retry
                        </button>
                    </div>
                </div>
            </div>
        );
    }

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

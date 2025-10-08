import { useNavigate } from "react-router-dom";
import "./CategorySection.css";

export default function CategorySection({ title, images, captions = [], description = "", productIds = [], allProducts = [] }) {
    const navigate = useNavigate();
    
    // If only one image is provided, use it for all 4 slots
    const imageArray = Array.isArray(images) ? images : [images, images, images, images];
    
    // Default captions if none provided
    const defaultCaptions = ["Item 1", "Item 2", "Item 3", "Item 4"];
    const captionArray = captions.length > 0 ? captions : defaultCaptions;
    
    // Default product IDs if none provided (using placeholder IDs)
    const defaultProductIds = [1, 2, 3, 4];
    const productIdArray = productIds.length > 0 ? productIds : defaultProductIds;
    
    const handleImageClick = (productId) => {
        // Find the product data from the allProducts array
        const product = allProducts.find(p => p.id === productId);
        
        if (product) {
            // Store product data in localStorage
            localStorage.setItem(`product_${productId}`, JSON.stringify(product));
        }
        
        navigate(`/products/${productId}`);
    };

    const handleCategoryClick = () => {
        // Filter products by category and store in localStorage
        const categoryProducts = allProducts.filter(product => {
            // Map display category names to internal category names
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
            
            const internalCategory = categoryMap[title] || title?.toLowerCase();
            return product.category === internalCategory;
        });
        
        // Store filtered products in localStorage
        localStorage.setItem(`category_${encodeURIComponent(title)}`, JSON.stringify(categoryProducts));
        
        // Navigate to ProductList page with category name as parameter
        navigate(`/category/${encodeURIComponent(title)}`);
    };
    
    return (
        <div className="category-section">
            <div className="category-title">
                <h3 className="font-bold">{title}</h3>
            </div>
            <div className="category-container">
                <div className="category-images-grid">
                    {imageArray.slice(0, 4).map((img, index) => (
                        <div key={index} className="category-image-item">
                            <button 
                                className="category-image-button"
                                onClick={() => handleImageClick(productIdArray[index])}
                            >
                                <img 
                                    src={img} 
                                    alt={`${title} ${index + 1}`}
                                    className="category-image-small"
                                />
                            </button>
                            <p className="category-image-caption">{captionArray[index] || `Item ${index + 1}`}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="category-button-container">
                <button className="category-button" onClick={handleCategoryClick}>Shop {title}</button>
            </div>
        </div>
    );
}

import FeaturedItems from '../components/FeaturedItems';
import CategorySection from '../components/CategorySection';
import { useEffect, useState } from 'react';
import { useProducts } from '../context/ProductContext';

export default function Home() {
    const { 
        allProducts: contextAllProducts, 
        featuredProducts: contextFeaturedProducts,
        loading,
        error 
    } = useProducts();

    const [localFeaturedItems, setLocalFeaturedItems] = useState([]);
    const [categoryProducts, setCategoryProducts] = useState({
        electronics: [],
        gaming: [],
        kitchen: [],
        outdoor: [],
        clothing: [],
        music: [],
        movies: [],
        seasonal: [],
        arts: [],
        fitness: [],
    });

    // Fetch products on mount
    useEffect(() => {
        // Use featured products from context
        if (contextFeaturedProducts && contextFeaturedProducts.length > 0) {
            setLocalFeaturedItems(contextFeaturedProducts);
        }
    }, [contextFeaturedProducts]);

    // Organize products by category
    useEffect(() => {
        if (contextAllProducts && contextAllProducts.length > 0) {
            const organizedProducts = {
                electronics: contextAllProducts.filter(p => p.category === 'electronics'),
                gaming: contextAllProducts.filter(p => p.category === 'gaming'),
                kitchen: contextAllProducts.filter(p => p.category === 'kitchen'),
                outdoor: contextAllProducts.filter(p => p.category === 'outdoor'),
                clothing: contextAllProducts.filter(p => p.category === 'clothing'),
                music: contextAllProducts.filter(p => p.category === 'music'),
                movies: contextAllProducts.filter(p => p.category === 'movies'),
                seasonal: contextAllProducts.filter(p => p.category === 'seasonal'),
                arts: contextAllProducts.filter(p => p.category === 'arts'),
                fitness: contextAllProducts.filter(p => p.category === 'fitness'),
            };
            setCategoryProducts(organizedProducts);
        }
    }, [contextAllProducts]);

    // Helper function to get specific products by IDs (for curated homepage)
    const getProductsByIds = (ids) => {
        return contextAllProducts.filter(product => ids.includes(product.id));
    };

    // Loading state
    if (loading && contextAllProducts.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading products...</p>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
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
        );
    }

    // Curated products for homepage sections (using category + specific IDs for best presentation)
    // First row
    const gamesProducts = getProductsByIds([11, 36, 37, 38]); // Battlefield, Elden Ring, Halo, Minecraft
    const toolsProducts = getProductsByIds([40, 26, 41, 33]); // Pickaxe, Shovel, Drill, Hoe
    const audioProducts = getProductsByIds([1, 7, 44, 10]); // Headphones, JBL, Klipsch, Galaxy Buds
    const kitchenCategoryProducts = getProductsByIds([46, 20, 47, 23]); // Stand Mixer, Air Fryer, Microwave, Espresso
    
    // Second row
    const vinylProducts = getProductsByIds([50, 51, 52, 53]); // Record Player, Green Day, Brush, Stylus
    const moviesProducts = getProductsByIds([54, 55, 56, 57]); // Star Wars, Interstellar, Hot Fuzz, Hellraiser
    const shoesProducts = getProductsByIds([35, 58, 59, 60]); // Vans, Converse, Nike, Adidas
    const winterClothingProducts = getProductsByIds([34, 62, 63, 64]); // Carhartt Jacket, Snow Pants, Gloves, Boots
    
    // Third row
    const autumnClothingProducts = getProductsByIds([66, 67, 68, 69]); // Flannel, Sweater, Crewneck, Scarf
    const seasonalProducts = getProductsByIds([70, 71, 72, 73]); // Skeleton, Pumpkin, Leaves, Candles
    const artsProducts = getProductsByIds([74, 75, 76, 77]); // Airbrush, Brushes, Yarn, Palette
    const fitnessProducts = getProductsByIds([78, 79, 80, 81]); // Dumbbells, Yoga Mat, Protein, Exercise Ball

    return (
        <div className="min-h-screen bg-gray-50">
            <FeaturedItems title="Featured Items" products={localFeaturedItems} />
         
            {/* First Row of Category Sections */}
            <div className="p-4">
                <div className="categories-grid">
                    <CategorySection 
                        title="Games" 
                        images={gamesProducts.map(p => p.image)}
                        captions={gamesProducts.map(p => p.name)}
                        description="Epic games for all platforms"
                        productIds={gamesProducts.map(p => p.id)}
                        allProducts={contextAllProducts}
                    />
                    <CategorySection 
                        title="Tools" 
                        images={toolsProducts.map(p => p.image)}
                        captions={toolsProducts.map(p => p.name)}
                        description="Essential tools for work and home"
                        productIds={toolsProducts.map(p => p.id)}
                        allProducts={contextAllProducts}
                    />
                    <CategorySection 
                        title="Audio" 
                        images={audioProducts.map(p => p.image)}
                        captions={audioProducts.map(p => p.name)}
                        description="Premium audio equipment"
                        productIds={audioProducts.map(p => p.id)}
                        allProducts={contextAllProducts}
                    />
                    <CategorySection 
                        title="Kitchen" 
                        images={kitchenCategoryProducts.map(p => p.image)}
                        captions={kitchenCategoryProducts.map(p => p.name)}
                        description="Modern kitchen appliances"
                        productIds={kitchenCategoryProducts.map(p => p.id)}
                        allProducts={contextAllProducts}
                    />
                </div>
            </div>

            {/* Featured Horizontal Scrolling Sections */}
            <FeaturedItems title="Gaming" products={categoryProducts.gaming} />
            <FeaturedItems title="Kitchen & Home" products={categoryProducts.kitchen} />
            
            {/* Second Row of Category Sections */}
            <div className="p-4">
                <div className="categories-grid">
                    <CategorySection 
                        title="Vinyl Records" 
                        images={vinylProducts.map(p => p.image)}
                        captions={vinylProducts.map(p => p.name)}
                        description="Vinyl records and accessories"
                        productIds={vinylProducts.map(p => p.id)}
                        allProducts={contextAllProducts}
                    />
                    <CategorySection 
                        title="Movies" 
                        images={moviesProducts.map(p => p.image)}
                        captions={moviesProducts.map(p => p.name)}
                        description="Classic and modern films"
                        productIds={moviesProducts.map(p => p.id)}
                        allProducts={contextAllProducts}
                    />
                    <CategorySection 
                        title="Shoes" 
                        images={shoesProducts.map(p => p.image)}
                        captions={shoesProducts.map(p => p.name)}
                        description="Footwear for every style"
                        productIds={shoesProducts.map(p => p.id)}
                        allProducts={contextAllProducts}
                    />
                    <CategorySection 
                        title="Winter Clothing" 
                        images={winterClothingProducts.map(p => p.image)}
                        captions={winterClothingProducts.map(p => p.name)}
                        description="Stay warm in style"
                        productIds={winterClothingProducts.map(p => p.id)}
                        allProducts={contextAllProducts}
                    />
                </div>
            </div>

            {/* Outdoor & Gardening Featured Section */}
            <FeaturedItems title="Outdoor & Gardening" products={categoryProducts.outdoor} />
            
            {/* Third Row of Category Sections */}
            <div className="p-4">
                <div className="categories-grid">
                    <CategorySection 
                        title="Autumn Clothing" 
                        images={autumnClothingProducts.map(p => p.image)}
                        captions={autumnClothingProducts.map(p => p.name)}
                        description="Cozy autumn fashion"
                        productIds={autumnClothingProducts.map(p => p.id)}
                        allProducts={contextAllProducts}
                    />
                    <CategorySection 
                        title="Seasonal and Holiday" 
                        images={seasonalProducts.map(p => p.image)}
                        captions={seasonalProducts.map(p => p.name)}
                        description="Festive decorations"
                        productIds={seasonalProducts.map(p => p.id)}
                        allProducts={contextAllProducts}
                    />
                    <CategorySection 
                        title="Arts & Crafts" 
                        images={artsProducts.map(p => p.image)}
                        captions={artsProducts.map(p => p.name)}
                        description="Creative supplies"
                        productIds={artsProducts.map(p => p.id)}
                        allProducts={contextAllProducts}
                    />
                    <CategorySection 
                        title="Gym & Fitness" 
                        images={fitnessProducts.map(p => p.image)}
                        captions={fitnessProducts.map(p => p.name)}
                        description="Workout essentials"
                        productIds={fitnessProducts.map(p => p.id)}
                        allProducts={contextAllProducts}
                    />
                </div>
            </div>
            
            {/* Electronics Featured Section */}
            <FeaturedItems title="Electronics" products={categoryProducts.electronics} />
        </div>
    );
}

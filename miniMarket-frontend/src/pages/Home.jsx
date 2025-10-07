import FeaturedItems from '../components/FeaturedItems';
import CategorySection from '../components/CategorySection';

export default function Home() {
    // Unified product database - all products in one place
    const allProducts = [
        // Electronics (1-10)
        {
            id: 1,
            name: "Wireless Headphones",
            price: 99.99,
            image: "/src/assets/headphones.jpg",
            description: "High-quality wireless headphones with noise cancellation",
            category: "electronics"
        },
        {
            id: 2,
            name: "iPad",
            price: 329.99,
            image: "/src/assets/ipad.jpg",
            description: "iPad",
            category: "electronics"
        },
        {
            id: 3,
            name: "PlayStation 5",
            price: 499.99,
            image: "/src/assets/ps5.jpg",
            description: "PlayStation 5",
            category: "electronics"
        },
        {
            id: 4,
            name: "Drone",
            price: 299.99,
            image: "/src/assets/drone.jpg",
            description: "Drone",
            category: "electronics"
        },
        {
            id: 5,
            name: "Laptop",
            price: 899.99,
            image: "/src/assets/laptop.jpg",
            description: "Laptop",
            category: "electronics"
        },
        {
            id: 6,
            name: "Smartwatch",
            price: 199.99,
            image: "/src/assets/watch.jpg",
            description: "Smartwatch",
            category: "electronics"
        },
        {
            id: 7,
            name: "JBL Speaker",
            price: 79.99,
            image: "/src/assets/jbl_speaker.jpeg",
            description: "Portable speaker with excellent sound quality",
            category: "electronics"
        },
        {
            id: 8,
            name: "Webcam",
            price: 79.99,
            image: "/src/assets/webcam.jpg",
            description: "Webcam",
            category: "electronics"
        },
        {
            id: 9,
            name: "Iphone 17 Pro Max",
            price: 1199.99,
            image: "/src/assets/iphone17.jpg",
            description: "Iphone 17 Pro Max",
            category: "electronics"
        },
        {
            id: 10,
            name: "Galaxy Buds",
            price: 149.99,
            image: "/src/assets/buds.jpg",
            description: "Premium wireless earbuds",
            category: "electronics"
        },
        
        // Gaming (11-17)
        {
            id: 11,
            name: "Battlefield 6",
            price: 69.99,
            image: "/src/assets/bf6.jpg",
            description: "Battlefield 6",
            category: "gaming"
        },
        {
            id: 12,
            name: "Keyboard",
            price: 89.99,
            image: "/src/assets/keyboard.jpg",
            description: "Keyboard",
            category: "gaming"
        },
        {
            id: 13,
            name: "GPU",
            price: 899.99,
            image: "/src/assets/gpu.jpg",
            description: "GPU",
            category: "gaming"
        },
        {
            id: 14,
            name: "Mouse",
            price: 49.99,
            image: "/src/assets/mouse.jpg",
            description: "Mouse",
            category: "gaming"
        },
        {
            id: 15,
            name: "Microphone",
            price: 79.99,
            image: "/src/assets/mic.jpg",
            description: "Microphone",
            category: "gaming"
        },
        {
            id: 16,
            name: "Gaming PC",
            price: 1299.99,
            image: "/src/assets/pc.jpg",
            description: "Gaming PC",
            category: "gaming"
        },
        {
            id: 17,
            name: "Monitor",
            price: 249.99,
            image: "/src/assets/monitor.jpg",
            description: "Monitor",
            category: "gaming"
        },
        
        // Kitchen & Home (18-24)
        {
            id: 18,
            name: "Mop",
            price: 19.99,
            image: "/src/assets/mop.jpg",
            description: "Mop",
            category: "kitchen"
        },
        {
            id: 19,
            name: "Knife",
            price: 29.99,
            image: "/src/assets/knife.jpg",
            description: "Knife",
            category: "kitchen"
        },
        {
            id: 20,
            name: "Air Fryer",
            price: 89.99,
            image: "/src/assets/fryer.jpg",
            description: "Air fryer",
            category: "kitchen"
        },
        {
            id: 21,
            name: "Air Purifier",
            price: 149.99,
            image: "/src/assets/air.jpg",
            description: "Air Purifier",
            category: "kitchen"
        },
        {
            id: 22,
            name: "Vacuum Cleaner",
            price: 199.99,
            image: "/src/assets/vaccum.jpg",
            description: "Vacuum Cleaner",
            category: "kitchen"
        },
        {
            id: 23,
            name: "Espresso Machine",
            price: 299.99,
            image: "/src/assets/espresso_machine.jpg",
            description: "Espresso Machine",
            category: "kitchen"
        },
        {
            id: 24,
            name: "Dust",
            price: 10.99,
            image: "/src/assets/dust.jpg",
            description: "Dust",
            category: "kitchen"
        },
        
        // Outdoor & Tools (25-33)
        {
            id: 25,
            name: "Canopy",
            price: 79.99,
            image: "/src/assets/canopy.jpg",
            description: "Heavy-duty canopy",
            category: "outdoor"
        },
        {
            id: 26,
            name: "Shovel",
            price: 24.99,
            image: "/src/assets/shovel.jpg",
            description: "Steel shovel",
            category: "outdoor"
        },
        {
            id: 27,
            name: "Sprinkler",
            price: 19.99,
            image: "/src/assets/sprinkler.jpg",
            description: "Sprinkler",
            category: "outdoor"
        },
        {
            id: 28,
            name: "Grass",
            price: 12.99,
            image: "/src/assets/grass.jpg",
            description: "Grass",
            category: "outdoor"
        },
        {
            id: 29,
            name: "Rake",
            price: 18.99,
            image: "/src/assets/rake.jpg",
            description: "Rake",
            category: "outdoor"
        },
        {
            id: 30,
            name: "Lawn Chair",
            price: 29.99,
            image: "/src/assets/lawn_chairs.jpg",
            description: "Lawn Chair",
            category: "outdoor"
        },
        {
            id: 31,
            name: "Corn Hole",
            price: 49.99,
            image: "/src/assets/cornhole.jpg",
            description: "Corn Hole",
            category: "outdoor"
        },
        {
            id: 32,
            name: "Wasp Trap",
            price: 8.99,
            image: "/src/assets/wasp.jpg",
            description: "Wasp Trap",
            category: "outdoor"
        },
        {
            id: 33,
            name: "Hoe",
            price: 15.99,
            image: "/src/assets/hoe.jpg",
            description: "Garden hoe",
            category: "outdoor"
        },
        
        // Clothing (34-35)
        {
            id: 34,
            name: "Carhartt Jacket",
            price: 79.99,
            image: "/src/assets/carhartt_jacket.jpg",
            description: "Carhartt jacket",
            category: "clothing"
        },
        {
            id: 35,
            name: "Vans",
            price: 59.99,
            image: "/src/assets/vans.jpg",
            description: "Vans shoes",
            category: "clothing"
        },
        
        // Additional products for categories that were using placeholder IDs
        // Games (36-39)
        {
            id: 36,
            name: "Elden Ring",
            price: 59.99,
            image: "/src/assets/eldenring.jpg",
            description: "Elden Ring",
            category: "gaming"
        },
        {
            id: 37,
            name: "Halo MCC",
            price: 39.99,
            image: "/src/assets/halo.jpg",
            description: "Halo Master Chief Collection",
            category: "gaming"
        },
        {
            id: 38,
            name: "Minecraft",
            price: 26.95,
            image: "/src/assets/minecraft.jpg",
            description: "Minecraft",
            category: "gaming"
        },
        
        // Tools (40-43)
        {
            id: 40,
            name: "Pickaxe",
            price: 24.99,
            image: "/src/assets/pickaxe.jpg",
            description: "Steel pickaxe",
            category: "outdoor"
        },
        {
            id: 41,
            name: "Drill",
            price: 89.99,
            image: "/src/assets/drill.jpg",
            description: "Power drill",
            category: "outdoor"
        },
        
        // Audio (44-45)
        {
            id: 44,
            name: "Klipsch Speaker",
            price: 199.99,
            image: "/src/assets/klipsch.jpg",
            description: "Klipsch speaker",
            category: "electronics"
        },
        
        // Kitchen (46-49)
        {
            id: 46,
            name: "Stand Mixer",
            price: 199.99,
            image: "/src/assets/mixer.jpg",
            description: "Stand mixer",
            category: "kitchen"
        },
        {
            id: 47,
            name: "Microwave",
            price: 149.99,
            image: "/src/assets/microwave.jpg",
            description: "Microwave",
            category: "kitchen"
        },
        
        // Vinyl Records (50-53)
        {
            id: 50,
            name: "Record Player",
            price: 299.99,
            image: "/src/assets/record_player.jpg",
            description: "Record player",
            category: "music"
        },
        {
            id: 51,
            name: "Green Day Vinyl Box Set",
            price: 89.99,
            image: "/src/assets/greenday.jpg",
            description: "Green Day vinyl box set",
            category: "music"
        },
        {
            id: 52,
            name: "Vinyl Cleaning Brush",
            price: 19.99,
            image: "/src/assets/vinyl_brush.jpg",
            description: "Vinyl cleaning brush",
            category: "music"
        },
        {
            id: 53,
            name: "Stylus Cartridge",
            price: 49.99,
            image: "/src/assets/stylus.jpg",
            description: "Stylus cartridge",
            category: "music"
        },
        
        // Movies (54-57)
        {
            id: 54,
            name: "Star Wars",
            price: 19.99,
            image: "/src/assets/starwars.jpg",
            description: "Star Wars movie",
            category: "movies"
        },
        {
            id: 55,
            name: "Interstellar",
            price: 19.99,
            image: "/src/assets/interstellar.jpg",
            description: "Interstellar movie",
            category: "movies"
        },
        {
            id: 56,
            name: "Hot Fuzz",
            price: 14.99,
            image: "/src/assets/hotfuzz.jpg",
            description: "Hot Fuzz movie",
            category: "movies"
        },
        {
            id: 57,
            name: "Hellraiser",
            price: 14.99,
            image: "/src/assets/hellraiser.jpg",
            description: "Hellraiser movie",
            category: "movies"
        },
        
        // Shoes (58-61)
        {
            id: 58,
            name: "Converse",
            price: 65.99,
            image: "/src/assets/converse.jpg",
            description: "Converse shoes",
            category: "clothing"
        },
        {
            id: 59,
            name: "Nike",
            price: 89.99,
            image: "/src/assets/nike.jpg",
            description: "Nike shoes",
            category: "clothing"
        },
        {
            id: 60,
            name: "Adidas",
            price: 79.99,
            image: "/src/assets/adidas.jpg",
            description: "Adidas shoes",
            category: "clothing"
        },
        
        // Winter Clothing (62-65)
        {
            id: 62,
            name: "Snow Pants",
            price: 89.99,
            image: "/src/assets/snowpants.jpg",
            description: "Snow pants",
            category: "clothing"
        },
        {
            id: 63,
            name: "Gloves",
            price: 24.99,
            image: "/src/assets/gloves.jpg",
            description: "Winter gloves",
            category: "clothing"
        },
        {
            id: 64,
            name: "Boots",
            price: 99.99,
            image: "/src/assets/boots.jpg",
            description: "Winter boots",
            category: "clothing"
        },
        
        // Autumn Clothing (66-69)
        {
            id: 66,
            name: "Flannel",
            price: 39.99,
            image: "/src/assets/flannel.jpg",
            description: "Flannel shirt",
            category: "clothing"
        },
        {
            id: 67,
            name: "Sweater",
            price: 49.99,
            image: "/src/assets/sweater.jpg",
            description: "Wool sweater",
            category: "clothing"
        },
        {
            id: 68,
            name: "Crewneck",
            price: 34.99,
            image: "/src/assets/crewneck.jpg",
            description: "Crewneck sweater",
            category: "clothing"
        },
        {
            id: 69,
            name: "Scarf",
            price: 19.99,
            image: "/src/assets/scarf.jpg",
            description: "Winter scarf",
            category: "clothing"
        },
        
        // Seasonal and Holiday (70-73)
        {
            id: 70,
            name: "Skeleton Decor",
            price: 24.99,
            image: "/src/assets/skeletons.jpg",
            description: "Skeleton decoration",
            category: "seasonal"
        },
        {
            id: 71,
            name: "Pumpkin Pillow",
            price: 19.99,
            image: "/src/assets/pumpkin.jpg",
            description: "Pumpkin pillow",
            category: "seasonal"
        },
        {
            id: 72,
            name: "Leaf Garland",
            price: 14.99,
            image: "/src/assets/leaves.jpg",
            description: "Leaf garland",
            category: "seasonal"
        },
        {
            id: 73,
            name: "Candles",
            price: 12.99,
            image: "/src/assets/candle.jpg",
            description: "Scented candles",
            category: "seasonal"
        },
        
        // Arts & Crafts (74-77)
        {
            id: 74,
            name: "Airbrush",
            price: 89.99,
            image: "/src/assets/airbrush.jpg",
            description: "Airbrush kit",
            category: "arts"
        },
        {
            id: 75,
            name: "Paint Brushes",
            price: 24.99,
            image: "/src/assets/brushes.jpg",
            description: "Paint brush set",
            category: "arts"
        },
        {
            id: 76,
            name: "Yarn",
            price: 12.99,
            image: "/src/assets/crochet.jpg",
            description: "Crochet yarn",
            category: "arts"
        },
        {
            id: 77,
            name: "Wet Palette",
            price: 19.99,
            image: "/src/assets/palette.jpg",
            description: "Wet palette",
            category: "arts"
        },
        
        // Gym & Fitness (78-81)
        {
            id: 78,
            name: "Dumbbells",
            price: 49.99,
            image: "/src/assets/dumbbells.jpg",
            description: "Dumbbell set",
            category: "fitness"
        },
        {
            id: 79,
            name: "Yoga Mat",
            price: 29.99,
            image: "/src/assets/yoga.jpg",
            description: "Yoga mat",
            category: "fitness"
        },
        {
            id: 80,
            name: "Protein Powder",
            price: 39.99,
            image: "/src/assets/protein.jpg",
            description: "Protein powder",
            category: "fitness"
        },
        {
            id: 81,
            name: "Exercise Ball",
            price: 24.99,
            image: "/src/assets/ball.jpg",
            description: "Exercise ball",
            category: "fitness"
        }
    ];

    // Helper function to get products by category
    const getProductsByCategory = (category) => {
        return allProducts.filter(product => product.category === category);
    };

    // Helper function to get products by IDs
    const getProductsByIds = (ids) => {
        return allProducts.filter(product => ids.includes(product.id));
    };

    // Category-based product arrays (now derived from unified database)
    const electronicsProducts = getProductsByCategory("electronics");
    const gamingProducts = getProductsByCategory("gaming");
    const kitchenProducts = getProductsByCategory("kitchen");
    const toolsProducts = getProductsByCategory("outdoor");
    const clothingProducts = getProductsByCategory("clothing");

    // Featured items (now using unified database)
    const featuredItems = getProductsByIds([1, 35, 7, 23, 11, 34, 9]);

    return (
        <div className="min-h-screen bg-gray-50">
            <FeaturedItems title="Featured Items" products={featuredItems} />
         
            <div className="p-4">
                <div className="categories-grid">
                    <CategorySection 
                        title="Games" 
                        images={[
                            "src/assets/bf6.jpg",
                            "src/assets/eldenring.jpg",
                            "src/assets/halo.jpg",
                            "src/assets/minecraft.jpg"
                        ]}
                        captions={["Battlefield 6", "Elden Ring", "Halo MCC", "Minecraft"]}
                        description="Raw materials for crafting and smelting"
                        productIds={[11, 36, 37, 38]} // Proper IDs: BF6, Elden Ring, Halo MCC, Minecraft
                    />
                    <CategorySection 
                        title="Tools" 
                        images={[
                            "src/assets/pickaxe.jpg",
                            "src/assets/shovel.jpg",
                            "src/assets/drill.jpg",
                            "src/assets/hoe.jpg"
                        ]}
                        captions={["Pickaxe", "Shovel", "Drill", "Hoe"]}
                        description="Essential tools"
                        productIds={[40, 26, 41, 33]} // Proper IDs: Pickaxe, Shovel, Drill, Hoe
                    />
                    <CategorySection 
                        title="Audio" 
                        images={[
                            "src/assets/headphones.jpg",
                            "src/assets/jbl_speaker.jpeg",
                            "src/assets/klipsch.jpg",
                            "src/assets/buds.jpg"
                        ]}
                        captions={["Headphones", "Bluetooth Speaker", "Klipsch Speaker", "Galaxy Buds"]}
                        description="Building materials for construction"
                        productIds={[1, 7, 44, 10]} // Proper IDs: Headphones, JBL Speaker, Klipsch Speaker, Galaxy Buds
                    />
                    <CategorySection 
                        title="Kitchen" 
                        images={[
                            "src/assets/mixer.jpg",
                            "src/assets/fryer.jpg",
                            "src/assets/microwave.jpg",
                            "src/assets/espresso_machine.jpg"
                        ]}
                        captions={["Stand Mixer", "Air Fryer", "Microwave", "Espresso Machine"]}
                        description="Protective gear for adventure"
                        productIds={[46, 20, 47, 23]} // Proper IDs: Stand Mixer, Air Fryer, Microwave, Espresso Machine
                    />
                </div>
            </div>
            <FeaturedItems title="Gaming" products={gamingProducts} />
            <FeaturedItems title="Kitchen & Home" products={kitchenProducts} />
            <div className="p-4">
                <div className="categories-grid">
                    <CategorySection 
                        title="Vinyl Records" 
                        images={[
                            "src/assets/record_player.jpg",
                            "src/assets/greenday.jpg",
                            "src/assets/vinyl_brush.jpg",
                            "src/assets/stylus.jpg",
                        ]}
                        captions={["Record Player", "Green Day Vinyl Box Set", "Cleaning Brush", "Stylus Cartridge"]}
                        description="Vinyl records for all occasions"
                        productIds={[50, 51, 52, 53]} // Proper IDs: Record Player, Green Day Vinyl, Cleaning Brush, Stylus
                    />
                    <CategorySection 
                        title="Movies" 
                        images={[
                            "src/assets/starwars.jpg",
                            "src/assets/interstellar.jpg",
                            "src/assets/hotfuzz.jpg",
                            "src/assets/hellraiser.jpg"
                        ]}
                        captions={["Star Wars", "Interstellar", "Hot Fuzz", "Hellraiser"]}
                        description="Movies for all occasions"
                        productIds={[54, 55, 56, 57]} // Proper IDs: Star Wars, Interstellar, Hot Fuzz, Hellraiser
                    />
                    <CategorySection 
                        title="Shoes" 
                        images={[
                            "src/assets/vans.jpg",
                            "src/assets/converse.jpg",
                            "src/assets/nike.jpg",
                            "src/assets/adidas.jpg"
                        ]}
                        captions={["Vans", "Converse", "Nike", "Adidas"]}
                        description="Shoes for all occasions"
                        productIds={[35, 58, 59, 60]} // Proper IDs: Vans, Converse, Nike, Adidas
                    />
                    <CategorySection 
                        title="Winter Clothing" 
                        images={[
                            "src/assets/carhartt_jacket.jpg",
                            "src/assets/snowpants.jpg",
                            "src/assets/gloves.jpg",
                            "src/assets/boots.jpg"
                        ]}
                        captions={["Jackets", "Snow Pants", "Gloves", "Boots"]}
                        description="Protective gear for adventure"
                        productIds={[34, 62, 63, 64]} // Proper IDs: Carhartt Jacket, Snow Pants, Gloves, Boots
                    />
                </div>
            </div>
            <FeaturedItems title="Outdoor & Gardening" products={toolsProducts} />
            <div className="p-4">
                <div className="categories-grid">
                    <CategorySection 
                        title="Autum Clothing" 
                        images={[
                            "src/assets/flannel.jpg",
                            "src/assets/sweater.jpg",
                            "src/assets/crewneck.jpg",
                            "src/assets/scarf.jpg"
                        ]}
                        captions={["Flannel", "Sweater", "Crewneck", "Scarf"]}
                        description="Autum Clothing"
                        productIds={[66, 67, 68, 69]} // Proper IDs: Flannel, Sweater, Crewneck, Scarf
                    />
                    <CategorySection 
                        title="Seasonal and Holiday" 
                        images={[
                            "src/assets/skeletons.jpg",
                            "src/assets/pumpkin.jpg",
                            "src/assets/leaves.jpg",
                            "src/assets/candle.jpg"
                        ]}
                        captions={["Skeleton Decor", "Pumpkin Pillow", "Leaf Garland", "Candles"]}
                        description="Seasonal and Holiday"
                        productIds={[70, 71, 72, 73]} // Proper IDs: Skeleton Decor, Pumpkin Pillow, Leaf Garland, Candles
                    />
                    <CategorySection 
                        title="Arts & Crafts" 
                        images={[
                            "src/assets/airbrush.jpg",
                            "src/assets/brushes.jpg",
                            "src/assets/crochet.jpg",
                            "src/assets/palette.jpg"
                        ]}
                        captions={["Airbrush", "Paint Brushes", "Yarn", "Wet Palette"]}
                        description="Arts & Crafts"
                        productIds={[74, 75, 76, 77]} // Proper IDs: Airbrush, Paint Brushes, Yarn, Wet Palette
                    />
                    <CategorySection 
                        title="Gym & Fitness" 
                        images={[
                            "src/assets/dumbbells.jpg",
                            "src/assets/yoga.jpg",
                            "src/assets/protein.jpg",
                            "src/assets/ball.jpg",
                        ]}
                        captions={["Dumbbells", "Yoga Mat", "Protein Powder", "ExerciseBall"]}
                        description="Gym & Fitness"
                        productIds={[78, 79, 80, 81]} // Proper IDs: Dumbbells, Yoga Mat, Protein Powder, Exercise Ball
                    />
                </div>
            </div>
            <FeaturedItems title="Electronics" products={electronicsProducts} />
        </div>
    );
}
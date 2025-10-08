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
            description: "Premium wireless over-ear headphones featuring active noise cancellation, 30-hour battery life, and crystal-clear audio quality. Perfect for music lovers and professionals.",
            category: "electronics",
            rating: 4.5
        },
        {
            id: 2,
            name: "iPad",
            price: 329.99,
            image: "/src/assets/ipad.jpg",
            description: "Apple iPad with stunning Retina display, powerful A14 Bionic chip, and all-day battery life. Perfect for work, creativity, and entertainment on the go.",
            category: "electronics",
            rating: 4.7
        },
        {
            id: 3,
            name: "PlayStation 5",
            price: 499.99,
            image: "/src/assets/ps5.jpg",
            description: "Next-generation PlayStation 5 console with lightning-fast SSD, immersive 3D audio, and stunning 4K graphics. Experience gaming like never before.",
            category: "electronics",
            rating: 4.8
        },
        {
            id: 4,
            name: "Drone",
            price: 299.99,
            image: "/src/assets/drone.jpg",
            description: "Professional-grade quadcopter drone with 4K camera, GPS positioning, and intelligent flight modes. Perfect for aerial photography and videography.",
            category: "electronics",
            rating: 4.2
        },
        {
            id: 5,
            name: "Laptop",
            price: 899.99,
            image: "/src/assets/laptop.jpg",
            description: "High-performance laptop with Intel Core i7 processor, 16GB RAM, and 512GB SSD. Ideal for work, gaming, and creative projects with long-lasting battery.",
            category: "electronics",
            rating: 4.6
        },
        {
            id: 6,
            name: "Smartwatch",
            price: 199.99,
            image: "/src/assets/watch.jpg",
            description: "Advanced smartwatch with health monitoring, GPS tracking, and smartphone connectivity. Track your fitness goals and stay connected throughout the day.",
            category: "electronics",
            rating: 4.3
        },
        {
            id: 7,
            name: "JBL Speaker",
            price: 79.99,
            image: "/src/assets/jbl_speaker.jpeg",
            description: "JBL portable Bluetooth speaker delivering powerful bass and crystal-clear sound. Waterproof design with 12-hour battery life for any adventure.",
            category: "electronics",
            rating: 4.4
        },
        {
            id: 8,
            name: "Webcam",
            price: 79.99,
            image: "/src/assets/webcam.jpg",
            description: "High-definition webcam with 1080p video, auto-focus, and built-in microphone. Perfect for video calls, streaming, and content creation.",
            category: "electronics",
            rating: 4.1
        },
        {
            id: 9,
            name: "Iphone 17 Pro Max",
            price: 1199.99,
            image: "/src/assets/iphone17.jpg",
            description: "iPhone 17 Pro Max with cutting-edge A18 Pro chip, advanced camera system, and titanium design. The ultimate smartphone experience with all-day battery life.",
            category: "electronics",
            rating: 4.9
        },
        {
            id: 10,
            name: "Galaxy Buds",
            price: 149.99,
            image: "/src/assets/buds.jpg",
            description: "Samsung Galaxy Buds featuring active noise cancellation, wireless charging, and premium sound quality. Comfortable fit with up to 8 hours of playback.",
            category: "electronics",
            rating: 4.4
        },
        
        // Gaming (11-17)
        {
            id: 11,
            name: "Battlefield 6",
            price: 69.99,
            image: "/src/assets/bf6.jpg",
            description: "Epic military shooter featuring massive multiplayer battles, destructible environments, and cutting-edge graphics. Experience the future of warfare.",
            category: "gaming",
            rating: 4.3
        },
        {
            id: 12,
            name: "Keyboard",
            price: 89.99,
            image: "/src/assets/keyboard.jpg",
            description: "Mechanical gaming keyboard with RGB backlighting, tactile switches, and programmable macro keys. Built for precision and durability.",
            category: "gaming",
            rating: 4.5
        },
        {
            id: 13,
            name: "GPU",
            price: 899.99,
            image: "/src/assets/gpu.jpg",
            description: "High-performance graphics card with ray tracing technology and AI acceleration. Perfect for 4K gaming and content creation.",
            category: "gaming",
            rating: 4.7
        },
        {
            id: 14,
            name: "Mouse",
            price: 49.99,
            image: "/src/assets/mouse.jpg",
            description: "Precision gaming mouse with adjustable DPI, programmable buttons, and ergonomic design. Built for competitive gaming.",
            category: "gaming",
            rating: 4.4
        },
        {
            id: 15,
            name: "Microphone",
            price: 79.99,
            image: "/src/assets/mic.jpg",
            description: "Professional USB microphone with crystal-clear audio quality and noise cancellation. Perfect for streaming, podcasting, and gaming.",
            category: "gaming",
            rating: 4.2
        },
        {
            id: 16,
            name: "Gaming PC",
            price: 1299.99,
            image: "/src/assets/pc.jpg",
            description: "High-end gaming PC with latest RTX graphics, Intel Core i9 processor, and liquid cooling. Ready for 4K gaming and VR experiences.",
            category: "gaming",
            rating: 4.8
        },
        {
            id: 17,
            name: "Monitor",
            price: 249.99,
            image: "/src/assets/monitor.jpg",
            description: "27-inch 4K gaming monitor with 144Hz refresh rate, HDR support, and ultra-low input lag. Immerse yourself in stunning visuals.",
            category: "gaming",
            rating: 4.6
        },
        
        // Kitchen & Home (18-24)
        {
            id: 18,
            name: "Mop",
            price: 19.99,
            image: "/src/assets/mop.jpg",
            description: "Heavy-duty microfiber mop with telescopic handle and washable pads. Efficiently cleans all floor types with minimal effort.",
            category: "kitchen",
            rating: 3.8
        },
        {
            id: 19,
            name: "Knife",
            price: 29.99,
            image: "/src/assets/knife.jpg",
            description: "Professional-grade chef knife with razor-sharp stainless steel blade and ergonomic handle. Essential for precision cutting and food preparation.",
            category: "kitchen",
            rating: 4.2
        },
        {
            id: 20,
            name: "Air Fryer",
            price: 89.99,
            image: "/src/assets/fryer.jpg",
            description: "Digital air fryer with 6-quart capacity, rapid air circulation technology, and 8 cooking presets. Cook crispy, healthy meals with 75% less oil.",
            category: "kitchen",
            rating: 4.5
        },
        {
            id: 21,
            name: "Air Purifier",
            price: 149.99,
            image: "/src/assets/air.jpg",
            description: "HEPA air purifier with smart sensors and 3-stage filtration system. Removes 99.97% of airborne particles for cleaner, healthier indoor air.",
            category: "kitchen",
            rating: 4.3
        },
        {
            id: 22,
            name: "Vacuum Cleaner",
            price: 199.99,
            image: "/src/assets/vaccum.jpg",
            description: "Powerful cordless vacuum with strong suction, long battery life, and versatile attachments. Effortlessly cleans carpets, hardwood, and pet hair.",
            category: "kitchen",
            rating: 4.4
        },
        {
            id: 23,
            name: "Espresso Machine",
            price: 299.99,
            image: "/src/assets/espresso_machine.jpg",
            description: "Professional espresso machine with 15-bar pump pressure, milk frother, and programmable settings. Create café-quality drinks at home.",
            category: "kitchen",
            rating: 4.6
        },
        {
            id: 24,
            name: "Dust",
            price: 10.99,
            image: "/src/assets/dust.jpg",
            description: "Premium dust collection system with multi-layer filtration and easy-empty design. Keeps your workspace clean and dust-free.",
            category: "kitchen",
            rating: 2.1
        },
        
        // Outdoor & Tools (25-33)
        {
            id: 25,
            name: "Canopy",
            price: 79.99,
            image: "/src/assets/canopy.jpg",
            description: "Heavy-duty canopy tent with UV protection, waterproof material, and easy setup. Perfect for outdoor events, camping, and backyard gatherings.",
            category: "outdoor",
            rating: 4.2
        },
        {
            id: 26,
            name: "Shovel",
            price: 24.99,
            image: "/src/assets/shovel.jpg",
            description: "Durable steel shovel with fiberglass handle and ergonomic grip. Ideal for digging, landscaping, and snow removal.",
            category: "outdoor",
            rating: 4.0
        },
        {
            id: 27,
            name: "Sprinkler",
            price: 19.99,
            image: "/src/assets/sprinkler.jpg",
            description: "Oscillating lawn sprinkler with adjustable spray patterns and timer function. Efficiently waters your garden and lawn.",
            category: "outdoor",
            rating: 3.9
        },
        {
            id: 28,
            name: "Grass",
            price: 12.99,
            image: "/src/assets/grass.jpg",
            description: "Premium grass seed mix for lush, green lawns. Drought-resistant blend perfect for residential and commercial landscaping.",
            category: "outdoor",
            rating: 3.5
        },
        {
            id: 29,
            name: "Rake",
            price: 18.99,
            image: "/src/assets/rake.jpg",
            description: "Heavy-duty garden rake with steel tines and comfortable wooden handle. Perfect for leaf collection and soil preparation.",
            category: "outdoor",
            rating: 3.8
        },
        {
            id: 30,
            name: "Lawn Chair",
            price: 29.99,
            image: "/src/assets/lawn_chairs.jpg",
            description: "Comfortable folding lawn chair with cup holders and weather-resistant fabric. Perfect for outdoor relaxation and events.",
            category: "outdoor",
            rating: 4.1
        },
        {
            id: 31,
            name: "Corn Hole",
            price: 49.99,
            image: "/src/assets/cornhole.jpg",
            description: "Professional cornhole game set with regulation boards, bean bags, and carrying case. Perfect for backyard parties and tailgating.",
            category: "outdoor",
            rating: 4.4
        },
        {
            id: 32,
            name: "Wasp Trap",
            price: 8.99,
            image: "/src/assets/wasp.jpg",
            description: "Effective wasp trap with attractant and easy-clean design. Safely removes wasps and hornets from your outdoor spaces.",
            category: "outdoor",
            rating: 3.7
        },
        {
            id: 33,
            name: "Hoe",
            price: 15.99,
            image: "/src/assets/hoe.jpg",
            description: "Traditional garden hoe with sharp steel blade and sturdy wooden handle. Essential for weeding and soil cultivation.",
            category: "outdoor",
            rating: 3.9
        },
        
        // Clothing (34-35)
        {
            id: 34,
            name: "Carhartt Jacket",
            price: 79.99,
            image: "/src/assets/carhartt_jacket.jpg",
            description: "Durable Carhartt work jacket with water-resistant finish, multiple pockets, and reinforced construction. Built to last through tough conditions.",
            category: "clothing",
            rating: 4.3
        },
        {
            id: 35,
            name: "Vans",
            price: 59.99,
            image: "/src/assets/vans.jpg",
            description: "Classic Vans Authentic sneakers with canvas upper, vulcanized sole, and timeless design. Perfect for casual wear and skateboarding.",
            category: "clothing",
            rating: 4.4
        },
        
        // Additional products for categories that were using placeholder IDs
        // Games (36-39)
        {
            id: 36,
            name: "Elden Ring",
            price: 59.99,
            image: "/src/assets/eldenring.jpg",
            description: "Award-winning action RPG from FromSoftware featuring open-world exploration, challenging combat, and breathtaking fantasy landscapes.",
            category: "gaming",
            rating: 4.9
        },
        {
            id: 37,
            name: "Halo MCC",
            price: 39.99,
            image: "/src/assets/halo.jpg",
            description: "Complete Halo Master Chief Collection with remastered campaigns and multiplayer. Experience the legendary sci-fi saga in stunning 4K.",
            category: "gaming",
            rating: 4.6
        },
        {
            id: 38,
            name: "Minecraft",
            price: 26.95,
            image: "/src/assets/minecraft.jpg",
            description: "Creative sandbox game where you can build, explore, and survive in infinite worlds. Perfect for players of all ages and creativity levels.",
            category: "gaming",
            rating: 4.8
        },
        
        // Tools (40-43)
        {
            id: 40,
            name: "Pickaxe",
            price: 24.99,
            image: "/src/assets/pickaxe.jpg",
            description: "Heavy-duty steel pickaxe with fiberglass handle and pointed tip. Perfect for breaking rocks, digging, and construction work.",
            category: "outdoor",
            rating: 4.0
        },
        {
            id: 41,
            name: "Drill",
            price: 89.99,
            image: "/src/assets/drill.jpg",
            description: "Cordless power drill with lithium-ion battery, variable speed control, and LED light. Includes multiple drill bits and carrying case.",
            category: "outdoor",
            rating: 4.5
        },
        
        // Audio (44-45)
        {
            id: 44,
            name: "Klipsch Speaker",
            price: 199.99,
            image: "/src/assets/klipsch.jpg",
            description: "Klipsch high-fidelity bookshelf speakers delivering rich, detailed sound with horn-loaded tweeters. Perfect for audiophiles and home theater enthusiasts.",
            category: "electronics",
            rating: 4.7
        },
        
        // Kitchen (46-49)
        {
            id: 46,
            name: "Stand Mixer",
            price: 199.99,
            image: "/src/assets/mixer.jpg",
            description: "Heavy-duty stand mixer with 5-quart stainless steel bowl, multiple attachments, and powerful motor. Perfect for baking and food preparation.",
            category: "kitchen",
            rating: 4.6
        },
        {
            id: 47,
            name: "Microwave",
            price: 149.99,
            image: "/src/assets/microwave.jpg",
            description: "Smart microwave with sensor cooking, convection heating, and preset programs. Cook, reheat, and defrost with precision and convenience.",
            category: "kitchen",
            rating: 4.3
        },
        
        // Vinyl Records (50-53)
        {
            id: 50,
            name: "Record Player",
            price: 299.99,
            image: "/src/assets/record_player.jpg",
            description: "Premium turntable with belt-drive system, adjustable tonearm, and built-in speakers. Perfect for vinyl enthusiasts and audiophiles.",
            category: "music",
            rating: 4.5
        },
        {
            id: 51,
            name: "Green Day Vinyl Box Set",
            price: 89.99,
            image: "/src/assets/greenday.jpg",
            description: "Complete Green Day vinyl collection featuring their greatest hits on high-quality 180-gram vinyl. Includes exclusive artwork and liner notes.",
            category: "music",
            rating: 4.7
        },
        {
            id: 52,
            name: "Vinyl Cleaning Brush",
            price: 19.99,
            image: "/src/assets/vinyl_brush.jpg",
            description: "Professional vinyl cleaning brush with soft carbon fiber bristles and anti-static properties. Essential for maintaining your record collection.",
            category: "music",
            rating: 4.1
        },
        {
            id: 53,
            name: "Stylus Cartridge",
            price: 49.99,
            image: "/src/assets/stylus.jpg",
            description: "High-quality stylus cartridge with diamond tip and precise tracking. Delivers exceptional sound quality and protects your vinyl records.",
            category: "music",
            rating: 4.3
        },
        
        // Movies (54-57)
        {
            id: 54,
            name: "Star Wars",
            price: 19.99,
            image: "/src/assets/starwars.jpg",
            description: "Epic Star Wars saga collection featuring the complete original trilogy in stunning 4K Ultra HD with enhanced audio and bonus features.",
            category: "movies",
            rating: 4.8
        },
        {
            id: 55,
            name: "Interstellar",
            price: 19.99,
            image: "/src/assets/interstellar.jpg",
            description: "Christopher Nolan's masterpiece sci-fi film about space exploration and time dilation. Stunning visuals and thought-provoking storyline in 4K.",
            category: "movies",
            rating: 4.9
        },
        {
            id: 56,
            name: "Hot Fuzz",
            price: 14.99,
            image: "/src/assets/hotfuzz.jpg",
            description: "Edgar Wright's action-comedy masterpiece starring Simon Pegg and Nick Frost. Hilarious British humor with explosive action sequences.",
            category: "movies",
            rating: 4.5
        },
        {
            id: 57,
            name: "Hellraiser",
            price: 14.99,
            image: "/src/assets/hellraiser.jpg",
            description: "Classic horror film by Clive Barker featuring the iconic Pinhead and the mysterious puzzle box. A cult favorite in high definition.",
            category: "movies",
            rating: 4.2
        },
        
        // Shoes (58-61)
        {
            id: 58,
            name: "Converse",
            price: 65.99,
            image: "/src/assets/converse.jpg",
            description: "Iconic Converse Chuck Taylor All Star sneakers with canvas upper and rubber sole. Timeless style for everyday wear.",
            category: "clothing",
            rating: 4.5
        },
        {
            id: 59,
            name: "Nike",
            price: 89.99,
            image: "/src/assets/nike.jpg",
            description: "Nike Air Max running shoes with responsive cushioning, breathable mesh upper, and durable rubber outsole. Perfect for athletic performance.",
            category: "clothing",
            rating: 4.6
        },
        {
            id: 60,
            name: "Adidas",
            price: 79.99,
            image: "/src/assets/adidas.jpg",
            description: "Adidas Ultraboost running shoes with energy-returning boost midsole, Primeknit upper, and Continental rubber outsole for superior grip.",
            category: "clothing",
            rating: 4.5
        },
        
        // Winter Clothing (62-65)
        {
            id: 62,
            name: "Snow Pants",
            price: 89.99,
            image: "/src/assets/snowpants.jpg",
            description: "Insulated snow pants with waterproof shell, adjustable waist, and reinforced knees. Perfect for winter sports and cold weather activities.",
            category: "clothing",
            rating: 4.2
        },
        {
            id: 63,
            name: "Gloves",
            price: 24.99,
            image: "/src/assets/gloves.jpg",
            description: "Warm winter gloves with touchscreen compatibility, waterproof material, and adjustable wrist closure. Stay warm and connected.",
            category: "clothing",
            rating: 4.1
        },
        {
            id: 64,
            name: "Boots",
            price: 99.99,
            image: "/src/assets/boots.jpg",
            description: "Insulated winter boots with waterproof construction, slip-resistant sole, and comfortable lining. Perfect for snow and ice.",
            category: "clothing",
            rating: 4.4
        },
        
        // Autumn Clothing (66-69)
        {
            id: 66,
            name: "Flannel",
            price: 39.99,
            image: "/src/assets/flannel.jpg",
            description: "Soft flannel shirt with brushed cotton fabric, button-down collar, and classic plaid pattern. Perfect for layering and casual wear.",
            category: "clothing",
            rating: 4.3
        },
        {
            id: 67,
            name: "Sweater",
            price: 49.99,
            image: "/src/assets/sweater.jpg",
            description: "Premium wool sweater with cable knit design, comfortable fit, and natural insulation. Perfect for cool weather and layering.",
            category: "clothing",
            rating: 4.4
        },
        {
            id: 68,
            name: "Crewneck",
            price: 34.99,
            image: "/src/assets/crewneck.jpg",
            description: "Classic crewneck sweater with soft cotton blend, relaxed fit, and timeless style. Perfect for casual and smart-casual occasions.",
            category: "clothing",
            rating: 4.2
        },
        {
            id: 69,
            name: "Scarf",
            price: 19.99,
            image: "/src/assets/scarf.jpg",
            description: "Cozy winter scarf with soft acrylic blend, fringe detail, and versatile styling options. Perfect for cold weather protection.",
            category: "clothing",
            rating: 4.0
        },
        
        // Seasonal and Holiday (70-73)
        {
            id: 70,
            name: "Skeleton Decor",
            price: 24.99,
            image: "/src/assets/skeletons.jpg",
            description: "Spooky skeleton decorations perfect for Halloween. Realistic bone design with poseable joints for creative spooky displays.",
            category: "seasonal",
            rating: 4.3
        },
        {
            id: 71,
            name: "Pumpkin Pillow",
            price: 19.99,
            image: "/src/assets/pumpkin.jpg",
            description: "Cozy pumpkin-themed throw pillow with soft velvet fabric and festive autumn design. Perfect for fall home decor and comfort.",
            category: "seasonal",
            rating: 4.1
        },
        {
            id: 72,
            name: "Leaf Garland",
            price: 14.99,
            image: "/src/assets/leaves.jpg",
            description: "Beautiful autumn leaf garland with realistic fall colors and natural textures. Perfect for seasonal home decoration and parties.",
            category: "seasonal",
            rating: 4.0
        },
        {
            id: 73,
            name: "Candles",
            price: 12.99,
            image: "/src/assets/candle.jpg",
            description: "Hand-poured scented candles with natural soy wax and essential oils. Available in seasonal fragrances like pumpkin spice and cinnamon.",
            category: "seasonal",
            rating: 4.2
        },
        
        // Arts & Crafts (74-77)
        {
            id: 74,
            name: "Airbrush",
            price: 89.99,
            image: "/src/assets/airbrush.jpg",
            description: "Professional airbrush kit with dual-action trigger, compressor, and multiple nozzle sizes. Perfect for detailed artwork and model painting.",
            category: "arts",
            rating: 4.4
        },
        {
            id: 75,
            name: "Paint Brushes",
            price: 24.99,
            image: "/src/assets/brushes.jpg",
            description: "Premium paint brush set with natural bristles and ergonomic handles. Includes various sizes for detailed artwork and craft projects.",
            category: "arts",
            rating: 4.3
        },
        {
            id: 76,
            name: "Yarn",
            price: 12.99,
            image: "/src/assets/crochet.jpg",
            description: "Soft acrylic yarn perfect for crochet and knitting projects. Available in multiple colors with excellent stitch definition.",
            category: "arts",
            rating: 4.1
        },
        {
            id: 77,
            name: "Wet Palette",
            price: 19.99,
            image: "/src/assets/palette.jpg",
            description: "Professional wet palette for acrylic painting with sponge insert and mixing wells. Keeps paints workable for extended periods.",
            category: "arts",
            rating: 4.2
        },
        
        // Gym & Fitness (78-81)
        {
            id: 78,
            name: "Dumbbells",
            price: 49.99,
            image: "/src/assets/dumbbells.jpg",
            description: "Adjustable dumbbell set with weight plates and collars. Perfect for strength training, muscle building, and home workouts.",
            category: "fitness",
            rating: 4.4
        },
        {
            id: 79,
            name: "Yoga Mat",
            price: 29.99,
            image: "/src/assets/yoga.jpg",
            description: "Non-slip yoga mat with extra cushioning and carrying strap. Perfect for yoga, pilates, and floor exercises.",
            category: "fitness",
            rating: 4.3
        },
        {
            id: 80,
            name: "Protein Powder",
            price: 39.99,
            image: "/src/assets/protein.jpg",
            description: "Premium whey protein powder with 25g protein per serving. Supports muscle recovery and growth with great taste.",
            category: "fitness",
            rating: 4.2
        },
        {
            id: 81,
            name: "Exercise Ball",
            price: 24.99,
            image: "/src/assets/ball.jpg",
            description: "Anti-burst exercise ball with smooth surface and stability base. Perfect for core workouts, stretching, and balance training.",
            rating: 4.1,
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
                        allProducts={allProducts}
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
                        allProducts={allProducts}
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
                        allProducts={allProducts}
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
                        allProducts={allProducts}
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
                        allProducts={allProducts}
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
                        allProducts={allProducts}
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
                        allProducts={allProducts}
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
                        allProducts={allProducts}
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
                        allProducts={allProducts}
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
                        allProducts={allProducts}
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
                        allProducts={allProducts}
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
                        allProducts={allProducts}
                    />
                </div>
            </div>
            <FeaturedItems title="Electronics" products={electronicsProducts} />
        </div>
    );
}
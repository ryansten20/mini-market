import React, { createContext, useState, useContext, useEffect, useCallback } from "react";
import { 
    getAllProducts, 
    getProductById, 
    getFeaturedProducts,
    getProductsByCategory,
    searchProducts as apiSearchProducts,
    getProductsByIds,
    getCategories 
} from "../services/api";

const ProductContext = createContext();

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProducts must be used within a ProductProvider");
    }
    return context;
};

export const ProductProvider = ({ children }) => {
    const [allProducts, setAllProducts] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Cache for products by category
    const [categoryCache, setCategoryCache] = useState({});

    /**
     * Fetch all products from API
     */
    const fetchAllProducts = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const products = await getAllProducts();
            setAllProducts(products);
            return products;
        } catch (err) {
            setError(err.message);
            console.error("Error fetching all products:", err);
            return [];
        } finally {
            setLoading(false);
        }
    }, []);

    /**
     * Fetch featured products from API
     */
    const fetchFeaturedProducts = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const products = await getFeaturedProducts();
            setFeaturedProducts(products);
            return products;
        } catch (err) {
            setError(err.message);
            console.error("Error fetching featured products:", err);
            return [];
        } finally {
            setLoading(false);
        }
    }, []);

    /**
     * Fetch products by category with caching
     */
    const fetchProductsByCategory = useCallback(async (category) => {
        // Check cache first
        if (categoryCache[category]) {
            return categoryCache[category];
        }

        setLoading(true);
        setError(null);
        try {
            const products = await getProductsByCategory(category);
            
            // Update cache
            setCategoryCache(prev => ({
                ...prev,
                [category]: products
            }));
            
            return products;
        } catch (err) {
            setError(err.message);
            console.error(`Error fetching products for category ${category}:`, err);
            return [];
        } finally {
            setLoading(false);
        }
    }, [categoryCache]);

    /**
     * Fetch single product by ID
     */
    const fetchProductById = useCallback(async (id) => {
        setLoading(true);
        setError(null);
        try {
            const product = await getProductById(id);
            return product;
        } catch (err) {
            setError(err.message);
            console.error(`Error fetching product ${id}:`, err);
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    /**
     * Search products
     */
    const searchProducts = useCallback(async (query) => {
        if (!query || query.trim() === '') {
            return [];
        }

        setLoading(true);
        setError(null);
        try {
            const products = await apiSearchProducts(query);
            return products;
        } catch (err) {
            setError(err.message);
            console.error(`Error searching products for "${query}":`, err);
            return [];
        } finally {
            setLoading(false);
        }
    }, []);

    /**
     * Fetch products by IDs
     */
    const fetchProductsByIds = useCallback(async (ids) => {
        if (!ids || ids.length === 0) {
            return [];
        }

        setLoading(true);
        setError(null);
        try {
            const products = await getProductsByIds(ids);
            return products;
        } catch (err) {
            setError(err.message);
            console.error(`Error fetching products by IDs:`, err);
            return [];
        } finally {
            setLoading(false);
        }
    }, []);

    /**
     * Fetch all categories
     */
    const fetchCategories = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const cats = await getCategories();
            setCategories(cats);
            return cats;
        } catch (err) {
            setError(err.message);
            console.error("Error fetching categories:", err);
            return [];
        } finally {
            setLoading(false);
        }
    }, []);

    /**
     * Get products from cache if available, otherwise from state
     */
    const getProductsByCategorySync = useCallback((category) => {
        return categoryCache[category] || [];
    }, [categoryCache]);

    /**
     * Clear error
     */
    const clearError = useCallback(() => {
        setError(null);
    }, []);

    /**
     * Clear all caches
     */
    const clearCache = useCallback(() => {
        setCategoryCache({});
        setAllProducts([]);
        setFeaturedProducts([]);
    }, []);

    // Load initial data on mount
    useEffect(() => {
        fetchAllProducts();
        fetchFeaturedProducts();
        fetchCategories();
    }, [fetchAllProducts, fetchFeaturedProducts, fetchCategories]);

    const value = {
        // State
        allProducts,
        featuredProducts,
        categories,
        loading,
        error,
        
        // Functions
        fetchAllProducts,
        fetchFeaturedProducts,
        fetchProductsByCategory,
        fetchProductById,
        searchProducts,
        fetchProductsByIds,
        fetchCategories,
        getProductsByCategory: getProductsByCategorySync,
        clearError,
        clearCache,
    };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};


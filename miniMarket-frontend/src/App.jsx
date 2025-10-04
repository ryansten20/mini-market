import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                <Nav />
                <main className="flex-grow container mx-auto px-4 py-6">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products/:id" element={<Product />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;

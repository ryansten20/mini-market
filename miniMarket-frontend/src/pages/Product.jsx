import { useParams } from "react-router-dom";

export default function Product() {
    const { id } = useParams();
    return (
        <div>
            <h1 className="text-2xl font-bold">Product Page</h1>
            <p className="mt-2 text-gray-600">Viewing product with ID: {id}</p>
        </div>
    );
}

import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

const Home = () => {
    const loadedCoffees = useLoaderData();

    const [coffees, setCoffees] = useState(loadedCoffees)

    return (
        <div className="m-20">
            <h1 className="text-4xl text-purple-500 font-bold text-center">Hot Hot Cold Coffee:</h1>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    coffees.map(coffee => <CoffeeCard 
                        key={coffee._id} 
                        coffees={coffees}
                        setCoffees={setCoffees}
                        coffee={coffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;
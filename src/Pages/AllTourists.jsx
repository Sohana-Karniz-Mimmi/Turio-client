import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Coffee from "../Components/Coffee";

const AllTourists = () => {

    const loadedCoffee = useLoaderData()
    // console.log(loadedCoffee);
    const [coffees, setCoffees] = useState(loadedCoffee)

    return (
        <div className=" container mx-auto">
            <div>
                <h2 className="text-2xl font-bold text-center py-5">Total Coffee {loadedCoffee.length}</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 container mx-auto">
                {
                    coffees.map(coffee => <Coffee
                        key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                        >
                    </Coffee>)
                }
            </div>
        </div>
    );
};

export default AllTourists;
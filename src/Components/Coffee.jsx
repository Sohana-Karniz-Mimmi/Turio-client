import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Coffee = ({ coffee, setCoffees, coffees }) => {

    const { _id, name, chef, supplier, taste, photo } = coffee;

    // const handleDelete = _id => {
    //     // console.log(_id);
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             fetch(`http://localhost:5000/tourists/${_id}`, {
    //                 method: 'DELETE',
    //                 headers: { 'content-type': 'application/json' }
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire({
    //                             title: "Deleted!",
    //                             text: "Your file has been deleted.",
    //                             icon: "success"
    //                         });
    //                         const remaining = coffees.filter(coffeeId => coffeeId._id !== _id);
    //                         setCoffees(remaining);
    //                     }
    //                     console.log('Coffee deleted', data);
    //                 })
    //         }
    //     });


    // }

    return (
        <div>
            <div className="card card-side bg-base-100 justify-around items-center pr-8 shadow-xl">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="flex justify-between gap-8">
                    <div>
                        <h2 className="card-title">Name : {name}</h2>
                        <p>Chef : {chef}</p>
                        <p>Chef : {taste}</p>
                        <p>Chef : {supplier}</p>
                        <p>Price : $20</p>
                    </div>
                    <div className="">
                        <div className="join join-vertical space-y-3">
                            <button className="btn join-item text-white bg-green-500">View</button>
                            <Link to={`/updateCoffee/${_id}`} className="btn join-item">Edit</Link>
                            <button onClick={() => handleDelete(_id)} className="btn join-item text-white bg-red-500">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Coffee.propTypes = {
    coffee: PropTypes.object.isRequired,
    setCoffees: PropTypes.func.isRequired,
    coffees: PropTypes.array.isRequired,
};

export default Coffee;
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees,  setCoffees}) => {

    const { _id, name, quantity, suppiler, taste, category, details, photoURL } = coffee;

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                console.log('delete confirm');
                fetch(`http://localhost:5555/coffee/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id != _id);
                            setCoffees(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl my-20">
            <figure><img src={photoURL} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4 my-4">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{quantity}</p>
                    <p>{suppiler}</p>
                    <p>{taste}</p>
                </div>
                <div className="btn-group btn-group-vertical space-y-2">
                    <button className="btn">View</button>
                    <Link to={`UpdateCoffee/${_id}`} className="btn">
                        <button>Edit</button>
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn ">X</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
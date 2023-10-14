import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, suppiler, taste, category, details, photoURL } = coffee;

    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const suppiler = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.category.value;
        const photoURL = form.photoURL.value;

        const updatedCoffee = {
            name, quantity, suppiler, taste, category, details, photoURL
        }

        console.log(updatedCoffee);

        fetch(`http://localhost:5555/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Coffee updated succesfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div className="flex flex-col items-center justify-center bg-base-200 py-10 px-4">
            <h1 className="text-3xl font-bold my-8">Update Coffee</h1>
            <form onSubmit={handleUpdateCoffee} className="w-full md:w-2/3 mx-auto">
                {/* Name */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={name} name="name" type="text" placeholder="Coffee name" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Quantity */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={quantity} name="quantity" type="text" placeholder="Available quantity" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* supplier row */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Supplier Name</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={suppiler} name="supplier" type="text" placeholder="Supplier" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Taste */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={taste} name="taste" type="text" placeholder="Taste" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Category */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={category} name="category" type="text" placeholder="Category" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Details */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={details} name="details" type="text" placeholder="Details" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Photo URL */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={photoURL} name="photoURL" type="text" placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* submit button */}
                <div className="form-control w-full mt-8">
                    <label className="input-group">
                        <input name="submit" type="submit" value="Add New" className="input input-bordered w-full bg-orange-500 text-white hover:cursor-pointer hover:bg-orange-600" />
                    </label>
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;
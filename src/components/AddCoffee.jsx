
const AddCofee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const suppiler = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.category.value;
        const photoURL = form.photoURL.value;
        console.log(name, quantity, suppiler, taste, category, details, photoURL);
    }


    return (
        <div className="flex flex-col items-center justify-center bg-base-300 py-10">
            <h1 className="text-3xl font-bold my-8">Add Coffee</h1>
            <form onSubmit={handleAddCoffee} className="w-full md:w-2/3 mx-auto">
                {/* Name */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                    <label className="input-group">
                        <input  name="name" type="text" placeholder="Coffee name" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Quantity */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        <input name="quantity" type="text" placeholder="Available quantity" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* supplier row */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Supplier Name</span>
                    </label>
                    <label className="input-group">
                        <input name="supplier" type="text" placeholder="Supplier" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Taste */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">
                        <input name="taste" type="text" placeholder="Taste" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Category */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <input name="category" type="text" placeholder="Category" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Details */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        <input name="details" type="text" placeholder="Details" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Photo URL */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input name="photoURL" type="text" placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* submit button */}
                <div className="form-control w-full mt-8">
                    <label className="input-group">
                        <input name="submit" type="submit" value="Add New" className="input input-bordered w-full bg-orange-500 text-white" />
                    </label>
                </div>
            </form>
        </div>
    );
};

export default AddCofee;
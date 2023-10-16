import React from "react";
import Swal from 'sweetalert2'
const Form = () => {

  const handleForm = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const userInfo = {name,price,photo, supplier,taste,category,details,}
     

    fetch(`https://coffe-server-site.vercel.app/coffees`, {
      method : 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data =>  {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Successfull!',
          text: 'Added Successfully',
          icon: 'success',
          confirmButtonText: 'Done'
        })
        form.reset()
      }
    })
  }



  return (
    <div className="w-full">
      <div className="bg-[#F4F3F0] w-full md:w-9/12 mx-auto p-8 md:p-20 md:mt-20">
        <div className="text-center">
          <h1 className="font-philospar drop-shadow-lg  font-bold text-4xl mb-3">
            Add New Coffee
          </h1>
          <p className=" font-yantraman font-light text-lg ">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point{" "}
            <br />
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed <br /> to using Content here.
          </p>
        </div>

        <form onSubmit={handleForm}>
          <div className="md:flex gap-7 mt-10 ">
            <div className="md:w-1/2">
              <label className="font-philospar" htmlFor="">
                Name
                <input
                  className="w-full outline-none b-white px-3 py-2 mt-2 rounded"
                  type="text"
                  name="name"
                  id=""
                />
              </label>
            </div>
            <div className="md:w-1/2">
              <label className="font-philospar" htmlFor="">
                Price
                <input
                  className="w-full mt-2 outline-none b-white px-3 py-2 rounded"
                  type="text"
                  name="price"
                  id=""
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-7 mt-3">
            <div className="md:w-1/2">
              <label className="font-philospar" htmlFor="">
                Supplier
                <input
                  className="w-full outline-none b-white px-3 py-2 mt-2 rounded"
                  type="text"
                  name="supplier"
                  id=""
                />
              </label>
            </div>
            <div className="md:w-1/2">
              <label className="font-philospar" htmlFor="">
                Taste
                <input
                  className="w-full mt-2 outline-none b-white px-3 py-2 rounded"
                  type="text"
                  name="taste"
                  id=""
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-7 mt-3 ">
            <div className="md:w-1/2">
              <label className="font-philospar" htmlFor="">
                Category
                <input
                  className="w-full outline-none b-white px-3 py-2 mt-2 rounded"
                  type="text"
                  name="category"
                  id=""
                />
              </label>
            </div>
            <div className="md:w-1/2">
              <label className="font-philospar" htmlFor="">
                Dettails
                <input
                  className="w-full mt-2 outline-none b-white px-3 py-2 rounded"
                  type="text"
                  name="details"
                  id=""
                />
              </label>
            </div>
          </div>
          <div className="w-full mt-2">
            <label className="font-philospar" htmlFor="">
              Photo
              <input
                className="w-full mt-2 outline-none b-white px-3 py-2 rounded"
                type="url"
                name="photo"
                id=""
              />
            </label>
          </div>
          <button className="w-full bg-[#D2B48C] font-philospar mt-5 py-2 text-lg rounded">
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

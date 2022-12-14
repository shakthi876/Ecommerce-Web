import React from 'react'
import { API } from "../../backend";

const Imagehelper = ({product}) => {
    //Giving Default Image
    const imageUrl = product ? `${API}/product/photo/${product._id}`:"https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  return (
    <>

          <div className="">
            <img
              src={imageUrl}
              alt="photo"
              style={{ maxHeight: "80%", maxWidth: "80%" }}
              className="mb-3 rounded"
            />
          </div>
    </>
  )
}

export default Imagehelper
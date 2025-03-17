import React from 'react';

function BlogCard({ Img1 }) {

  return (

    <div>

      <div id="card" 

        className="mb-7 rounded-lg p-4 shadow-lg transition-all duration-500 hover:scale-[1.01] hover:shadow-xl">

        <div className="overflow-hidden rounded-lg">

          <img 

            src={Img1} 

            alt="blog image" 

            className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"

          />

        </div>

  

        <div className="space-y-3 py-3">

          <h1 className="line-clamp-1 text-xl font-bold">How to lorem.</h1>

          <p className="line-clamp-2">

            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis aspernatur laboriosam alias voluptate expedita voluptatum laborum maxime velit, sed perspiciatis placeat, repudiandae suscipit provident labore, odio tenetur ipsum mollitia numquam.

          </p>

        </div>

      </div>

    </div>

  );

}

export default BlogCard;
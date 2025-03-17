import React from 'react'
import Img1 from "../../assets/blog1.jpg"
import Img2 from "../../assets/blog2.jpg"
import Img3 from "../../assets/blog3.jpg"

function Blogs() {
  return (
    <div>
    <section className="container mb-10 py-8">
       <h1 className="mb-8 border-1 py-2 pl-2 text-center text-3xl font-bold ">
        Our LatesT Blogs
        </h1>   
      
       <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
<div
id="card"
className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl  dark:bg-slate-950"
>
<div className="overflow-hidden">
    <img src={Img1} alt="no image" className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-3 hover:scale-100 " />
</div>

<div className="flex justify-between pt-2 text-slate-600">
<p>June 24, 2024</p>
<p className="line-clamp-1">By Me</p>
</div>





<div className="space-y-3 py-3">
<h1 className="text-xl font-bold line-clamp-1">
How to grow your nice business lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. At veniam maxime fugit nam rerum natus facilis laboriosam iste vel molestiae, consequatur voluptatum ex sed voluptatem laudantium, vitae a voluptate ut?
</h1>



<p className="line-clamp-2">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis eveniet veritatis inventore illo reprehenderit accusantium hic, consequatur, temporibus voluptas voluptate dolores repellendus mollitia omnis quas, eum labore perspiciatis quam iure.
</p>
</div>

</div>

<div id="card" className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950">
<div className="overflow-hidden">
    <img src={Img2} alt="no image" className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-3 hover:scale-100 " />
<div className="flex justify-between pt-2 text-slate-600">
  <p>Jan 3, 2025</p>  
<p className="line-clamp-1">By Toto </p>
</div>

<div className="space-y-3 py-3">
<h1 className="line-clamp-1 text-xl font-bold">
    How to grow the business.
</h1>
<p  className="line-clamp-2">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis eveniet veritatis inventore illo reprehenderit accusantium hic, consequatur, temporibus voluptas voluptate dolores repellendus mollitia omnis quas, eum labore perspiciatis quam iure.
</p>
</div>
</div>
</div>
<div id="card"
className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950">
<div className="overflow-hidden">
<img src={Img3} alt="no image" className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-100"/>
</div>

<div className="flex justify-between pt-2 text-slate-600">
<p> July 3, 2024</p>
<p>By Harshit</p>
</div>
 

<div className="space-y-3 py-3">
<h1 className="text-xl font-bold line-clamp-1">
    How to grow the business.
</h1>
<p className="line-clamp-2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis, vitae error quaerat consectetur fugit nostrum rerum dignissimos unde aliquam nihil distinctio consequatur expedita. Veritatis commodi blanditiis obcaecati repellendus laboriosam!
</p>
</div>
</div>
       </div>
       
        </section>  
    </div>
  )
}

export default Blogs

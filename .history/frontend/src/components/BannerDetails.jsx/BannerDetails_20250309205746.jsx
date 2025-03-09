import React from 'react'



function BannerDetails() {
  return (
    <main className="bg-primary">

        <section className="container py-8 md:py-12">


            <div className="grid grid-cols-1 items-center gap-4 sm:text-ellipsis md:grid-cols-3 md:gap-8">
<div className="order-2 flex flex-col items-center gap-4 text-center text-white md:col-span-2 md:items-start md:text-left">
<h1 className="text-3xl font-bold">
    

</h1>
<p>

</p>
<b>

</b>
</div>
<div  className="order-1">
<iframe 
className="aspect-video w-full"
s  rc="https://www.youtube.com/watch?v=esaioTgia4Q&list=PPSV" 
title="Youtube Video Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share allowfullscreen"></iframe>


</div>

            </div>



        </section>
      
    </main>
  )
}

export default BannerDetails

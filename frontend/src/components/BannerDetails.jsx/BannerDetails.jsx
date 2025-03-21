import React from 'react'

function BannerDetails() {
  return (
    <main className="bg-violet-600 dark:bg-slate-700 mt-5">
        <section className="container py-8 md:py-10 mt-2">
            <div className="grid grid-cols-1 items-center gap-6 sm:text-ellipsis md:grid-cols-3 md:gap-8 ">
                <div className="order-2 flex flex-col items-center gap-4 text-center text-white md:col-span-2 md:items-start md:text-left">
                    <h1 className="text-3xl font-bold">
                        Market your Brand
                    </h1>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
                        ipsam officia fugit soluta blanditiis totam saepe quisquam doloremque 
                        ipsum impedit.
                    </p>
                    <button className="rounded-md bg-white px-4 py-2 text-sm text-black transition-colors duration-300 hover:bg-white/60">
                        GET Started
                    </button>
                </div>
                <div className="order-1">
                    <iframe 
                        className="aspect-video w-full"
                        src="https://www.youtube.com/embed/cxb2pY_DQDw" 
                        title="Youtube Video Player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </section>
    </main>
  )
}



export default BannerDetails

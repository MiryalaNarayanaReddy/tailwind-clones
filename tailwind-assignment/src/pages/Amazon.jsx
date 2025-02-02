


function Navbar() {
    return (

        <div className="w-full h-10 bg-black sticky top-0 shadow-lg text-white  flex flex-row flex-nowrap justify-start items-center ">
            <div>
                <img src="/amazon/amazon-icon.png" alt="amazon" className="h-14 p-2 " />
            </div>

            {/* deliver */}

            <div className="flex flex-col h-10 justify-center w-fit hover:bg-neutral-700 hover:cursor-pointer">
                <div className="text-xs ">
                    Deliver to
                </div>

                <div className="text-xs font-semibold">
                    India
                </div>
            </div>


            {/* search */}

            <div className="flex flex-col h-10 justify-center w-fit hover:bg-neutral-400">
                <div className="text-xs ">
                    Search
                </div>
            </div>


        </div>
    )
}



function HeroCard() {
    return (
        <img src="/amazon/hero-card.jpg" alt="amazon" className="w-full h-full -z-1" />
    )
}


function ItemCard({ imgUrl, name }) {
    return (
        <div className="col-span-1 bg-white hover:cursor-pointer p-2 m-2 ">
            <img src={imgUrl} alt="amazon" className="w-full h-full rounded-lg" />
            <div className=" text-xs w-full text-start">
                {name}
            </div>
        </div>
    )
}


function FourItemCard({ title, card, next }) {
    return (
        <div className="flex flex-col justify-start items-start w-fit h-fit p-5 shadow-lg ">

            <div className="text-xl font-semibold text-center p-2 m-2">
                {title}
            </div>

            <div className="grid grid-cols-2 gap-4 w-56">


                {card.map((item, index) => {
                    return <ItemCard key={index} imgUrl={item.imgUrl} name={item.name} />
                })}

            </div>

            <div className="mt-5">
                <a href="https://www.amazon.in/" className="text-xs text-center text-blue-500 hover:underline">
                
                    {next}
                </a>
            </div>
        </div>
    )


}


const card1 = [
    {
        imgUrl: "/amazon/4/1/headset.jpg",
        name: "Headsets"
    },
    {
        imgUrl: "/amazon/4/1/keyboard.jpg",
        name: "Keyboards"
    },
    {
        imgUrl: "/amazon/4/1/mouse.jpg",
        name: "Computer Mice"
    },
    {
        imgUrl: "/amazon/4/1/chair.jpg",
        name: "Chairs"
    }
]





function Amazon() {


    return (
        <>
            <Navbar />
            <HeroCard />

            <FourItemCard title={"Gaming accessories"} card={card1} next={"See more"} />


        </>

    )
}

export default Amazon
import { fourCards } from "./data"


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
        <img src="/amazon/hero-card.jpg" alt="amazon" className=" flex m-auto  w-[1600px] -z-10" />
    )
}


function ItemCard({ imgUrl, name }) {
    return (
        <div className="col-span-1 hover:cursor-pointer mt-2 ">
            <img src={imgUrl} alt="amazon" className="w-full" />
            <div className="text-xs w-full text-start">
                {name}
            </div>
        </div>
    )
}


function FourItemCard({ card }) {
    return (
        <div className="flex flex-col justify-start items-start w-96 h-[400px] p-5 shadow-md bg-white ">

            <div className="text-lg font-semibold text-start text-nowrap mb-3 w-72">
                {card.title}
            </div>

            <div className="grid grid-cols-2 gap-4 w-full">


                {card.items.map((item, index) => {
                    return <ItemCard key={index} imgUrl={item.imgUrl} name={item.name} />
                })}

            </div>

            <div className="mt-3 w-72">
                <a href="https://www.amazon.in/" className="text-xs text-center text-blue-500 hover:underline">

                    {card.next}
                </a>
            </div>
        </div>
    )


}


function Amazon() {


    return (
        <div className="bg-neutral-200">
            <Navbar />
            <HeroCard />

            <div className="flex flex-col -mt-96 w-[1600px] m-auto p-5">

                <div className="flex flex-row w-[1600px] m-auto p-5">

                    <div className=" bg-white  text-xs text-center p-2 w-full">
                        You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. Click here to go to amazon.in
                    </div>
                </div>

                <div className="flex flex-row gap-5  w-full m-auto p-5">

                    <FourItemCard card={fourCards[0]} />
                    <FourItemCard card={fourCards[1]} />
                    <FourItemCard card={fourCards[1]} />
                    <FourItemCard card={fourCards[1]} />
                </div>

                <div className="flex flex-row gap-5  w-full m-auto p-5">

                    <FourItemCard card={fourCards[0]} />
                    <FourItemCard card={fourCards[1]} />
                    <FourItemCard card={fourCards[1]} />
                    <FourItemCard card={fourCards[1]} />
                </div>

                <div className="flex flex-row gap-5  w-full m-auto p-5">

<FourItemCard card={fourCards[0]} />
<FourItemCard card={fourCards[0]} />
<FourItemCard card={fourCards[1]} />
<FourItemCard card={fourCards[1]} />
</div>


            </div>

        </div>

    )
}

export default Amazon

import { useEffect, useState } from "react"


function ExtensionCard({imgUrl,title,description,downloadText}){
    return (

        <div className="flex flex-col justify-center items-center shadow-xl rounded-lg gap-10 mt-10 pb-5 w-[95%]">

        <img src={imgUrl} width={100}></img>
        <div className="text-2xl font-bold ">
            {title}
        </div>
        <div className="text-xl text-neutral-400">
            {description}
        </div>


        <div className="w-full flex flex-row justify-between items-center gap-2 overflow-clip">
            {
                Array(10).fill(0).map((_, index) => {
                    return <div className="w-2 h-2 p-1  bg-neutral-400 rounded-lg"></div>

                })
            }
        </div>

        <button className="bg-blue-500 w-[70%] text-white  font-bold text-xl px-8 py-4 rounded-lg hover:bg-white hover:text-black hover:cursor-pointer border-4 hover : border-blue-500">
            {downloadText}
        </button>
    </div>
    )
}



function BookmarkClone() {


    const [selectedFeature, setSelectedFeature] = useState(0)
    const [featureImages, setFeatureImages] = useState([
        "/bookmark/illustration-features-tab-1.svg",
        "/bookmark/illustration-features-tab-2.svg",
        "/bookmark/illustration-features-tab-3.svg",
    ])

    const [extensions, setExtensions] = useState([
        "/bookmark/logo-chrome.svg",
        "/bookmark/logo-firefox.svg",
        "/bookmark/logo-opera.svg",
    ])

    useEffect(() => {
        console.log("selectedFeature", selectedFeature)
    }, [selectedFeature])


    const handleFeatureClick = (feature) => {
        setSelectedFeature(feature)

    }

    const handleClick = () => {
        console.log("clicked")
    }


    return (
        <div className="font-sans">
            <div className="flex flex-row justify-around items-center mt-18 p-2 gap-14 " >
                <img src="/bookmark/logo-bookmark.svg" width={165}></img>
                <img src="/bookmark/menu.svg" onClick={handleClick} width={50} className="cursor-pointer hover:bg-neutral-200 rounded-t-lg">
                </img>
            </div>

            <div className="flex flex-col justify-center items-center p-10 gap-10 mt-10">

                <img src="/bookmark/illustration-hero.svg" className="w-[90%]"></img>

                <div className="text-5xl font-bold mt-5 text-center">
                    A Simple Bookmark Manager
                </div>


                <div className="text-3xl text-neutral-400 mt-5 text-center">
                    A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
                </div>

                <div className="flex flex-row justify-around items-center mt-10 gap-10 p-10">
                    <button className="bg-blue-500 text-white  font-bold text-xl px-8 py-4 rounded-lg hover:bg-white hover:text-black hover:cursor-pointer border-4 hover : border-blue-500">
                        Get it On Chrome
                    </button>

                    <button className="bg-neutral-300 text-black font-bold text-xl px-8 py-4 rounded-lg hover:bg-white hover:text-neutral-600 hover:cursor-pointer border-4 hover : border-neutral-300">
                        Get it On Firefox
                    </button>
                </div>

                <div className="text-5xl font-bold mt-5 text-center">
                    Features
                </div>
                <div className="text-3xl text-neutral-400 mt-5 text-center">
                    Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
                </div>



                {/* info of features */}

                <div className="flex flex-col justify-around items-center text-3xl text-nowrap font-medium text-gray-500 gap-10 p-10 border-b-8 border-b-red-600">
                    <button onClick={() => handleFeatureClick(0)} className={`pb-8 hover:text-red-600 hover:cursor-pointer ${selectedFeature === 0 ? " border-b-8 border-b-red-600" : "border-b-4 border-neutral-400 w-full"}`}>
                        Simple Bookmarking
                    </button>

                    <button onClick={() => handleFeatureClick(1)} className={`pb-8 hover:text-red-600 hover:cursor-pointer ${selectedFeature === 1 ? " border-b-8 border-b-red-600" : "border-b-4 border-neutral-400 w-full"}`}>
                        Speedy Searching
                    </button>

                    <button onClick={() => handleFeatureClick(2)} className={`pb-8 hover:text-red-600 hover:cursor-pointer ${selectedFeature === 2 ? " border-b-8 border-b-red-600" : "border-b-4 border-neutral-400 w-full"}`}>
                        Easy Sharing
                    </button>
                </div>



                <img src={featureImages[selectedFeature]} className="w-[90%]"></img>






                <div className="text-5xl font-bold mt-5 text-center">
                    Bookmark in one click
                </div>
                <div className="text-3xl text-neutral-400 mt-5 text-center">
                    Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
                </div>



                <div className="flex flex-row justify-around items-center gap-10 p-10">
                    <button className="bg-blue-500 text-white  font-bold text-xl px-8 py-4 rounded-lg hover:bg-white hover:text-black hover:cursor-pointer border-4 hover : border-blue-500">
                        More Info
                    </button>
                </div>


                <div className="text-5xl font-bold mt-5 text-center">
                    Download the extension
                </div>
                <div className="text-3xl text-neutral-400 mt-5 text-center">
                    We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
                </div>


                <ExtensionCard imgUrl={extensions[0]} title="Add to Chrome" description="Minimum Version 62" downloadText="Add & Install Extension" />
                <ExtensionCard imgUrl={extensions[1]} title="Add to Firefox" description="Minimum Version 55" downloadText="Add & Install Extension" />
                <ExtensionCard imgUrl={extensions[2]} title="Add to Opera" description="Minimum Version 46" downloadText="Add & Install Extension" />




            </div>
        </div>
    )
}

export default BookmarkClone;
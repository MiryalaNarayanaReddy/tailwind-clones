import { useState } from "react"
import questions from "./questions"
import { use } from "react"
import { useEffect } from "react"


function PlayButton() {
    return (
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path></svg>

    )
}

function SideBarMenu() {
    return (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="sidebar"
            role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
                fill="currentColor"
                d="M224 80V432H448c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H224zM0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 24c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H88c-13.3 0-24 10.7-24 24zm24 72c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H88zM64 312c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H88c-13.3 0-24 10.7-24 24z">
            </path>
        </svg>
    )
}

function FilterIcon() {
    return (
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="filter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 73.7C0 50.7 18.7 32 41.7 32H470.3c23 0 41.7 18.7 41.7 41.7c0 9.6-3.3 18.9-9.4 26.3L336 304.5V447.7c0 17.8-14.5 32.3-32.3 32.3c-7.3 0-14.4-2.5-20.1-7l-92.5-73.4c-9.6-7.6-15.1-19.1-15.1-31.3V304.5L9.4 100C3.3 92.6 0 83.3 0 73.7zM55 80L218.6 280.8c3.5 4.3 5.4 9.6 5.4 15.2v68.4l64 50.8V296c0-5.5 1.9-10.9 5.4-15.2L457 80H55z"></path></svg>
    )
}

function FavouriteCard({ hideSideBar, toggleSideBar }) {
    return (
        <div className="bg-neutral-800 p-5 mt-6  mb-6 w-[90%] ml-auto mr-auto rounded-lg h-fit ">




            <div className={`${hideSideBar ? "lg:hidden" : "lg:block"} w-10 h-10 hover:cursor-pointer border-neutral-600 border-2 p-2 rounded-lg hover:cusor-pointer`}
                onClick={toggleSideBar} >
                <SideBarMenu />
            </div>


            <div className="flex flex-col justify-start items-center gap-5 mt-5">

                <img src="/leetcode-fav.png" width={100} height={100}></img>

                <div className="text-3xl font-bold" > Favourite </div>
                <div className="text-base" > Narayana <span> · </span> 8 questions <span> · </span>  private</div>
                <button className="bg-white px-6 py-2  rounded-4xl text-black flex flex-row gap-2">

                    <div className="w-4 h-4" >
                        <PlayButton />
                    </div>

                    Practice
                </button>

            </div>

            <div className="w-fit ml-5 bg-neutral-700 mt-6 rounded-lg p-3">

                Progress: 19 Solved &gt;

            </div>

        </div>
    )

}



function ListItem({ question, index }) {

    // show id. question and  (dificaulty flex to end)
    return (
        <div className={`flex justify-between items-center p-5 ${index % 2 == 0 ? "bg-neutral-800" : "bg-transparent"} border-1 border-transparent hover:border-neutral-600  hover:cursor-pointer mx-10 rounded-lg mt-5`}>
            <div className="flex gap-5">
                <div className="text-lg font-bold"> {question.id} </div>
                <div> {question.question} </div>
            </div>
            <div> {question.difficulty} </div>
        </div>
    )
}

function SideBar({ toggleSideBar }) {
    return (

        <div className="bg-neutral-800 p-5  w-[90%] ml-auto mr-auto rounded-lg h-screen position-fixed ">

            <div className="flex flex-col gap-5">
                <div className="flex flex-row justify-between items-center">

                    <div className="text-2xl font-bold "> My Lists </div>
                    <div className="w-6 h-6" onClick={toggleSideBar} >
                        <SideBarMenu />
                    </div>
                </div>
            </div>

            <div className="font-bold text-xl my-2 p-2">
                Created by me
            </div>
            <div className="flex flex-row justify-start items-center p-2 bg-neutral-700 rounded-lg gap-2">


                <img src="/leetcode-fav.png" width={20} height={20}
                    className="rounded-md">
                </img>


                <div>
                    Favorite
                </div>
            </div>

        </div>

    )
}

function FitlerDialog({ difficultyFilter, setDifficultyFilter, statusFilter, setStatusFilter }) {

    const handleResetFilter = () => {
        setDifficultyFilter({ easy: false, medium: false, hard: false })
        setStatusFilter({ solved: false, unsolved: false, attempted: false })
    }


    return (

        <div className="bg-neutral-700 p-5 mt-6  mb-6 w-fit ml-auto mr-auto rounded-lg h-fit ">

            <div className="flex flex-col gap-5">
                <div className="text-2xl font-bold"> Filter </div>

                <div className="flex flex-col gap-5">
                    <div className="text-lg font-bold"> Status </div>
                    <div className="flex gap-5">
                        <div className="flex items-center gap-2">
                            <input
                                // check box bg black and tick black  and border white
                                className="rounded-lg border-1 border-white "
                                type="checkbox" checked={statusFilter.solved} onChange={(e) => setStatusFilter({ ...statusFilter, solved: e.target.checked })} />
                            <div> Solved </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <input className="rounded-lg border-1 border-white" type="checkbox" checked={statusFilter.unsolved} onChange={(e) => setStatusFilter({ ...statusFilter, unsolved: e.target.checked })} />
                            <div> Unsolved </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <input className="rounded-lg border-1 border-white" type="checkbox" checked={statusFilter.attempted} onChange={(e) => setStatusFilter({ ...statusFilter, attempted: e.target.checked })} />
                            <div> Attempted </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <div className="text-lg font-bold"> Difficulty </div>
                    <div className="flex gap-5">
                        <div className="flex items-center gap-2">
                            <input className="rounded-lg border-1 border-white" type="checkbox" checked={difficultyFilter.easy} onChange={(e) => setDifficultyFilter({ ...difficultyFilter, easy: e.target.checked })} />
                            <div> Easy </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <input className="rounded-lg border-1 border-white" type="checkbox" checked={difficultyFilter.medium} onChange={(e) => setDifficultyFilter({ ...difficultyFilter, medium: e.target.checked })} />
                            <div> Medium </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <input className="rounded-lg border-1 border-white" type="checkbox" checked={difficultyFilter.hard} onChange={(e) => setDifficultyFilter({ ...difficultyFilter, hard: e.target.checked })} />
                            <div> Hard </div>
                        </div>
                    </div>
                </div>

                <button className="bg-white px-6 py-2  rounded-4xl text-black flex flex-row gap-2 hover:cursor-pointer hover:bg-neutral-300 "
                    onClick={handleResetFilter}
                >

                    Reset
                </button>
            </div>
        </div>

    )
}

function FilterAppliedButton({ applied, filter, handleClearFilter }) {

    if (applied)
        return (
            <div className="flex flex-row gap-1 justify-center items-center bg-neutral-600 py-1 px-2 ml-2 rounded-xl text-sm w-fit"> {filter}

                <div className="flex flex-col justify-center gap-2">
                    <div className="flex flex-row justify-center items-center w-4 h-4 rounded-full text-black text-sm font-bold hover:bg-neutral-400 hover:cursor-pointer bg-neutral-500 "
                        onClick={handleClearFilter}
                    >x</div>
                </div>
            </div>
        )
    else {
        return null;
    }
}


function RenderFitlers({ difficultyFilter, setDifficultyFilter, statusFilter, setStatusFilter }) {
    return (
        <>

            <FilterAppliedButton applied={difficultyFilter.easy} filter="Easy" handleClearFilter={() => setDifficultyFilter({ easy: false, medium: difficultyFilter.medium, hard: difficultyFilter.hard })} />
            <FilterAppliedButton applied={difficultyFilter.medium} filter="Medium" handleClearFilter={() => setDifficultyFilter({ easy: difficultyFilter.easy, medium: false, hard: difficultyFilter.hard })} />
            <FilterAppliedButton applied={difficultyFilter.hard} filter="Hard" handleClearFilter={() => setDifficultyFilter({ easy: difficultyFilter.easy, medium: difficultyFilter.medium, hard: false })} />

            <FilterAppliedButton applied={statusFilter.solved} filter="Solved" handleClearFilter={() => setStatusFilter({ solved: false, unsolved: statusFilter.unsolved, attempted: statusFilter.attempted })} />
            <FilterAppliedButton applied={statusFilter.unsolved} filter="Unsolved" handleClearFilter={() => setStatusFilter({ solved: statusFilter.solved, unsolved: false, attempted: statusFilter.attempted })} />
            <FilterAppliedButton applied={statusFilter.attempted} filter="Attempted" handleClearFilter={() => setStatusFilter({ solved: statusFilter.solved, unsolved: statusFilter.unsolved, attempted: false })} />

        </>
    )
}


function ListCard() {

    const [difficultyFilter, setDifficultyFilter] = useState({
        easy: true,
        medium: false,
        hard: false,
    })

    const [statusFilter, setStatusFilter] = useState({

        solved: false,
        unsolved: true,
        attempted: false,
    })


    const [questionsFiltered, setQuestionsFiltered] = useState(questions)


    // show filter dialog on click filter button in with absolute position

    const [showFilterDialog, setShowFilterDialog] = useState(false)

    const handleFilterButtonClick = () => {
        console.log("Filter button clicked")
        setShowFilterDialog(!showFilterDialog)

    }

    useEffect(() => {
        // console.log("difficultyFilter", difficultyFilter)
        // console.log("statusFilter", statusFilter)

        let _questionsFiltered = questions.filter((question) => {

            let difficulty = false
            let status = false

            if (difficultyFilter.easy && question.difficulty === "Easy") {
                difficulty = true
            }
            if (difficultyFilter.medium && question.difficulty === "Medium") {
                difficulty = true
            }
            if (difficultyFilter.hard && question.difficulty === "Hard") {
                difficulty = true
            }

            if (statusFilter.solved && question.status === "Solved") {
                status = true
            }
            if (statusFilter.unsolved && question.status === "Unsolved") {
                status = true
            }
            if (statusFilter.attempted && question.status === "Attempted") {
                status = true
            }

            // console.log(question)
            if(difficulty==false&&status==false){
                return false
            }
            return true
        })

        setQuestionsFiltered(_questionsFiltered)

        // console.log("questionsFiltered", _questionsFiltered)
    },[difficultyFilter, statusFilter])

    return (
        <div>

            <div className="flex flex-row justify-start items-center p-5 bg-neutral-800 rounded-lg mt-5">


                {/* filter button */}
                <button className="bg-white px-6 py-2 hover:cursor-pointer rounded-4xl text-black flex flex-row  font-bold items-center gap-2"
                    onClick={handleFilterButtonClick}
                >

                    <div className="w-4 h-4" >
                        <FilterIcon />
                    </div>
                    Filter
                </button>


                <RenderFitlers difficultyFilter={difficultyFilter} setDifficultyFilter={setDifficultyFilter} statusFilter={statusFilter} setStatusFilter={setStatusFilter} />

            </div>
            {/* filter dialog */}

            {
                showFilterDialog &&


                <div className="relative">
                    <div className="absolute top-0 left-0">
                        <FitlerDialog difficultyFilter={difficultyFilter} setDifficultyFilter={setDifficultyFilter} statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
                    </div>
                </div>
            }

            <div className="flex flex-col gap-5 mt-5 overflow-y-auto h-screen hide-scrollbar">

            {
                questionsFiltered.map((question, index) => {
                    return <ListItem question={question} index={index} />
                })
            }
            </div>
        </div>
    )
}


function LeetcodeClone() {

    const [hideSideBar, setHideSideBar] = useState(false)


    const toggleSideBar = () => {
        setHideSideBar(!hideSideBar)
    }

    useEffect(() => {
        // console.log("hideSideBar", hideSideBar)
    }
        , [hideSideBar])

    return (
        <div className="bg-black text-white grid grid-cols-6  lg:grid-cols-12">

            {

                hideSideBar &&

                <div className="col-span-2 hidden lg:block">
                    <SideBar toggleSideBar={toggleSideBar} />
                </div>

            }
            <div className="col-span-6 lg:col-span-4">

                <FavouriteCard hideSideBar={hideSideBar} toggleSideBar={toggleSideBar} />
            </div>


            <div className="col-span-6">
                <ListCard />
            </div>
        </div>
    )
}

export default LeetcodeClone;
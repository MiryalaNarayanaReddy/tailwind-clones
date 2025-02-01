import { useState } from "react"
import questions from "./questions"


function PlayButton(){
    return (
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path></svg>
                   
    )
}

function SideBarMenu(){
    return (
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="sidebar" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M224 80V432H448c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H224zM0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 24c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H88c-13.3 0-24 10.7-24 24zm24 72c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H88zM64 312c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H88c-13.3 0-24 10.7-24 24z"></path></svg>
    )
}

function FilterIcon(){
    return (
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="filter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 73.7C0 50.7 18.7 32 41.7 32H470.3c23 0 41.7 18.7 41.7 41.7c0 9.6-3.3 18.9-9.4 26.3L336 304.5V447.7c0 17.8-14.5 32.3-32.3 32.3c-7.3 0-14.4-2.5-20.1-7l-92.5-73.4c-9.6-7.6-15.1-19.1-15.1-31.3V304.5L9.4 100C3.3 92.6 0 83.3 0 73.7zM55 80L218.6 280.8c3.5 4.3 5.4 9.6 5.4 15.2v68.4l64 50.8V296c0-5.5 1.9-10.9 5.4-15.2L457 80H55z"></path></svg>
    )
}

function FavouriteCard(){
    return (
        <div className="bg-neutral-800 p-5 mt-6  mb-6 w-[90%] ml-auto mr-auto rounded-lg h-fit ">
                
            <div className="lg:hidden w-10 h-10 border-neutral-600 border-2 p-2 rounded-lg hover:cusor-pointer">
            <SideBarMenu/>
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



function ListItem({question,index}){

    // show id. question and  (dificaulty flex to end)
    return (
        <div className={`flex justify-between items-center p-5 ${index%2==0?"bg-neutral-800":"bg-transparent"} border-1 border-transparent hover:border-neutral-600  hover:cursor-pointer mx-10 rounded-lg mt-5`}>
            <div className="flex gap-5">
                <div className="text-lg font-bold"> {question.id} </div>
                <div> {question.question} </div>
            </div>
            <div> {question.difficulty} </div>
        </div>
    )
}


function FitlerDialog({difficultyFilter,setDifficultyFilter,statusFilter,setStatusFilter}){
    return (
        
        <div className="bg-neutral-800 p-5 mt-6  mb-6 w-[90%] ml-auto mr-auto rounded-lg h-fit ">

                <div className="flex flex-col gap-5">
                    <div className="text-2xl font-bold"> Filter </div>

                    <div className="flex flex-col gap-5">
                        <div className="text-lg font-bold"> Difficulty </div>
                        <div className="flex gap-5">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" checked={difficultyFilter.easy} onChange={(e) => setDifficultyFilter({...difficultyFilter,easy:e.target.checked})}/>
                                <div> Easy </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" checked={difficultyFilter.medium} onChange={(e) => setDifficultyFilter({...difficultyFilter,medium:e.target.checked})}/>
                                <div> Medium </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" checked={difficultyFilter.hard} onChange={(e) => setDifficultyFilter({...difficultyFilter,hard:e.target.checked})}/>
                                <div> Hard </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="text-lg font-bold"> Status </div>
                        <div className="flex gap-5">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" checked={statusFilter.solved} onChange={(e) => setStatusFilter({...statusFilter,solved:e.target.checked})}/>
                                <div> Solved </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" checked={statusFilter.unsolved} onChange={(e) => setStatusFilter({...statusFilter,unsolved:e.target.checked})}/>
                                <div> Unsolved </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" checked={statusFilter.attempted} onChange={(e) => setStatusFilter({...statusFilter,attempted:e.target.checked})}/>
                                <div> Attempted </div>
                            </div>
                        </div>
                    </div>

                    <button className="bg-white px-6 py-2  rounded-4xl text-black flex flex-row gap-2">

                        Apply
                    </button>


                </div>
                </div>

    )
}

function ListCard(){

    const [difficultyFilter,setDifficultyFilter] = useState({
        easy:false,
        medium:false,
        hard:false,
    })

    const [statusFilter,setStatusFilter] = useState({
        
        solved:false,
        unsolved:false,
        attempted:false,
    })


    const [questionsFiltered,setQuestionsFiltered] = useState(questions)


    // show filter dialog on click filter button in with absolute position

    const [showFilterDialog,setShowFilterDialog] = useState(false)

    const handleFilterButtonClick = () => {
        console.log("Filter button clicked")
        setShowFilterDialog(!showFilterDialog)

    }



     return (
        <div>

            {/* filter button */}
            <button className="bg-white px-6 py-2  rounded-4xl text-black flex flex-row  font-bold items-center gap-2"
            onClick={handleFilterButtonClick}
            >
                   
                   <div className="w-4 h-4" >
                    <FilterIcon />
                   </div>
                    Filter  
             </button>

            {/* filter dialog */}


{
                showFilterDialog && <FitlerDialog difficultyFilter={difficultyFilter} setDifficultyFilter={setDifficultyFilter} statusFilter={statusFilter} setStatusFilter={setStatusFilter}/>
}


            

            {
                questionsFiltered.map((question,index) => {
                    return <ListItem question={question} index={index}/>
                })
            }
        </div>
     )
}


function LeetcodeClone(){
    return (
        <div className="bg-black text-white grid grid-cols-6  lg:grid-cols-12">
            <div className="col-span-2 hidden lg:block">

            </div>
            <div className="col-span-6 lg:col-span-4">

             <FavouriteCard/>
            </div>
            
            
            <div className="col-span-6">
            <ListCard/>
            </div>
        </div>
    )
}

export default LeetcodeClone;
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import LeetcodeClone from "./pages/LeetcodeClone"
import BookmarkClone from "./pages/BookmarkClone"
import ShopifyClone from "./pages/ShopifyClone"
import Amazon from "./pages/Amazon"




function HomePage() {
  return (
    <div className="flex flex-col justify-center h-screen items-center gap-8">

      <div className="text-2xl w-fit text-center ">
        Tailwind CSS Assignments
      </div>

      <Link
        to="/leetcode"
        className="w-52 text-center bg-yellow-300 hover:bg-yellow-400 p-4  border-2 border-gray-950 shadow-lg rounded-lg hover:cursor-pointer font-semibold"
      >
        Leetcode Clone
      </Link>

      <Link
        to="/bookmark"
        className="w-52 text-center bg-blue-300 hover:bg-blue-400 p-4  border-2 border-gray-950 shadow-lg rounded-lg hover:cursor-pointer font-semibold"
      >
        Bookmark Clone
      </Link>


      <Link
        to="/shopify"
        className="w-52 text-center bg-green-300 hover:bg-green-400 p-4  border-2 border-gray-950 shadow-lg rounded-lg hover:cursor-pointer font-semibold"
      >
        Shopify Clone</Link>

        <Link
        to="/amazon"
        className="w-52 text-center bg-red-300 hover:bg-red-400 p-4  border-2 border-gray-950 shadow-lg rounded-lg hover:cursor-pointer font-semibold"
      >
        Amazon Clone</Link>
    </div>



    
  )
}

function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leetcode" element={<LeetcodeClone />} />
          <Route path="/bookmark" element={<BookmarkClone />} />
          <Route path="/shopify" element={<ShopifyClone />} />
          <Route path="/amazon" element={<Amazon />} />

        </Routes>
      </BrowserRouter>

    </div>


  )
}



export default App

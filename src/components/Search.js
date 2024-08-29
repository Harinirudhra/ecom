import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const[keyword,setkeyword]= useState("")
  const navigate=useNavigate()

  const searchHandler=()=>{
      navigate('/search?keyword='+keyword)
  }
  return (
    <div className="input-group">
        <input
          type="text"
          id="search_field"
          onChange={(e)=>setkeyword(e.target.value)}
          className="form-control"
          onBlur={searchHandler}
          placeholder="Enter Product Name ..."/>
        <div className="input-group-append">
               <button onClick={searchHandler} id="search_btn" className="btn">
                    <FaSearch className="fa fa-search" aria-hidden="true"></FaSearch>
               </button>
        </div>
      </div>
  )
}




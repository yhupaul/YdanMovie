import React from 'react';
// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import styled from "styled-components"
import styles from "../css/Header.css"

function Header() {
    const Group_obj = { 
        "High Rating": "minimum_rating=8", 
        "Romance": "genre=romance", 
        "Music": "genre=music", 
        "Animation": "genre=animation" 
      };
    const Group_key_arr = Object.keys(Group_obj);
    const [search, setSearch] = useState(null);
    //Event when u touch the Search Bar!
    const searchClick = (event) => {
          setSearch(event.target.value)
    }
    return (
      // It's the Navigation Bar, always above the container!!
      <header>
      {/*  Page Name */}
        <h1>
          <Link to={"/react-for-beginners"}>YdanMovie</Link>
        </h1>      
          {/* Group Links */}
        <nav>
        {
          Group_key_arr.map((key) => {
            return (
              <div className='genre'>
                <h3>
                  <Link to={`/page/${Group_obj[key]}/1`}>{key}
                  </Link>
                </h3>
              </div>
            )
          })
        }
        </nav>
        {/* Search Bar */}            
        <div class="search">
          <form class="form-wrapper">
            {/* Search Text */}
            <input
              type="text"
              placeholder="Search Movie!"
              value={search}
              onChange={searchClick}
              onMouseOut={() => { setSearch("") }}
            >
            </input>
            {/* Search Button */}
            <Link to={`/search/${search}`}>
              <button>
                <FontAwesomeIcon icon={faSearch} size="lg" />
              </button>
            </Link>
          </form>
        </div>                        
      </header>
      )
}

export default Header;
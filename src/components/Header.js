import React from 'react';
// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import styled from "styled-components"
import styles from "./Header.css"

function Header() {
  const Group_obj = { "High Rating": "minimum_rating=8", "Romance": "genre=romance", "Music": "genre=music", "Animation": "genre=animation" };
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
                <Link to={"/react-for-beginners"} >YdFLEX</Link>
            </h1>
            
            {/* Group Links */}
            <nav>
                {
                    Group_key_arr.map((key) => {
                        return (
                            <div className='genre'>
                                <h3>
                                    <Link
                                        to={`/page/${Group_obj[key]}/1`}
                                    >{key}</Link>
                                </h3>
                            </div>
                        )
                    })
                }
            </nav>
             {/* Search Bar */}
            <div>
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
                            <input type="submit" value="go" id="submit"></input>
                            {/* <button>
                                <FontAwesomeIcon icon={faSearch} size="lg" />
                            </button> */}
                        </Link>
                    </form>
                </div>
            </div>   
           
        </header>
    )
  // style
//   const Header = styled.header`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     width: 100%;
//     height: 60px;
//     padding: 0 20px;
//     border-bottom: 1px solid #000;
//     background-color: #000;
//     h1 {
//       margin: 0;
//       height: 100%;
//       line-height: 60px;

//       a {
//         text-decoration: none;
//         color: red;
//       }
//     }
//   `;

//   const Nav = styled.nav`
//     height: 100%;

//     ul {
//       height: 100%;
//       margin: 0;
//       padding: 0;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//     }

//     li {
//       list-style: none;
//       padding: 0 20px;
//     }

//     a {
//       display: block;
//       width: 100%;
//       height: 100%;
//       text-decoration: none;
//       text-transform: uppercase;
//       font-weight: 600;
//       color: #fff;
//     }
//   `;

//   return (
//     <Header>
//       <h1 className='logo'>
//         <Link to='/react-for-beginners'>YDanMovies</Link>
//       </h1>
//       {/* <Nav>
//         <ul>
//           <li>
//             <Link to='/movie/animation'>Animation</Link>
//           </li>
//           <li>
//             <Link to='/movie/sci-fi'>Science Fiction</Link>
//           </li>
//           <li>
//             <Link to='/movie/romance'>Romance</Link>
//           </li>
//         </ul>
//       </Nav> */}
//     </Header>
//   );
}

export default Header;
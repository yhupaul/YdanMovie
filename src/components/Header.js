import React from 'react';
// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  const Group_obj = { "High Rating": "minimum_rating=8", "Romance": "genre=romance", "Music": "genre=music", "Animation": "genre=animation" };
const Group_key_arr = Object.keys(Group_obj);

// const [search, setSearch] = useState(null);

    // Event when u touch the Search Bar!
    // const searchClick = (event) => {
    //     setSearch(event.target.value)
    // }

    return (
        // It's the Navigation Bar, always above the container!!
        <div>
            {/*  Page Name */}
            <div>
                <Link to={"/react-for-beginners"} >YdFLEX</Link>
            </div>

            {/* Group Links */}
            <div>
                {
                    Group_key_arr.map((key) => {
                        return (
                            <div>
                                <div>
                                    <Link
                                        to={`/page/${Group_obj[key]}/1`}
                                    >{key}</Link>
                                </div>
                            </div>
                        )
                    })
                }
                {/* 🎄 Merry Christmas!
                <div className={styles.MerryChristMas}><Link to={`/search/christmas`}>Christmas🎄</Link></div> */}
            </div>

           
        </div>
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
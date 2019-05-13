// import React from 'react';
// import { Link } from 'react-router-dom';

// class DropDown extends React.Component {

//     render() {
//         return (
//             <div id="drop_menu" onMouseOut={closeModal}>
//                 <li><Link className="nav_host" to={'/host'}>Host</Link></li>
//                 <li><Link className="nav_host" to={`/users/${this.props.currentUser.id}`}>Bookings</Link></li>
//                 <li><a className="nav_host" id="nav_host_logout" onClick={() =>this.props.logout}>Log out</a></li>
//             </div>

//             // <div>
//             //     <button onClick={this.showMenu} >
//             //         <img className="tent_logo" src={window.footerURL} />
//             //     </button>
//             //     {
//             //         this.state.showMenu
//             //             ? (
//             //                 <div
//             //                     className="menu"
//             //                     ref={(element) => {
//             //                         this.dropdownMenu = element;
//             //                     }}
//             //                 >
//             //                     <div className="drop_menu">
//             //                         <button className="nav_logged_in_logout" onClick={logout}>Log Out</button>
//             //                     </div>
//             //                 </div>
//             //             )
//             //             : (
//             //                 null
//             //             )
//             //     }
//             // </div>
//         );
//     }
// }

// export default DropDown;
import React from "react";
//import "./App.css";
//import { CounterUsingUseReduce } from "./hooks/CounterUsingUseReduce";
// import DataFetchingUsingUseReducer from "./hooks/DataFetchingUsingUseReducer";
// import ParentalComponent from "./hooks/callBack/ParentalComponent";
import FocusInput from "./hooks/FocusInputusinguseRef";
// import WindowsSizeChangeClass from "./hooks/WindowsSizeChangeClass";

//import WindowsSizeChangeFunctions from "./hooks/WindowsSizeChangeFunctions";
// import Movie from "./hoc/Movie";
//import Counter from "./hooks/Counter";
// import SquareNumberTheme from "./hooks/SquareNumberTheme";
// import Users from "./hooks/Users";

function App(props) {
  // useEffect, useState
  // return <WindowsSizeChangeFunctions />;
  // use state
  // return <Counter />;
  //
  // return <SquareNumberTheme />;
  // return <CounterUsingUseReduce />;
  // return <DataFetchingUsingUseReducer />;
  //return <ParentalComponent />;
  return <FocusInput />;

  // return (
  //   <React.Fragment>
  //     <Movie id={1} />
  //     <Counter />
  //   </React.Fragment>
  // );
}

export default App;

// import React, { Component } from "react";
// import MoviePage from "./context/MoviePage";
// import UserContext from "./context/userContext";

// import Login from "./context/Login";
// import CartContext from "./context/cartContext";

// class App extends Component {
//   handleLoggedIn = (username) => {
//     const user = { name: "krish" };
//     this.setState({ currentUser: user });
//   };
//   state = { currentUser: null };
//   render() {
//     return (
//       <CartContext.Provider value={{ cart: [] }}>
//         <UserContext.Provider
//           value={{
//             currentUser: this.state.currentUser,
//             onLoggedIn: this.handleLoggedIn,
//           }}
//         >
//           <div>
//             <MoviePage />
//             <Login />
//           </div>
//         </UserContext.Provider>
//       </CartContext.Provider>
//     );
//   }
// }

// export default App;

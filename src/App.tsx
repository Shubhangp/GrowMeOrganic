// import { useState } from 'react';
// import './App.css';
// import SignUp from "./components/SignUp";
// import SecondPage from './components/SecondPage';

// function App() {

//   // const formDetail = JSON.parse(localStorage.getItem('form') || '{}');

//   // const [hasData, setHasData] = useState<boolean>(false);
//   const [hasData] = useState<boolean>(true);

//   // console.log(hasData);

//   // useEffect(() => {
//   //   const dataExists = localStorage.getItem('form') !== null;
//   //   setHasData(dataExists);
//   // }, []);

//   // if (!formDetail.name || !formDetail.phone || !formDetail.email) {
//   //   // const dataExists = localStorage.getItem('form') !== null;
//   //   setHasData(false);
//   //   // return null;
//   // }

//   return (
//     <>
//       {!hasData ?
//         (<SignUp />)
//         :(<>
//             <SecondPage />
//         </>)
//       }
//       {/* <SignUp />
//       <SecondPage /> */}
//     </>
//   )
// }

// export default App;

// import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import SignUp from "./components/SignUp";
// import SecondPage from './components/SecondPage';

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact component={SignUp} />
//         <Route path="/second-page" component={SecondPage} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SecondPage from './components/SecondPage';

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={SignUp} />
          <Route path="/second-page" Component={SecondPage} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;


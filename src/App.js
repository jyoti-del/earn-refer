import Dashboard from "./comp/dashboard/dashboard";
import Navbar from "./comp/navbar/navbar";
import Work from "./comp/Work/work";
import FriendsReferred from "./comp/friends_referred";
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
   <>
   <div className="mb-10 mt-5 sm:mt-0">
 {/* <Navbar />
   <Dashboard />
   <Work />  */}

   {/* <FriendsReferred />  */}
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<>
        <Navbar />
        <Dashboard />
        <Work />
      </>}>
     </Route>
     <Route path="/refer" element={<FriendsReferred /> }></Route>
    </Routes>
   </BrowserRouter>
   </div>
   </>
  );
}
export default App;

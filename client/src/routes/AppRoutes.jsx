import  {Routes, Route,Navigate} from "react-router-dom";

import AppDashboard from "../screens/appdashboard/AppDashboard";
import Login from "../screens/login/Login";

const AppRoutes = function(){
   return( <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/dashboard" element={<AppDashboard></AppDashboard>} ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>     
    </Routes>
   )
}

export default AppRoutes;
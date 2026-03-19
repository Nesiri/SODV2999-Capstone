// DashboardRoutes.jsx
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { useAuth } from "../hooks/useAuth";
import MoodCheckin from "../components/AppComponent/Dashboard/MoodCheckin";
import DeleteAccount from "../components/AppComponent/Profile/DeleteAccount";


export default function DashboardRoutes() {
  const { user, onLogout } = useAuth();
  
  if (!user || !onLogout) {
    return ;
  }
  
  return (
 
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route 
          element={
            <DashboardLayout 
              user={user} // TypeScript is happy because user is not null
              onLogout={onLogout}
            />
          }
        >
          <Route index element={<MoodCheckin/>} />
           <Route path="mood" element={<MoodCheckin/> }/>
          <Route path="profile" element={<div>Profile Page</div>} />
             <Route path="settings" element={<DeleteAccount/>} />
          
        </Route>
      </Routes>
    </Suspense>

  );
}
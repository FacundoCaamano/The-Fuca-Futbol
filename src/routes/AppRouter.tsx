import {Route, Routes, Navigate} from "react-router-dom"
import { HomeComponent } from "../components/home/HomeComponent.tsx"
import { DashboardComponent } from "../components/dashboard/DashboardComponent.tsx"
import { TeamsComponent } from "../components/teams/TeamsComponent.tsx"


export const  AppRouter: React.FC = () =>{
    return(
        
            <Routes>    
                <Route path="home" element={<HomeComponent/>}></Route>
                <Route path="dashboard" element={<DashboardComponent/>}></Route>
                <Route path="teams" element={<TeamsComponent/>}></Route>
                <Route path="*" element={<Navigate to="/home" />}></Route>
            </Routes>
        
    )
}
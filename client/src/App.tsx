import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthenticationPage from "./pages/AuthenticationPage";
import ErrorPage from "./pages/ErrorPage";
import DashboardPage from "./pages/DashboardPage";
import RootLayout from "./layouts/RootLayout";
import ExercisePage from "./pages/ExercisePage";
import PreviewPage from "./pages/PreviewPage";
import RequireAuth from "./components/RequireAuth";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import {UserRole} from "./enums/userRole";
import PersistLogin from "./components/auth/PersistLogin";
import AdminPage from "./pages/AdminPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";

const App : React.FC = () => {
    return (
        // <RootLayout>
        <Routes>
            {/* public pages */}
            <Route element={<PersistLogin/>}>
                <Route path="/" element={<RootLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/auth" element={<AuthenticationPage />} />
                    <Route path='/unauthorized' element={<UnauthorizedPage/>} />
                    {/*Sections*/}
                    <Route path="/grammar" element={<PreviewPage />} />
                    <Route path="/vocabulary" element={<PreviewPage />} />
                    <Route path="/reading" element={<PreviewPage />} />
                    <Route path="/listening" element={<PreviewPage />} />
                    {/*ExerciseSets*/}
                    <Route path="/grammar/:exercise" element={<ExercisePage />} />
                    <Route path="/vocabulary/:exercise" element={<ExercisePage />} />
                    <Route path="/reading/:exercise" element={<ExercisePage />} />
                    <Route path="/listening/:exercise" element={<ExercisePage />} />
                    {/*Protected Routes */}
                        {/*USER ROLE*/}
                        <Route element={<RequireAuth allowedRoles={[UserRole.User]}/>}>
                            <Route path="/dashboard" element={<DashboardPage />} />
                        </Route>
                        <Route element={<RequireAuth allowedRoles={[UserRole.User]}/>}>
                            <Route path="/profile" element={<ProfilePage />} />
                        </Route>
                        <Route element={<RequireAuth allowedRoles={[UserRole.User]}/>}>
                            <Route path="/settings" element={<SettingsPage />} />
                        </Route>
                        {/*ADMIN ROLE*/}
                        <Route element={<RequireAuth allowedRoles={[UserRole.Admin]}/>}>
                            <Route path="/admin" element={<AdminPage />} />
                        </Route>
                    {/*Missing Path*/}
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Route>
        </Routes>
        // </RootLayout>
    );
}

export default App;
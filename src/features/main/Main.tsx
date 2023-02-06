import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {PATH} from "../../utils/routes/routes";

import {PageNotFound} from "../errorPage/PageNotFound";
import Login from "../login/singIn/Login";
import {Registration} from "../login/registration/Registration";
import {Profile} from "../profile/Profile";
import {PasswordRecovery} from "../login/passwordRecovery/PasswordReccovery";
import {NewPassword} from "../login/newPassword/NewPassword";



export const Main = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.login}/>}/>
                <Route path={PATH.login} element={<Login/>}/>
                <Route path={PATH.registration} element={<Registration/>}/>
                <Route path={PATH.profile} element={<Profile/>}/>
                <Route path={PATH.passwordRecovery} element={<PasswordRecovery/>}/>
                <Route path={PATH.setNewPassword} element={<NewPassword/>}/>
                <Route path={'/*'} element={<PageNotFound/>}/>
            </Routes>
        </div>
    );
};
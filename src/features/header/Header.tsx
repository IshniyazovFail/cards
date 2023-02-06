import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../utils/routes/routes";
import style from "./Header.module.css"

export const Header = () => {
    return (
        <div className={style.container}>
            <NavLink className={style.link}  children={'Profile'} to={PATH.profile}/>
            <NavLink className={style.link} children={'Login'} to={PATH.login}/>
            <NavLink className={style.link} children={'Registration'} to={PATH.registration}/>
            <NavLink className={style.link} children={'PasswordRecovery'} to={PATH.passwordRecovery}/>
            <NavLink className={style.link} children={'SetNewPassword'} to={PATH.setNewPassword}/>
            <NavLink className={style.link} children={'Error'} to={PATH.error}/>
        </div>
    );
};


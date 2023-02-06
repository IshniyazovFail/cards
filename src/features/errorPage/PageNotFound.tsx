import React from 'react';
import style from "./PageNotFound.module.css"

export const PageNotFound = () => {
    return (
        <div className={style.errorPage}>
            <h1>404</h1>
             Sorry, the page not found!
        </div>
    );
};


import React from 'react';
import SuperInputText from "../../../common/components/SuperInput/SuperInputText";
import SuperCheckbox from "../../../common/components/SuperCheckbox/SuperCheckbox";
import SuperButton from "../../../common/components/SuperButton/SuperButton";
import style from "./Registration.module.css"

export const Registration = () => {
    return (
        <div className={style.container}>
            Registration
            <SuperInputText />
            <SuperCheckbox children={'Remember Me'}/>
            <SuperButton >Send</SuperButton>
        </div>
    );
};


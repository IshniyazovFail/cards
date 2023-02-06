import {applyMiddleware, combineReducers} from "redux";
import { legacy_createStore as createStore} from 'redux'
import {auth_reducer} from "../redusers/auth_reducer";
import thunk from "redux-thunk";
import {profile_reducer} from "../redusers/profile_reducer";
import {registration_reducer} from "../redusers/registration_reducer";
import {passwordRecovery_reducer} from "../redusers/passwordRecovery_reducer";
import {newPassword_reducer} from "../redusers/newPassword_reducer";

const RootReducer = combineReducers({
    auth:auth_reducer,
    registration: registration_reducer,
    profile:profile_reducer,
    passwordRecovery: passwordRecovery_reducer,
    newPassword:newPassword_reducer


})

export const store = createStore(RootReducer,applyMiddleware(thunk))

// @ts-ignore
window.store = store
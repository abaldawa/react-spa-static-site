import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation: React.FC = () => {
    return (
        <nav className={classes["nav-container"]}>
            <NavLink
                exact
                to="/"
                className={classes["nav-container__navigation-link"]}
                activeClassName={classes["active-nav"]}
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                className={classes["nav-container__navigation-link"]}
                activeClassName={classes["active-nav"]}
            >
                About
            </NavLink>
            <NavLink
                to="/users"
                className={classes["nav-container__navigation-link"]}
                activeClassName={classes["active-nav"]}
            >
                Users
            </NavLink>
        </nav>
    );
};

export {Navigation};
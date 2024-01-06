import React from "react";

import secureLocalStorage from "react-secure-storage";
import { useHistory } from 'react-router-dom';

import Header from './header';
import Body from './body';
import Footer from './footer';


export default function DashboardWork() {
    let history = useHistory();

    if (!secureLocalStorage.getItem('token')) {
        history.push('/login');
    } else {
        return (
            <React.Fragment>
                <Header />
                <Body />
                <Footer />
            </React.Fragment>
        );
    };
};

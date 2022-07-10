import React, { Children } from "react";
import Header from 'components/Header';

const HeaderLayout = () => {
    return <Header />
}

const Layout = (props) => {
    const {children} = props;
    return (
        <>
            <HeaderLayout />
            {children}
        </>
    )
}

export default Layout;
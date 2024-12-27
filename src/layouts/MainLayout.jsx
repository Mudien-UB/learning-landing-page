import React from 'react';
import Header from '../components/Header';

const MainLayout = ({children , page}) => {
    return (
        <div>
            <Header page={page} />
            <main>{children}</main>
        </div>
    );
}

export default MainLayout;

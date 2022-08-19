import React from 'react';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import List_page from '../../components/List_Page_New';

function List(props) {
    return (
        <div>
            <Header/>
            <SideBar/>
            <List_page/>            
        </div>
    );
}

export default List;
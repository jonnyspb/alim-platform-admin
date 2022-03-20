import React from 'react';
import {Layout, Menu} from "antd";
import MyHeader from "./MyHeader";
import Sidebar from "./Sidebar";
import {useTypedSelector} from "../hooks/useTypedSelector";
import MyContent from "./MyContent";


const Navbar = () => {


    const {isAuth, user} = useTypedSelector(state => state.auth );

    return (
        <Layout>
           <MyHeader />
            {
                isAuth ?
                <Layout>
                    <Sidebar/>
                    <MyContent/>
                </Layout>
                :
                    <Layout>
                        <MyContent/>
                    </Layout>
            }

        </Layout>
    );
};

export default Navbar;
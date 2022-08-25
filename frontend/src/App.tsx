import React, {useEffect} from 'react';
import 'antd/dist/antd.css'
import './App.scss';
import Layout from "./layout/Layout";
import {useActions} from "./hooks/useActions";

function App() {
    const {checkAuth} = useActions();
    useEffect(()=> {
        checkAuth()
    }, [])
    return (
        <div className="App">
            <Layout/>
        </div>
    );
}

export default App;

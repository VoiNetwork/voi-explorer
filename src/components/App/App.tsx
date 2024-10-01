import React, {useEffect} from 'react';
import './App.scss';
import AppRouter from "./AppRouter";
import {useDispatch} from "react-redux";
import {initApp} from "../../redux/app/actions/app";
import { useLocation } from 'react-router-dom';
import Header from '../Modules/Header/Header';

function App(): JSX.Element {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initApp());
    }, []);

  return (
      <div className="app-root">
            <Header></Header>
          <AppRouter></AppRouter>
      </div>
  );
}

export default App;

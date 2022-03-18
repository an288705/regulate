import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeRoutes from './controller/routes/homeRoutes'

//redux imports & reducers
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import accReducer from "./model/accSlice";

//Redux configuration
const reducer = combineReducers({
  acc: accReducer,
});

const store = configureStore({
  reducer,
});

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeRoutes/>
      </NavigationContainer>
    </Provider>  
  );
};
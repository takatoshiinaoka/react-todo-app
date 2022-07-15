import React, { StrictMode } from 'react'
import { ReactDOM, createRoot } from 'react-dom/client'
import App from './components/App'
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme/theme"

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <StrictMode>
        <ChakraProvider theme={theme} resetCSS={false}>
            <App/>
        </ChakraProvider>
    </StrictMode>
)


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
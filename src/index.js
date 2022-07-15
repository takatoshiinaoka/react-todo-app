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
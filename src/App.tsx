import './App.css'
import Footer from './footer/Footer.tsx'
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <>
            <BrowserRouter basename="/">
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default App

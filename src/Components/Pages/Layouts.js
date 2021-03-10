import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../Menu/NavBar';


const Layouts = (props) => {
    return(
        <div>
            <NavBar />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layouts;
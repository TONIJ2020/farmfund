import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../Menu/NavBar';


const Layouts = (props) => {
    return(
        <React.Fragment>
            <NavBar />
            {props.children}
            <Footer />
        </React.Fragment>
    )
}

export default Layouts;
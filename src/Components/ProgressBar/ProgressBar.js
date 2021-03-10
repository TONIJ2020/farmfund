import React from 'react';
import styled from 'styled-components';

const Track = styled.div`
    height: 13px;
    width: 100%;
    border-radius: 20px;
    background-color: #E3E1E1;
    box-shadow: inset 0 0 5px #E3E1E1;
`;

const Thumb = styled.div` 
    width: ${props => props.percentage}%;
    height: 100%;
    background-color: #22CF67;
    border-radius: 20px;
`;

const Span = styled.span`
    position: absolute;
    left: 47%; 
    width: 60%;
    margin: 0%;
    display: block;
    font: normal bold 11px/21px Roboto;
    color: blue;
`;
export default class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            percentage: 50
       }
    }
    
    render() {
        return (
            <Track className="progress-bar-div">
                <Thumb percentage={this.state.percentage}><Span>{this.state.percentage}%</Span></Thumb>
            </Track>
        )
    }
}

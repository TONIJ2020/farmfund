import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'; 

const Container = styled.div`
    progress {
        margin-right: 10px;
    }

    progress[value] {
        width: ${props => props.width};
        -webkit-appearance: none;
        appearance: none;
    }

    progress[value]::-webkit-progress-bar {
        width: 100%;
        height: 13px;
        background-color: #E3E1E;
        border-radius: 20px;
        box-shadow: 0 0 5px #E3E1E1 inset;
    }

    progress[value]::-webkit-progress-value {
        width: 100%;
        height: 13px;
        background-color: ${props => props.color};
        border-radius: 20px;
    }

    @media only screen and (max-width: 376px) {
        progress[value]::-webkit-progress-bar {
            width: 80%;
            height: 13px;
            background-color: #E3E1E;
            border-radius: 20px;
            box-shadow: 0 0 5px #E3E1E1 inset;
        }

        progress[value]::-webkit-progress-value {
            width: 80%;
            height: 13px;
            background-color: ${props => props.color};
            border-radius: 20px;
        }
        span {
            margin-left: -3.5rem;
            line-height: 48px;
        }
    }

    @media only screen and (max-width: 320px) {
        progress[value]::-webkit-progress-bar {
            width: 60%;
            height: 10px;
            background-color: #E3E1E;
            border-radius: 20px;
            box-shadow: 0 0 5px #E3E1E1 inset;
        }

        progress[value]::-webkit-progress-value {
            width: 60%;
            height: 10px;
            background-color: ${props => props.color};
            border-radius: 20px;
        }
        span {
            margin-left: -8rem;
            line-height: 48px;
        }
    }
`;

const ProgressBar = ({ value, max, color, width }) => {

    return (
        <Container color={color} width={width} >
            <progress value={value} max={max}  />
            <span style={{zIndex:20, font: "normal bold 12px/8px Roboto", color: "#3E5140"}}>{(value / max) * 100}%</span>
        </Container>
    )
}

ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    color: PropTypes.string,
    width: PropTypes.string,
}

ProgressBar.defaultProps = {
    max: 100,
    color: '#22CF67',
    width: '300px',
}

export default ProgressBar;
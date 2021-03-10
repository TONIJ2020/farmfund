import React from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const AppWrapper = styled.div`
display: flex;
justify-content: center;
`;

const ProgressBarContainer = styled.div`
width: 300px;
`;

const Apps = () => {
    return (
        <AppWrapper className="app-div">
            <ProgressBarContainer className="app-div-2">
                <ProgressBar />
            </ProgressBarContainer>
        </AppWrapper>
    )
};

export default Apps;
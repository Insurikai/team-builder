import React from 'react';
import styled from 'styled-components';

export default (props) =>{
    const MemberContainer = styled.div`
        width: 28vw;
        margin: 10px auto;
        height: fit-content;
        background-color: #252525;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
    `;
    const InfoContainer = styled.div`
        width: 90%;
        height: 30%;
        margin: 2.5% auto;
        padding: 10px;
        background-color: #1b1b1b;
        color: white;
        
        display: flex;
        flex-direction: column;
        align-items: center;
    `;
    const Name = styled.h1`
        font-size: 3.2rem;
    `;
    const Info = styled.p`
        font-size: 2rem;
        padding-top: 5px;
    `;
    return (
        <MemberContainer>
            <InfoContainer>
                <Name>{props.member.name}</Name>
                <Info>{props.member.email}</Info>
                <Info>{props.member.role}</Info>
            </InfoContainer>
        </MemberContainer>
    )
}
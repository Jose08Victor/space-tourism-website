import styled from "styled-components";

export const MainDefault = styled.main`
    min-height: 100vh;
    
    @media (max-width: 530px) {
        position: relative;

        &.active {
            &:after {
                position: absolute;
                right: 0;
                top: 0;
                content: '';
                width: 70%;
                height: 100%;
                background-color: rgba(0, 0, 0, .9);
            }
        }
    }
`
import styled from "styled-components";

export const Main = styled.main`
    min-height: 100vh;
    background: url("https://github.com/Jose08Victor/space-tourism-website/blob/main/src/assets/technology/background-technology-desktop.jpg?raw=true") no-repeat;
    background-size: cover;
    padding: 8% 0 6%;

    section {
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 120px;

        @media (min-width: 1450px) {
            justify-content: center;
        }
        
        @media (max-width: 1100px) {
            gap: 20px;
        }
    }

    @media (max-width: 900px) {
        background: url("https://github.com/Jose08Victor/space-tourism-website/blob/main/src/assets/technology/background-technology-tablet.jpg?raw=true") no-repeat;
        background-size: cover;

        section {
            flex-direction: column-reverse;

            picture img {
                width: 100%;
                margin-bottom: 56px;
            }
        }
    }

    @media (max-width: 530px) {
        background: url("https://github.com/Jose08Victor/space-tourism-website/blob/main/src/assets/technology/background-technology-mobile.jpg?raw=true") no-repeat;
        background-size: cover;

        picture img {
            margin-bottom: 24px;
        }
    }
`

export const Div1 = styled.div`
    display: flex;
    gap: 40px;
    
    div:first-child {
        display: flex;
        flex-direction: column;
        font-family: "Bellefair", serif;
        justify-content: space-between;

        @media (max-width: 1100px) {
            justify-content: space-evenly;
        }

        span {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            color: #fff;
            border: 1px solid #fff;
            font-size: 32px;
            line-height: 70px;
            text-align: center;
        }
    }

    div {
        h4 {
            color: #D0D6F9;
            font-size: 14px;
            letter-spacing: 2.7px;
            font-weight: normal;
            margin-bottom: 11px;
        }

        h2 {
            color: #fff;
            font-size: 52px;
            font-weight: normal;
            font-family: "Bellefair", serif;
            margin-bottom: 17px;
        }

        p {
            color: #D0D6F9;
            font-size: 18.2px;
            line-height: 32px;
            font-weight: 300;
            max-width: 420px;
        }
    }

    @media (max-width: 900px) {
        flex-direction: column;
        text-align: center;

        div:first-child {
            flex-direction: row;
            width: 260px;
            margin: 0 auto 20px;

            span {
                width: 60px;
                height: 60px;
                line-height: 60px;
                font-size: 24px;
            }
        }

        div {
            h4 {
                font-size: 16px;
                margin-bottom: 16px;
            }
    
            h2 {
                font-size: 40px;
                margin-bottom: 16px;
            }
    
            p {
                font-size: 17px;
                line-height: 28px;
                max-width: 420px;
            }
        }
    }

    @media (max-width: 530px) {
        gap: 25px;

        div:first-child {
            width: 200px;
            margin: 0 auto;

            span {
                width: 40px;
                height: 40px;
                line-height: 40px;
                font-size: 16px;
            }
        }

        div {
            h4 {
                font-size: 14px;
                margin-bottom: 9px;
            }
    
            h2 {
                font-size: 24px;
                margin-bottom: 12px;
            }
    
            p {
                font-size: 15px;
                padding: 0 20px;
            }
        }
    }
`
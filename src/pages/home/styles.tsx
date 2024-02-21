import styled from "styled-components";

export const Main = styled.main`
    color: #D0D6F9;
    background: url("https://github.com/Jose08Victor/space-tourism-website/blob/main/src/assets/home/background-home-desktop.jpg") no-repeat;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: end;
    padding-bottom: 9%;
    
    div {
        max-width: 410px;
        
        h5 {
            font-size: 28px;
            font-weight: normal;
            letter-spacing: 4.72px;
        }
        
        h1 {
            font-size: 150px;
            font-weight: normal;
            color: #fff;
        }

        p {
            font-size: 18.3px;
            letter-spacing: .6px;
            line-height: 30px;
            font-weight: 300;
        }
    }

    div h1, a{
        font-family: "Bellefair", serif;
    }

    a {
        width: 274px;
        height: 274px;
        border-radius: 50%;
        background-color: #fff;
        text-align: center;
        line-height: 274px;
        font-size: 32px;
        color: #0B0D17;
        transition: .5s ease-in-out;

        &:hover {
            box-shadow: 0px 0px 0px 75px rgba(120, 120, 120, .6);
        }
    }

    @media(max-width: 900px) {
        background: url("./src/assets/home/background-home-tablet.jpg") no-repeat;
        background-size: cover;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding-top: 35%;
        gap: 120px;
        padding-bottom: 15%;

        div {
            max-width: 450px;     
        }

        a:hover {
            box-shadow: 0px 0px 0px 65px rgba(120, 120, 120, .6);
        }
    }

    @media(max-width: 530px) {
        background: url("./src/assets/home/background-home-mobile.jpg") no-repeat;
        background-size: cover;
        gap: 90px;

        div {
            padding: 0 20px;

            h5 {
                font-size: 16px;
                margin-bottom:16px;
            }

            h1 {
                font-size: 80px;
                margin-bottom:16px;
            }

            p {
                font-size: 15px;
            }
        }

        a {
            width: 150px;
            height: 150px;
            line-height: 150px;
            font-size: 20px;

            &:hover {
                box-shadow: none;
            }
        }
    }
`
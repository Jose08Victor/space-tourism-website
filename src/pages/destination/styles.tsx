import styled from "styled-components"

export const Main = styled.main`
    color: #D0D6F9;
    background: url("https://github.com/Jose08Victor/space-tourism-website/blob/main/src/assets/destination/background-destination-desktop.jpg?raw=true") no-repeat;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding-bottom: 9%;
    padding: 12% 0 6%;

    h1 {
        font-size: 28px;
        font-weight: 300;
        letter-spacing: 4.72px;
        color: #fff;
        padding: 40px 0px 70px 120px;
        
        strong {
            margin-right: 8px;
            font-size: 27px;
            color: #555;
        }
    }

    section {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    @media (max-width: 900px) {
        h1 {
            font-size: 20px;

            strong {
                font-size: 21px;
            }
        }

        section {
            flex-direction: column;
            gap: 40px;
            text-align: center;

            img {
                max-width: 300px;
            }
        }
    }

    @media (max-width: 530px) {
        h1 {
            padding: 60px 0px 40px;
            text-align: center;

            strong {
                margin-right: 4px;
            }
        }

        section img {
            max-width: 200px;
        }
    }
`

export const Div1 = styled.div`
    max-width: 425px;

    nav {
        margin-bottom: 42px;
        
        ul {
            display: flex;
            gap: 30px;

            li {
                padding-bottom: 12px;
                letter-spacing: 2.7px;
                border-bottom: 3px solid transparent;
                cursor: pointer;

                &:hover {
                    border-bottom-color: #fff;
                }
            }
        }
    }

    h2 {
        font-size: 100px;
        font-family: "Bellefair", serif;
        font-weight: normal;
        color: #fff;
        margin-bottom: 12px;
    }

    p {
        font-size: 18.2px;
        line-height: 32px;
        font-weight: 300;
        margin-bottom: 42px;
    }

    @media (max-width: 900px) {
        max-width: 75%;

        nav ul {
            justify-content: center;
        }
    }

    @media (max-width: 530px) {
        nav {
            margin-bottom: 18px;

            ul li {
                font-size: 14px;
            }
        }

        h2 {
            font-size: 60px;
            margin-bottom: 6px;
        }

        p {
            font-size: 16px;
            line-height: 25px;
            margin-bottom: 22px;
        }
    }
`

export const Div2 = styled.div`
    border-top: 1px solid rgba(140, 140, 140, .3);
    display: flex;
    gap: 70px;
    padding-top: 20px;

    div p:first-child {
        font-size: 14px;
        letter-spacing: 2.36px;
        margin-bottom: 5px;
    }

    div p:last-child {
        font-family: "Bellefair", serif;
        font-size: 28px;
        color: #fff;
    }

    @media (max-width: 900px) {
        justify-content: center;
    }

    @media (max-width: 500px) {
        div p:first-child {
            font-size: 11.2px;
            letter-spacing: 1.06px;
            margin-bottom: 0px;
        }
    
        div p:last-child {
            font-size: 21.5px;
        }
    }

    @media (max-width: 360px) {
        gap: 40px;
    }
`
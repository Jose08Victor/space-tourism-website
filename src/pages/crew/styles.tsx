import styled from "styled-components";
import { MainDefault } from "../../components/main/styles";

export const Main = styled(MainDefault)`
    background: url(https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/crew/background-crew-desktop.jpg) no-repeat;
    background-size: cover;

    h1 {
        transform: translateY(110%);
    }

    section {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 3%;
        padding: 0 10px;
        gap: 10px;

        div {
            max-width: 588px;

            h4 {
                font-size: 29px;
                font-weight: normal;
                font-family: "Bellefair", serif;
                color: #888;
                margin-bottom: 15px;
            }

            h2 {
                font-family: "Bellefair", serif;
                font-weight: normal;
                font-size: 52px;
                color: #fff;
                margin-bottom: 27px;
            }

            p {
                color: #D0D6F9;
                font-size: 17px;
                line-height: 32px;
                font-weight: 300;
                max-width: 460px;
                margin-bottom: 120px;
            }

            ul {
                width: 160px;
                display: flex;
                justify-content: space-between;
                
                li {
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background-color: #D0D6F9; 
                    transition: .3s ease-in-out;
                    cursor: pointer;

                    &:hover {
                        transform: scale(1.5);
                        background-color: #fff; 
                    }

                    &.active {
                        transform: scale(1.5);
                        background-color: #fff; 
                    }
                }
            }
        }
    }

    @media (max-width: 900px) {
        padding-top: 12%;
        background: url(https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/crew/background-crew-tablet.jpg) no-repeat;
        background-size: cover;

        h1 {
            transform: translateY(0%);
        }

        section {
            flex-direction: column;
            gap: 40px;
            text-align: center;

            div {
                h4 {
                    font-size: 24px;
                    margin-bottom: 8px;
                }
    
                h2 {
                    font-size: 40px;
                    margin-bottom: 16px;
                }
    
                p {
                    font-size: 19px;
                    line-height: 28px;
                    margin-bottom: 40px;
                }

                ul {
                    margin: 0 auto 20px;
                }
            }
        }
    }

    @media (max-width: 530px) {
        background: url(https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/crew/background-crew-mobile.jpg) no-repeat;
        background-size: cover;

        section {
            flex-direction: column-reverse;
            gap: 0px;
            padding: 0 30px;
            
            div {
                border-top: 1px solid #555;
                padding-top: 74px;
                position: relative;

                h4 {
                    font-size: 16px;
                }
    
                h2 {
                    font-size: 24px;
                }
    
                p {
                    font-size: 15px;
                }

                ul {
                    position: absolute;
                    top: 30px;
                    left: 0;
                    right: 0;
                    border-top: none;
                    padding-top: none;
                    width: 98px;

                    li {
                        width: 12px;
                        height: 12px;
                    }
                }
            }

            img {
                width: 200px;
                margin: 0 auto;
            }
        }
    }
`
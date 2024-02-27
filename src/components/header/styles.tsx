import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;
    z-index: 1;

    img {
        padding: 0 40px;
    }

    hr {
        position: absolute;
        top: 41px;
        width: 35%;
        left: 200px;
        background-color: rgba(133, 133, 133, .5);
        height: 1px;
        border: none;
        
        @media(max-width: 1100px) {
            width: 26%;
        }
    }

    nav {
        display: flex;
        width: 55%;
        height: 82px;
        justify-content: space-evenly;
        align-items: center;
        background-color: rgba(140, 140, 140, .2);

        a {
            &.active {
                p {
                    border-bottom-color: #fff;
                }
            }

            p {
                color: #fff;
                letter-spacing: 1px;
                padding: 30px 0;
                border-bottom: 3px solid transparent;  

                &:hover {
                    border-bottom-color: #fff;
                }

                strong {
                    padding-right: 5px;
                } 
            }
        }
    }

    div {
        display: none;
    }

    @media(max-width: 900px) {
        margin-top: 0px;

        hr, strong {
            display: none;
        }

        nav {
            width: 65%;
        }
    }

    @media(max-width: 530px) {
        padding: 30px 0;

        nav {
            position: absolute;
            top: 0;
            right: -70%;
            width: 70%;
            padding: 110px 40px;
            background: none;
            display: none;
            
            a p {
                padding: 16px 0;
                font-size: 18px;
                letter-spacing: 2px;
                
                strong {
                    display: inline;
                    padding-right: 8px;
                }
            }          
        }

        div {
            display: block;
            z-index: 1;

            img:last-child {
                display: none;
            }
        }
        
        &.active {
            nav {
                display: block;
                right: 0;
            }

            div {
                img:first-child {
                    display: none;
                }
    
                img:last-child {
                    display: block;
                }
            }
        }
    }
`
import styled from "styled-components"

export const H1 = styled.h1`
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

    @media (max-width: 900px) {
      font-size: 20px;
      padding: 50px 0px 70px 60px;

      strong {
         font-size: 21px;
      }
    }

    @media (max-width: 530px) {
        padding: 60px 0px 40px;
        text-align: center;

        strong {
            margin-right: 4px;
        }
    }
`
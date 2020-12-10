import styled from "styled-components"
import Img from "gatsby-image"

export const Image = styled(Img)`
  width: 100%;
  height: 100%;
`

export const HeroesPageDiv = styled.div`
display: flex;
border-style: solid;
border-width: 1px;
border-color: white;
align-items: center;
flex-direction: column;
height: 1700px;
padding: 10px;
@media only screen and (max-width: 600px) {
height: 700px;
}
`

export const HeroPageText = styled.p`
color:white;
font-size: 20px;
`
export const HeroPageDesc = styled.p`
color:white;
font-size: 20px;
@media only screen and (max-width: 600px) {
display: none;
}

`

export const HeroPageHeaderText = styled.p`
color:white;
font-size: 40px;
`
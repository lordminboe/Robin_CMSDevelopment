import styled from "styled-components"
import Img from "gatsby-image"

export const Image = styled(Img)`
  width: 100%;
  height: 100%;
`
export const BannerImage = styled(Img)`
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 600px) {
  display: none;
  }
`

export const Banner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 200px;
color: white;

`

export const HomeDescriptionStyle = styled.div`
color: white;
font-size: 20px;
`

export const HeroBox = styled.div`
color:white;
display: flex;
flex-direction: column;
align-items: center;
border-style: solid;
border-width: 5px;
border-radius: 250px;

@media only screen and (max-width: 600px) {
border-radius: 0px;
}

`

export const HeroBoxItems = styled.div`
color:white;
display: flex;
flex-direction: column;
align-items: center;
height: 400px;
width: 300px;
padding: 20px;

`

export const HeroPageContent = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
`

export const HeroesPageBox = styled.div`
display: flex;
border-style: solid;
border-width: 1px;
border-color: white;
align-items: center;
flex-direction: column;
width: 300px;
height: 400px;
padding: 50px;
`

export const HeroesPageItems = styled.p`
color:white;
font-size: 50px;
`

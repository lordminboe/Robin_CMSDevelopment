import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {graphql} from 'gatsby'
import {HeroPageText,Image, HeroesPageDiv, HeroPageHeaderText, HeroPageDesc} from './templateStyles/templateStyles'

const HeroTemplate = ({
    data: {
        wpcontent: {
            hero: {
                heroesMeta,
                typeHeroes: {
                    edges: typeHeroes
                },
            },
        },
    }
}) => {
    return(
        <Layout>
        <SEO title="heroDetails" />
        <HeroesPageDiv>
    <HeroPageHeaderText>{heroesMeta.name}</HeroPageHeaderText>
    <Image fluid={heroesMeta.heroFoto.imageFile.childImageSharp.fluid} alt={heroesMeta.heroFoto.altText} />
    <HeroPageDesc>{heroesMeta.heroDescription}</HeroPageDesc>
    <HeroPageText>Total Wins: {heroesMeta.heroWins}</HeroPageText>
    <HeroPageText>Gender: {heroesMeta.gender}</HeroPageText>
    <HeroPageText>Faction: {heroesMeta.faction}</HeroPageText>
    {typeHeroes.map(({node: typeHero}) => (
        <HeroPageText>What type of warrior: {typeHero.name}</HeroPageText>
    ))}
        </HeroesPageDiv>
        </Layout>
    )
}

export default HeroTemplate;

export const pageQuery = graphql`

query($id: ID!){
    wpcontent {
      hero(id: $id, idType: ID) {
        typeHeroes {
          edges {
            node {
              name
            }
          }
        }
        heroesMeta {
          name
          heroWins
          heroType
          heroDescription
          gender
          faction
          heroFoto {
            altText
            sourceUrl
            imageFile {
                childImageSharp {
                  fluid(quality: 50) {
                    ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }

`

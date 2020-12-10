import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Image,BannerImage,HomeDescriptionStyle,HeroesPageBox,HeroesPageItems, HeroPageContent} from "../pageStyles/pageStyles"

const HeroesPage = () => {

    const {
        wpcontent:{
            page:{
                heroesPageMeta: {heroespagedescription, heroespageheaderpicture},
            },
            heroes: {edges: heroes}
        },
    } = useStaticQuery(graphql`
    {
      wpcontent {
        page(id: "heroes", idType: URI) {
          heroesPageMeta {
            heroespagedescription
            heroespageheaderpicture {
              altText
              sourceUrl
              imageFile {
                childImageSharp {
                  fluid(quality: 0) {
                    ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            }
          }
        }
        heroes {
          edges {
            node {
              heroesMeta {
                name
                heroFoto {
                  altText
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(quality: 0) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                }
              }
              slug
            }
          }
        }
      }
    }
    `)
  return (
    <Layout>
      <SEO title="Heroes" />
      <BannerImage fluid={heroespageheaderpicture.imageFile.childImageSharp.fluid} />
  <HomeDescriptionStyle>{heroespagedescription}</HomeDescriptionStyle>
  <HeroPageContent>
  {heroes.map(({ node: { heroesMeta, slug } }) => (
  <HeroesPageBox key={slug} >
    <Link style={{color: "transparent"}} to={`/${slug}`}><HeroesPageItems>{heroesMeta.name}</HeroesPageItems></Link>
    <Image fluid={heroesMeta.heroFoto.imageFile.childImageSharp.fluid}/>
  </HeroesPageBox>
  ))}
  </HeroPageContent>
    </Layout>
  )
}

export default HeroesPage

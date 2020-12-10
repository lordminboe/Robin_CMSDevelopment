import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Image, Banner,BannerImage,HomeDescriptionStyle, HeroBox, HeroBoxItems} from "../pageStyles/pageStyles"


const IndexPage = () => {
  const {
    wpcontent: {
      page: {
        homeMeta: {
          homepagetitle,
          homepagedescription,
          homepageheaderpicture,
          homepagefeaturedheroes,
        },
      },
    },
  } = useStaticQuery(graphql`

  query {
    wpcontent {
      page(id: "Home Page", idType: URI) {
        homeMeta {
          homepagetitle
          homepagedescription
          homepageheaderpicture {
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
          homepagefeaturedheroes {
            ... on WPGraphql_Hero {
              slug
              heroesMeta {
                name
                heroWins
                heroType
                gender
                faction
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
            }
          }
        }
      }
    }
  }
  
  `)

  return (
    <Layout>
      <SEO title="Home" />
        <Banner className="banner" >
          <BannerImage fluid={homepageheaderpicture.imageFile.childImageSharp.fluid} alt={homepageheaderpicture.altText} />
          <div className="inner-div" >
            <h1 className="header-title" >{homepagetitle}</h1>
          </div>
        </Banner>

        <HomeDescriptionStyle className="description" >
          <p>{homepagedescription}</p>
        </HomeDescriptionStyle>
        <HeroBox>
          <h2>Featured Heroes</h2>
          <div>
            {homepagefeaturedheroes.map((heroes, slug) => (
              <HeroBoxItems key={slug} to={`/${slug}`} >
                <h3>{heroes.heroesMeta.name}</h3>
                <Image fluid={heroes.heroesMeta.heroFoto.imageFile.childImageSharp.fluid} alt={heroes.heroesMeta.heroFoto.altText} />
              </HeroBoxItems>
            ))}
          </div>
        </HeroBox>
    </Layout>
  )
}


export default IndexPage

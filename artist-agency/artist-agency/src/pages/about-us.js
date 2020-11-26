import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import {COLORS} from '../constants'
import {Wrapper, Image, BottomEdgeDown, BottomEdgeUp} from "./pageStyles/pageStyles"

const AboutUsPage = () => {
    const {wpcontent: {
        page: {
            aboutUsMeta: {
                aboutUsPageDescription, aboutUsPageHeaderPicture
            },
        },
    }} = useStaticQuery(graphql`
    query {
        wpcontent{
          page(id: "about-us", idType: URI) {
              aboutUsMeta {
                  aboutUsPageDescription
                  aboutUsPageHeaderPicture {

                      altText
                      sourceUrl
                      imageFile {
                        childImageSharp {
                          fluid(quality: 100){
                            ...GatsbyImageSharpFluid_withWebp
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
            <Wrapper descriptionColor={COLORS.PRIMARY}>
                <div className="banner">
                    <Image fluid={aboutUsPageHeaderPicture.imageFile.childImageSharp.fluid} alt={aboutUsPageHeaderPicture.altText} />
                    <BottomEdgeDown color={COLORS.PRIMARY} />
                </div>
                <div className="description">
                    <h2>About Us</h2>
                    <p>{aboutUsPageDescription}</p>
                    <BottomEdgeUp colo={COLORS.BLACK} />
                </div>
            </Wrapper>
        </Layout>
    )
}

export default AboutUsPage
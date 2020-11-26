import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import {COLORS} from '../constants'
import {RiMailSendFill, RiPhoneLine, RiUserLocationLine} from 'react-icons/ri'
import {Wrapper, Image, BottomEdgeDown, BottomEdgeUp} from "./pageStyles/pageStyles"

const Contact = () => {
    const {wpcontent: {
        page: {
            contactMeta: {
                contactPageDescription, contactPageHeaderPicture, contactPageEmail
            },
        },
    }} = useStaticQuery(graphql`
    query ContactPageQuery {
        wpcontent {
          page(id: "contact", idType: URI) {
              contactMeta {
                  contactPageAddress
                  contactPageCity
                  contactPageDescription
                  contactPageEmail
                  contactPageLatitude
                  contactPageLongitude
                  contactPagePhone
                  contactPagePostcode
                  contactPageHeaderPicture {
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
            <SEO title="Contact"/>
            <Wrapper color={COLORS.PRIMARY}>
               <div className="banner">
                   <Image fluid={contactPageHeaderPicture.imageFile.childImageSharp.fluid} alt={contactPageHeaderPicture.altText} />
                    <BottomEdgeDown color={COLORS.PRIMARY}></BottomEdgeDown>
               </div>
               <div className="description">
                   <h2>Contact Us</h2>
                    <p>{contactPageDescription}</p>
                    <BottomEdgeUp color={COLORS.BLACK} />
               </div>
               <div className='contact-info'>
                   <div>
                       <RiMailSendFill style={{height: '4rem', width: "4rem"}} />
                       <p >Send us an email at <a target='__blank' href={`mailto:${contactPageEmail}`}>{contactPageEmail}</a> </p>
                   </div>

               </div>
            </Wrapper>
        </Layout>
    )
}

export default Contact
import React from 'react'
import logo from "../../assets/Logo.svg"
import StyledFooter,{StyledMiningCard, 
    StyledInput, StyledImages, 
    StyledLinksSection, StyledLinks, 
    StyledCopyrightSection,
    StyledSocials, StyledSection} 
    from './StyledFooter'
import visa from "../../assets/Visa.svg"
import bitcoin from "../../assets/Bitcoin.svg"
import mastercard from "../../assets/Mastercard.svg"
import facebook from "../../assets/social/facebook-f 1.svg"
import instagram from "../../assets/social/instagram 1.svg"
import linkedin from "../../assets/social/linkedin 1.svg"
import twitter from "../../assets/social/twitter 1.svg"
import youtube from "../../assets/social/youtube 1.svg"


const Footer = () => {

    const linksArray = [
        {
            title: "Quick Links",
            links:["Home", "Products",
            "About","Features","Contact"]
        },
        {
            title: "Resources Links",
            links:["Download Whitepaper", "Smart Token",
            "Blockchain Explore","Crpto API","Interest"]
        }
    ]

    const socialImages = [
        youtube,facebook, instagram,twitter, linkedin
    ]

    const paymentImages = [
        visa, bitcoin, mastercard
    ]

  return (
    <StyledFooter>
        <StyledMiningCard>
            <StyledSection>
                <h1>Start Mining Now</h1>
                <p>
                    Nisi tempor dolore amet adipisicing 
                    eiusmod in elit eiusmod quis adipisicing 
                    nisi.
                </p>
            </StyledSection>
            <form>
                <StyledInput type="text" placeholder='enter message'/>
                <button>Subscribe</button>
            </form>
        </StyledMiningCard>
        <StyledLinksSection>
            <StyledLinks>
                <img src={logo} alt="logo" />
            </StyledLinks>
            {linksArray.map(el =>
                <StyledLinks key={el.title}>
                    <p>{el.title}</p>
                    {el.links.map(e => 
                    <a key={e}>{e}</a>)}
                </StyledLinks>
            )}
            <StyledLinks>
                <h2>We accept following payment systems</h2>
                <StyledImages>
                        {paymentImages.map(el => 
                        <img key={el} src={el} alt=""/>)}
                </StyledImages>
            </StyledLinks>
        </StyledLinksSection>
        
        <StyledCopyrightSection>
            <h2>&copy; 2022 CRAPPO. All rights reserved</h2>
            <StyledSocials>
                {socialImages.map(el => 
                    <img key={el} src={el} alt=""/>
                )}
                
            </StyledSocials>
        </StyledCopyrightSection>
    </StyledFooter>
  )
}

export default Footer
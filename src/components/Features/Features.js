import React from 'react'
import StyledFeatures,{StyledText, StyledImage, StyledItem, StyledTitle} from './StyledFeatures'
import chart from "../../assets/Chart.svg"
import table from "../../assets/Table.svg"
import stat from "../../assets/Statistic.svg"


const Features = () => {

    const featDetails = [
        {   
            id:1,
            heading:`Invest Smart`,
            text:`lorem ipsum dlor Cupidatat laboris 
                consequat voluptate laborum aliquip nulla 
                deserunt exercitation amet exercitation`,
            img: chart
        },
        {
            id:2,
            heading:`Detailed Statistics`,
            text:`lorem ipsum dlor Cupidatat laboris 
                consequat voluptate laborum`,
            img: stat
        },
        {
            id:3,
            heading:`Grow Your Profit And Track Your Investments`,
            text:`lorem ipsum dlor Cupidatat laboris 
                consequat voluptate laborum aliquip nulla 
                deserunt exercitation amet exercitation`,
            img: table
        },
    ]

  return (
    <StyledFeatures>
        <StyledTitle>
            <h1>
                Market Sentiments, Portfolio, And
                Run The Infrastructure Of Your Choice
            </h1>
        </StyledTitle>
        
        {
            featDetails.map(el =>
                <StyledItem key={el.id}>
                    <StyledText>
                        <h2>{el.heading}</h2>
                        <p>{el.text}</p>
                        <button>learn more</button>
                    </StyledText>
                    <StyledImage number={el.id}>
                        <img src={el.img} alt=""/>
                    </StyledImage>
                </StyledItem>
            )
        }        
    </StyledFeatures>
  )
}

export default Features
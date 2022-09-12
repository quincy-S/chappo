import React from 'react'
import StyledStatCard from './StyledStatCard'

const StatCard = ({imageSrc,headerText,infoText}) => {
  return (
    <StyledStatCard>
        <img src={imageSrc} alt="stat-img" />
        <span>
            <h3>{headerText}</h3>
            <p>{infoText}</p>
        </span>
    </StyledStatCard>
  )
}

export default StatCard
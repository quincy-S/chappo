import React from 'react'
import StyledCryptos,{StyledCryptoCard, StyledHeading, StyledText} from './StyledCryptos'
import lite from "../../assets/LiteCoin.svg"
import btc from "../../assets/logos_bitcoin.svg"
import eth from "../../assets/Icon.svg"

import arrow from "../../assets/arrow.svg"

const Cryptos = () => {

  const cryptoDetails = [
    {
      logo: btc,
      name: "Bitcoin",
      abbrev: "BTC",
      text: "Digital currency in which a record of transactions is maintained"
    },
    {
      logo: eth,
      name: "Ethereum",
      abbrev: "ETH",
      text: "Blockchain technology to create and run decentralized digital applications"
    },
    {
      logo: lite,
      name: "Litecoin",
      abbrev: "LTC",
      text: "Cryptocurrency that enables instant payments to anyone in the world"
    }

  ]


  return (
    <StyledCryptos>
      {
        cryptoDetails.map(crypto =>
          <StyledCryptoCard key={crypto.abbrev}>
            <img src={crypto.logo} alt=""/>
          
            <StyledHeading>
              <h1>{crypto.name}</h1>
              <h6>{crypto.abbrev}</h6>
            </StyledHeading>
            
            <StyledText>
              <p>{crypto.text}</p>
            </StyledText>
            <span>
              <img src={arrow} alt="" />
            </span>
          
        </StyledCryptoCard>
        )
      }
    </StyledCryptos>
  )
}

export default Cryptos
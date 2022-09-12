import React from 'react'
import StyledCryptocurrencies, {StyledSection} from './StyledCryptocurrencies'
import Cryptos from '../Cryptos/Cryptos'

const CryptoCurrencies = () => {
  return (
  
      <StyledCryptocurrencies>
        <StyledSection>
          <h1>
              Trade Securely And Market The High Growth CryptoCurrencies
          </h1>
          <Cryptos />
        </StyledSection>
      </StyledCryptocurrencies>

  )
}

export default CryptoCurrencies
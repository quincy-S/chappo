import React from 'react'
import Header from "../Header/Header"
import Main from "../Main/Main"
import StyledContent from './StyledContent'
import Cryptocurrencies from "../Cryptocurrencies/CryptoCurrencies"
import Features from '../Features/Features'
import Footer from "../Footer/Footer"

const Content = () => {
  return (
    <StyledContent>
      <Header />
      <Main />
      <Cryptocurrencies />
      <Features />
      <Footer />
    </StyledContent>
  )
}

export default Content
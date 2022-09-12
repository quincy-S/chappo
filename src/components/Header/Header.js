import React,{useState} from 'react'
import logo from "../../assets/Logo.svg"
import StyledHeader, {StyledDiscount,
     StyledSection, StyledInfoSection,
     StyledImageSection, StyledLinks, StyledButtons,
    StyledNavItems} from './StyledHeader'
import Popup from "../Popup/Popup"
import Burger from '../Burger/Burger'
import arrow from "../../assets/Arrow Right.svg"
import Bitcoin from "../../assets/Illustration.svg"

const Header = () => {

    const [show, setShow] = useState(false)

    function handleClick(){
        setShow(prevState =>
            !prevState)
            console.log(show)
    }

  return (
    <div>
        <StyledHeader>
        <nav>
            <img src={logo} alt="logo-img" />
            <StyledNavItems>
                <StyledLinks>
                    {["Products","Features","About","Contact"].map(el =>
                    <a key={el}>{el}</a>)}
                </StyledLinks>
                <StyledButtons>
                    <a>Login</a>
                    <span>|</span>
                    <button>Register</button>
                </StyledButtons>
            </StyledNavItems>
            <Burger show={show} handleClick={handleClick}/>
        </nav>
        <Popup show={show}/>
        <StyledSection>
            <StyledInfoSection>
                <StyledDiscount>
                    <span>70% SAVE</span>
                    <p>for the best black friday deals</p>
                </StyledDiscount>
                <h1>Fastest & secure platform to Invest In Crypto</h1>
                <p>buy and sell cryptocurrencies by trusted 10M wallets, in over 100m
                transactions
                </p>
                <button>
                    Try for FREE
                    <img src={arrow} alt="stroke-img" />
                </button>
            </StyledInfoSection>
            <StyledImageSection>
                <img src={Bitcoin} alt="Bitcoin-img" />
            </StyledImageSection>
        </StyledSection>
        </StyledHeader>
    </div>
  )
}

export default Header
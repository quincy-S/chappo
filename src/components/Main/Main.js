import React,{useEffect} from 'react'
import StatCard from "../../components/StatCard/StatCard"
import StyledMain,{StyledSection,
    StyledCalcSection,StyledForm,
    StyledStatistics,StyledInfo,
    StyledImageSection, StyledFormText, StyledFormInputs} from "./StyledMain"
import earth from "../../assets/earth-icon.svg"
import graph from "../../assets/graph-icon.svg"
import profile from "../../assets/profile-icon.svg"
import crypt from "../../assets/Illustrations.svg"
import { useInView } from 'react-intersection-observer'


const Main = () => {

    const {ref, inView} = useInView()

    const stats = [
        {
            img:graph,
            header:"$30B",
            info:"Digital Currency Exchange",
        }, 
        {
            img:profile,
            header:"190",
            info:"Countries around the world",
        },
        {
            img:earth,
            header:"10M+",
            info:"Trusted wallet Investors",
        }  
    ]

    // useEffect(()=>{
    //     console.log(`use in view, ${inView}`)
    // },[inView])

  return (
    <StyledMain>
        <StyledStatistics>{
            stats.map(el => 
            <StatCard 
            key={el.header} 
            imageSrc={el.img}
            headerText={el.header}
            infoText={el.info}
            />)
        }
        </StyledStatistics>
        <StyledSection ref={ref}>
            <StyledInfo>
                <h2>why you should choose CHAPPO</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Vero, laboriosam? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. In,
                    praesentium.
                </p>
                <button> learn more </button>
            </StyledInfo>
            <StyledImageSection>
                <img src={crypt} alt=""/>
            </StyledImageSection>
        </StyledSection>
        <StyledCalcSection>
            <h3>
                How Much Can You Earn With Us
            </h3>
            <p>
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. 
                Porro, id similique temporibus 
                dignissimos tempore odio?
            </p>
            <StyledForm>
                <StyledFormInputs>
                    <input type="text" placeholder='Enter your hash rate'/>
                    <select>
                        <option value>TH/s</option>
                        <option value>H/s</option>
                        <option value>KH/s</option>
                        <option value>MH/s</option>
                        <option value>GH/s</option>
                    </select>
                    <button>Calculate</button>
                </StyledFormInputs>
                <StyledFormText>
                    <h5>ESTIMATED 24 HOUR REVENUE:</h5>
                    <h2>0.055 130 59 ETH</h2>
                    <h4>{"($1275)"}</h4>
                    
                    <h6>
                        Revenue will change based on mining difficulty
                        and ethereum price.
                    </h6>
                </StyledFormText>
                
            </StyledForm>
        </StyledCalcSection>        
    </StyledMain>
  )
}

export default Main
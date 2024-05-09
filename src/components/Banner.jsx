import React from 'react';
import styled from 'styled-components';
import adv from '../assets/image/adv.png';
const Banner = () => {
  return (
    <div>
      <Img src={adv} alt="" />
    </div>
  );
};

const Img = styled.img`
width:80%;
display: flex;
margin: auto;
margin-top: 90px;
margin-bottom: 20px;
border-radius: 10px;
cursor: pointer;
`
export default Banner;
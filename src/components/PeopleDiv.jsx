import React from 'react';
import styled from 'styled-components';

const PeopleList = () => {
  return (
    <Container>
      <PersonContainer>
        <Image src=""/>
        <Name>허명행 <br /> <span style={{color:'gray', fontSize:'14px'}}>감독</span> <hr /></Name>
      </PersonContainer> 
      <PersonContainer>
        <Image src=""/>
        <Name>허명행 <br /> <span style={{color:'gray', fontSize:'14px'}}>감독</span> <hr /></Name>
      </PersonContainer> 
      <PersonContainer>
        <Image src=""/>
        <Name>허명행 <br /> <span style={{color:'gray', fontSize:'14px'}}>감독</span> <hr /></Name>
      </PersonContainer> 
      <PersonContainer>
        <Image src=""/>
        <Name>허명행 <br /> <span style={{color:'gray', fontSize:'14px'}}>감독</span> <hr /></Name>
      </PersonContainer> 
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  overflow: visible;
  overflow-wrap: normal;
`;

const PersonContainer = styled.div`
  display: flex;
  margin-right: 40px; 
  align-items: center;
`;

const Image = styled.img`
  width: 50px; 
  height: 50px; 
  border-radius: 10%; 
  margin-right: 10px; 
`;

const Name = styled.div`
  margin-top:14px;
  font-size: 16px; 
  width: 220px;
`;


export default PeopleList;

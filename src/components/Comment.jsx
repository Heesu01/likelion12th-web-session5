// import React from "react";
import styled from "styled-components";
import movie from "../assets/image/1.jpg";
const Comment = () => {
  return (
    <CommentOutContainer>
      <h2>지금 뜨는 코멘트</h2>
      <CommentContainer>
        <CommentBox>
          <Info>
            <Title>
              idid <Star>★★★★★</Star>
            </Title>
            <Content>
              <Image src={movie} art="영화포스터"></Image>
              <p>
                범죄도시
                <br />
                재미있고 돈을 많이 들인 티가 나는 팝콘뮤비
              </p>
              <P></P>
            </Content>
          </Info>
        </CommentBox>
        <CommentBox>
          <Info>
            <Title>
              idid <Star>★★★★★</Star>
            </Title>
            <Content>
              <Image src={movie} art="영화포스터"></Image>
              <p>
                범죄도시
                <br />
                재미있고 돈을 많이 들인 티가 나는 팝콘뮤비
              </p>
              <P></P>
            </Content>
          </Info>
        </CommentBox>
        <CommentBox>
          <Info>
            <Title>
              idid <Star>★★★★★</Star>
            </Title>
            <Content>
              <Image src={movie} art="영화포스터"></Image>
              <p>
                범죄도시
                <br />
                재미있고 돈을 많이 들인 티가 나는 팝콘뮤비
              </p>
              <P></P>
            </Content>
          </Info>
        </CommentBox>
        <CommentBox>
          <Info>
            <Title>
              idid <Star>★★★★★</Star>
            </Title>
            <Content>
              <Image src={movie} art="영화포스터"></Image>
              <p>
                범죄도시
                <br />
                재미있고 돈을 많이 들인 티가 나는 팝콘뮤비
              </p>
              <P></P>
            </Content>
          </Info>
        </CommentBox>
      </CommentContainer>
    </CommentOutContainer>
  );
};

const CommentOutContainer = styled.div`
  width: 80%;
`;
const CommentContainer = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;
`;
const CommentBox = styled.div`
  display: inline-block;
  margin-right: 20px;
  width: 450px;
  height: auto;
  text-align: left;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Info = styled.div``;

const Title = styled.h4`
  margin: 10px;
  padding-left: 10px;
  margin-bottom: 3px;
  font-size: 14px;
`;
const Star = styled.span`
  padding-left: 280px;
  color: #cccc66;
  font-size: 20px;
`;
const Content = styled.div`
  display: flex;
  text-align: left;
`;
const Image = styled.img`
  height: 100px;
  width: auto;
  margin: 15px;
`;
const P = styled.p`
  text-align: left;
`;

export default Comment;

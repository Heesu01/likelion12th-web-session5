import React from "react";
import styled from "styled-components";

const NotFound = () => (
  <CenteredDiv>
    <div>
      <h2>404 - Not Found</h2>
      <p>해당 페이지를 찾을 수 없습니다.</p>
    </div>
  </CenteredDiv>
);
const CenteredDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default NotFound;

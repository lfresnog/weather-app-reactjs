import styled from "styled-components";

export const DetailStyle = styled.div`
  position: relative;
  background: #ffffff;
  border-radius: 4px;
  padding: 32px;
  width: 441px;
  height: fit-content;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);

  h2 {
    color: #484848;
    font-size: 23px;
    font-weight: 600;
    line-height: 24px;
    margin: 0;
    margin-bottom: 30px;
    padding: 0;
  }

  p {
    margin: 10px 0;
    color: #717171;
    line-height: 20px;
    max-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: capitalize;
  }
`;

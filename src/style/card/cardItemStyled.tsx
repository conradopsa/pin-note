import styled from "styled-components";

export const CardItemStyled = styled.section`
  > section {
    display: block;
    border: 1px solid black;
    border-radius: 5px;

    > header {
      overflow-wrap: anywhere;
    }

    > main {
      overflow-wrap: anywhere;
      padding-left: 5px;
      padding-bottom: 3px;
      height: 120px;
    }
  }
`;

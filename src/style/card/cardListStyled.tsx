import styled, { css } from "styled-components";
import { largeDesktopDown, desktopDown, tabletDown, largePhoneDown } from "../../style/breakpoints";

export const CardListStyled = styled.main`
  > main {

    > div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

      ${largeDesktopDown(css`
        grid-template-columns: 1fr 1fr 1fr 1fr;
      `)}

      ${desktopDown(css`
        grid-template-columns: 1fr 1fr 1fr;
      `)}

      ${tabletDown(css`
        grid-template-columns: 1fr 1fr;
      `)}

      ${largePhoneDown(css`
        grid-template-columns: 1fr;
      `)}

      grid-gap: 10px;
      padding: 10px;
    }
  }
`;

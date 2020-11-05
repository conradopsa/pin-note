import styled from "styled-components";

export const AppStyled = styled.section`
  > section {
    --header-height: 72px;
    --nav-height: 58px;

    header {
      display: flex;
      justify-content: center;
      align-items: center;

      > svg {
        height: 32px;
        margin-left: 8px;
        //transform: scaleX(-1);
      }
    }

    nav {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid black;
      border-bottom: 1px solid black;

      > * {
        display: block;
        margin: 5px 5px;

        > button {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }

    > main {
      min-height: calc(100vh - var(--header-height) + var(--nav-height));
    }

    footer {
      color: white;
      background-color: black;
      text-align: center;

      > svg {
        height: 32px;
        margin: 15px 5px;

        + * {
          margin-top: 0;
        }
      }

      :first-child {
        margin-top: 0;
        padding-top: 5px;
      }

      :last-child {
        margin-bottom: 0;
        padding-bottom: 8px;
      }
    }
  }
`;

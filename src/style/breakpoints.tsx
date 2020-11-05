import { css, FlattenSimpleInterpolation } from "styled-components";

type FSI = FlattenSimpleInterpolation

export const largeDesktopDown = (content: FSI) => css`
  @media only screen and (max-width: 1200px) {
    ${content}
  }
`;

export const desktopDown = (content: FSI) => css`
  @media only screen and (max-width: 992px) {
    ${content}
  }
`;

export const tabletDown = (content: FSI) => css`
  @media only screen and (max-width: 768px) {
    ${content}
  }
`;

export const largePhoneDown = (content: FSI) => css`
  @media only screen and (max-width: 600px) {
    ${content}
  }
`;

export const phoneDown = (content: FSI) => css`
  @media only screen and (min-width: 600px) {
    ${content}
  }
`;
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import styled from "styled-components";

export const RightDrawerStyled = styled(({ ...props }) => <Drawer {...props} />)`
  && {
    .inline {
      display: inline-flex;
    }

    .main-content-drawer {

      hr {
        margin: 0 5px;
      }

      p {
        padding-left: 10px;
        padding-right: 10px;
      }
    }

    .MuiPaper-root {
      max-width: 300px;
    }

    .MuiInputBase-root {
      padding: 5px 10px;
    }

    .MuiInput-underline:after {
      border-bottom: 2px solid black;
    }

    .MuiButton-root {
      //display: block;
      width: 100%;
      height: 48px;
      border-radius: 0;
    }

    .MuiButton-label {
      justify-content: space-between;

      svg {
        margin-right: 15px;
        margin-left: 5px;
        height: 24px;
        width: auto;
      }
    }
  }
`;
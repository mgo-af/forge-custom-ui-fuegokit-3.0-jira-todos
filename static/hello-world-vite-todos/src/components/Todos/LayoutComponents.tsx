import styled from "styled-components";
import { Box, themeGet, BoxProps } from "@fuegokit/react";

interface RowProps extends BoxProps {
  isChecked?: boolean;
  isCompact?: boolean;
}

export const Card = styled(Box)`
  box-shadow: ${themeGet("shadows.elevation.shadow.raised")};
  background-color: ${themeGet("colors.elevation.surface.default.[default]")};

  position: relative;
  text-decoration: none;
  border-radius: 3px; // Kept as is
  margin: ${themeGet("space.1")} ${themeGet("space.0")}; // Updated to spacing scale
  height: calc(100vh - ${themeGet("space.2")}); // Kept the calc as is
  box-sizing: border-box;
`;

export const Status = styled(Box)`
  float: right;
  align-items: center;
  display: inline-flex;
  margin-top: -24px; // Kept as is

  & > span {
    margin-left: ${themeGet("space.2")}; // Updated to spacing scale
  }
`;

export const Form = styled.form`
  padding: ${themeGet("space.2")} 0; // Updated to spacing scale
`;

export const LoadingContainer = styled(Box)`
  justify-content: center;
  display: flex;
  align-items: center;
  height: 100%;
  background-color: ${themeGet("colors.elevation.surface.default.[default]")};
`;

export const Row = styled(Box)<RowProps>`
  transition: 0.3s ease all;
  padding: ${themeGet("space.2")}; // Updated to spacing scale
  border-bottom: 1px solid ${themeGet("colors.border.default")};

  button {
    opacity: 0;
    transition: 0.2s ease all;
    margin-left: ${themeGet("space.2")}; // Updated to spacing scale
  }

  label span {
    color: ${themeGet("colors.text.default")};
    text-decoration-color: ${themeGet("colors.text.default")};
  }

  &:hover {
    button {
      opacity: 1;
    }
  }

  ${(props) => `
    ${props.isChecked ? "text-decoration: line-through;" : ""}
    ${
      props.isCompact ? `padding: 0 ${themeGet("space.1")};` : ""
    } // Updated to spacing scale
    ${props.isCompact ? "border: 0;" : ""}
  `}
`;

export const IconContainer = styled.span`
  position: relative;
  height: 20px; // Kept as is
  width: 24px; // Kept as is
  align-self: center;
  display: inline-flex;
  flex-wrap: nowrap;
  max-width: 100%;
  position: relative;
`;

export const Icon = styled.span`
  position: absolute;
`;

export const ScrollContainer = styled(Box)`
  overflow: auto;
  max-height: calc(100% - ${themeGet("space.10")}); // Kept the calc as is
`;

export const SummaryFooter = styled(Box)`
  width: 100%;
  height: ${themeGet("space.10")}; // Updated to spacing scale
  bottom: 0;
  left: 0;
  position: absolute;
  background: ${themeGet("colors.elevation.surface.sunken")};
  border-top: 1px solid ${themeGet("colors.border.default")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SummaryCount = styled(Box)`
  padding: 0 ${themeGet("space.3")}; // Updated to spacing scale
`;

export const SummaryActions = styled(Box)`
  padding: ${themeGet("space.2")}; // Updated to spacing scale
`;

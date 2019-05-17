import * as React from "react";
import styled from "@emotion/styled";

export const GenericButton = styled.button({
  borderRadius: "4px",
  color: "#fff",
  fontSize: 14,
  fontWeight: "bold",
  height: "33px",
  textTransform: "none",
  width: "159px",
  outline: "none",
  backgroundColor: "blue",
  border: "none",
});

export interface Props {
  label: string;
}

function Button({ label }: Props) {
  return <GenericButton>{label}</GenericButton>;
}

export default Button;

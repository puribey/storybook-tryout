import * as React from "react";
import { GenericButton } from "../styles/styles";

export interface Props {
  label: string;
}

function Button({ label }: Props) {
  return <GenericButton>{label}</GenericButton>;
}

export default Button;

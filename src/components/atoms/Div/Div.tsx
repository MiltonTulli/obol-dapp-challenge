import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
}

export const Div: FC<Props> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

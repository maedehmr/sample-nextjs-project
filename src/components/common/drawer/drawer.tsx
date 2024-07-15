import { ReactNode } from "react";
import { MyDrawerStyles } from "./drawerStyles";

interface MyDrawerProps {
  children: ReactNode;
  open: boolean;
  title: string;
  onClose: () => void;
}
export const MyDrawer: React.FC<MyDrawerProps> = ({
  children,
  open,
  onClose,
  title,
}) => {
  return (
    <MyDrawerStyles title={title} onClose={onClose} open={open} placement="top">
      {children}
    </MyDrawerStyles>
  );
};

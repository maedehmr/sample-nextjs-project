import { ReactNode } from "react";
import { CustomDrawerStyles } from "./drawerStyles";

interface CustomDrawerProps {
  children: ReactNode;
  open: boolean;
  title: string;
  onClose: () => void;
}
export const CustomDrawer: React.FC<CustomDrawerProps> = ({
  children,
  open,
  onClose,
  title,
}) => {
  return (
    <CustomDrawerStyles title={title} onClose={onClose} open={open} placement="top">
      {children}
    </CustomDrawerStyles>
  );
};

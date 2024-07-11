import { Tabs } from "antd";
import { ToggleMode } from "../../global/toggleMode";
import { HeaderStyles } from "./headerStyles";

export const Header: React.FC = () => {
  return (
    <HeaderStyles>
      <div className="">
        <div className="">Maedeh Morajabi</div>
        <Tabs />
      </div>
      <div className="">
        <ToggleMode />
        <div className="">contact</div>
      </div>
    </HeaderStyles>
  );
};

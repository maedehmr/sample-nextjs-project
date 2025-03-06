import { useThemeStore } from "@/hooks/useThemeStore";
import { CustomSwitchStyles } from "./switchStyles";

export const CustomSwitch: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return <CustomSwitchStyles defaultChecked onChange={toggleTheme} />;
};

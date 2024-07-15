import { useThemeStore } from "@/hooks/useThemeStore";
import { MySwitchStyles } from "./switchStyles";

export const MySwitch: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return <MySwitchStyles defaultChecked onChange={toggleTheme} />;
};

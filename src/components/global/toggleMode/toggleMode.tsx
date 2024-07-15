import { useThemeStore } from "@/hooks/useThemeStore";
import { Switch } from "antd";

export const ToggleMode: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return <Switch defaultChecked onChange={toggleTheme} />;
};

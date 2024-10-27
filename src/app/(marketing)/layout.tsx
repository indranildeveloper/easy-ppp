import { FC } from "react";
import { MarketingLayoutProps } from "@/interfaces/layout/MarketingLayoutProps";

const MarketingLayout: FC<MarketingLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default MarketingLayout;

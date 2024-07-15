"use client";
import { FooterStyles } from "./footerStyles";

export const Footer: React.FC = () => {
  return (
    <FooterStyles>
      <div className="start-section">
        <div className="">Maedeh Morajabi</div>
        <i className="ri-linkedin-fill"></i>
      </div>
      <div className="end-section">@maedeh</div>
    </FooterStyles>
  );
};

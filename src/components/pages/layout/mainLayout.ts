"use client";
import styled from "styled-components";

export const MainLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  color: ${({ theme }) => theme.colors.primaryText};
  border: 0.125rem solid ${({ theme }) => theme.colors.stroke};
  border-radius: 0.5rem;
`;

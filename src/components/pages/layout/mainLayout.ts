"use client";
import styled from "styled-components";

export const MainLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  color: ${({ theme }) => theme.colors.primaryText};
  border: 0.125rem solid ${({ theme }) => theme.colors.stroke};
  border-radius: 0.5rem;
  min-height: calc(100vh - 0.25rem);
  display: grid;
  grid-template-rows: 3.5rem 1fr 3rem;
`;

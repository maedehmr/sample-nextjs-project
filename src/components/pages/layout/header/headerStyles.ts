import styled from "styled-components";

export const HeaderStyles = styled.div`
  .desktop-menu {
    display: none;
  }

  .mobile-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.5rem;
  }

  @media (min-width: 768px) {
    .desktop-menu {
      display: flex;
      justify-content: space-between;
      height: 3.5rem;
      align-items: center;

      .start-section {
        display: flex;
      }

      .end-section {
        display: flex;
        align-items: center;
        gap: 20px;
      }
    }

    .mobile-menu {
      display: none;
    }
  }
`;

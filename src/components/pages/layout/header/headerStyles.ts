import styled from "styled-components";

export const HeaderStyles = styled.div`
  .desktop-menu {
    display: none;
  }

  .mobile-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 1200px) {
    .desktop-menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0.1rem solid ${({ theme }) => theme.colors.stroke};

      .start-section {
        display: flex;
        padding-left: 1.5rem;
        .menu-links {
          margin-left: 9rem;
          a {
            border-left: 0.1rem solid ${({ theme }) => theme.colors.stroke};
            padding: 1.2rem 2rem;
            color: ${({ theme }) => theme.colors.primaryText};
            &:last-of-type {
              border-right: 0.1rem solid ${({ theme }) => theme.colors.stroke};
            }
          }
        }
      }

      .end-section {
        display: flex;
        align-items: center;
        gap: 2rem;
        a {
          color: ${({ theme }) => theme.colors.primaryText};
          border-left: 0.1rem solid ${({ theme }) => theme.colors.stroke};
          padding: 1.3rem 2rem;
        }
      }
    }

    .mobile-menu {
      display: none;
    }
  }
`;

import styled from "styled-components"

export const NavigationWrapper = styled.nav`
  .nav-active {
    color: ${props => props.theme.palette.primary[500]};
  }

  ul {
    display: flex;
    gap: 1rem;
    font-family: var(--ff-heading);
    /* border: #a44f69 solid 4px; */
  }

  ul li {
    display: block;
    position: relative;
    /* border: #ee2562 solid 1px; */

    a {
      display: flex;
      transition: all 0.2s ease;
      text-decoration: none;
      color: ${props => props.theme.palette.text.primary};

      div {
        margin: -4px 0 0 5px;
      }
    }
  }

  ul li:hover > ul {
    display: block;
  }

  ul li a:hover {
    color: ${props => props.theme.palette.primary[300]};
  }

  ul ul {
    animation: fadeInMenu 0.3s both ease-in;
    display: none;
    position: absolute;
    left: 0;
    margin: 0;
    top: 30px;
    text-transform: none;
    background: ${props => props.theme.palette.neutral[1100]};
    padding: 15px 10px 10px 10px;
    box-shadow: 0px 6px 23px -10px rgba(0, 0, 0, 0.5);
  }

  ul ul li {
    width: auto;
    min-width: 170px;
  }

  ul ul li a {
    padding: 5px 10px;
    text-decoration: none;
    white-space: nowrap;
  }

  @keyframes fadeInMenu {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

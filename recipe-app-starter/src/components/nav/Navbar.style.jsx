import styled from "styled-components";
import Flex from "../globalStyles/Flex.style";
import { Link } from "react-router-dom";

export const Nav = styled(Flex)`
  padding: 1rem 1.5rem;
`;

export const Brand = styled(Link)`
  color: ${({ theme }) => theme.colors.logoColor};
`;

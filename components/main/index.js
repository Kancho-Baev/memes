import styled from 'styled-components';

import routes from './routes.json';
import LinkItem from '../linkItem';

const Title = styled.h1`
  color: rgb(103, 105, 107);
  text-decoration: none;
`;

const Main = () => {
  return (
    <>
      <Title>Navigation Links</Title>
      {routes.map(item => (
        <LinkItem {...item} />
      ))}
    </>
  );
};

export default Main;

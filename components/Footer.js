import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  background: rgb(241, 241, 241);
  background: linear-gradient(90deg, rgba(241, 241, 241, 1) 0%, rgba(179, 173, 173, 0.5102703651685394) 100%);
`;

const Image = styled.img`
  width: 50px;
`;
const Text = styled.span`
  margin-right: 5px;
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Link href="https://betterttv.com/emotes/6205684306fd6a9f5be41319" target="_blank" rel="noopener noreferrer">
        <Text>Powered by memes</Text>
        <Image src="/pepeLaugh.gif" />
      </Link>
    </Container>
  );
};

export default Footer;

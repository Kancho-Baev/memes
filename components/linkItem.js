import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { useCallback, useState } from 'react';

import { debounce } from './main/helpers';

const StyledLink = styled.a`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  border-radius: 10px;
  padding-left: 13px;
  padding-bottom: 2px;
  padding-top: 2px;
  margin-top: 7px;
  text-decoration: none;
  ${p => p.active && 'box-shadow: 2px 2px 4px #2f97ff;'}
  transition: box-shadow 0.3s ease-in-out;
  background: rgb(0, 157, 251);
  background: linear-gradient(
    90deg,
    rgba(0, 157, 251, 1) 0%,
    rgba(3, 192, 246, 0.9793714887640449) 22%,
    rgba(0, 212, 255, 0.5102703651685394) 100%
  );
`;

const Text = styled.span`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 5%;
  font-weight: 600;
`;

const LinkItem = ({ url, label = 'Link--->', image, passHref = false }) => {
  const [active, setActive] = useState(false);

  const onEnter = useCallback(() => {
    if (active) return;

    setActive(true);
  }, [active, setActive]);

  const onLeave = useCallback(
    debounce(() => {
      if (!active) return;

      setActive(false);
    }),
    [active, setActive]
  );

  if (!url) return null;

  return (
    <Link href={url} passHref={passHref}>
      <StyledLink
        {...(passHref ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        active={active}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        {image && <Image src={image} width={50} height={50} />}
        <Text>{label}</Text>
      </StyledLink>
    </Link>
  );
};

export default LinkItem;

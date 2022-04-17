import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';

import List from './list';
import { options } from './constants';
import Select from '../../../components/select';
import Layout from '../../../components/layout';
import { fetchBTTV } from '../../../api/emotes';

const Text = styled.span`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 5%;
  font-weight: 600;
`;

const Box = styled.div``;

const Emotes = () => {
  const [selected, setSelected] = useState('');
  const [bttvEmotes, setBttvEmotes] = useState([]);

  const onChange = useCallback(e => {
    setSelected(e.target.value);
  }, []);

  useEffect(() => {
    if (!selected) return;

    (async () => {
      try {
        const res = await fetchBTTV(selected);
        setBttvEmotes(res.data);
      } catch (error) {
        setSelected('');
        setBttvEmotes([]);
      }
    })();
  }, [JSON.stringify(selected)]);

  return (
    <Layout>
      <Box>
        <Text>Select Streamer</Text>
        <Select options={options} onChange={onChange} selected={selected} />
        {bttvEmotes?.channelEmotes && <List emotes={bttvEmotes?.channelEmotes} label="Channel Emotes" />}
        {bttvEmotes?.sharedEmotes && <List emotes={bttvEmotes?.sharedEmotes} label="Shared Emotes" />}
      </Box>
    </Layout>
  );
};

export default Emotes;

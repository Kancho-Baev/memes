import LinkItem from '../../../components/linkItem';

const getEmoteUrl = id => `https://cdn.betterttv.net/emote/${id}/3x`;
const getRedirect = id => `https://betterttv.com/emotes/${id}`;

const List = ({ emotes = [], label = '' }) => {
  return (
    <div>
      <h1>{label}</h1>
      {emotes?.map(item => (
        <LinkItem 
          passHref 
          image={getEmoteUrl(item?.id)} 
          url={getRedirect(item.id)} 
          label={item.code} 
        />
      ))}
    </div>
  );
};

export default List;

import PropTypes from 'prop-types';

import FriendListItem from '../FriendListItem/FriendListItem';
import { FriendListSection } from 'components/FriendList/FriendList.styled';

export default function FriendList({friends }) {
    return (
        <FriendListSection>
        {friends.map(({ id, isOnline, avatar, name, }) => {
          return (
                <FriendListItem
            key={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
          />
    )
})}
</FriendListSection>
    )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
import PropTypes from 'prop-types';


export default function FriendList({friends }) {
    return (
        <ul className="friend-list">
            {friends.map(({id, isOnline, avatar, name}) => {
    <li key={id} className="item">
        <span className="status">{isOnline}</span>
        <img className="avatar"
            src={avatar}
            alt="User avatar"
            width="48" />
  <p className={name}></p>
</li>
})}
</ul>
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
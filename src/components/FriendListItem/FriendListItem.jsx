import PropTypes from 'prop-types';
import {Name,Status,ItemCard,Image} from './FriendListItem.styled'


export default function FriendListItem({ id, avatar, isOnline, name }) {
     const backgroundColor = isOnline ? 'green' : 'red';
    return (
        < ItemCard key = { id } className ="item">
            <Status style={{ backgroundColor: backgroundColor }}></Status>
  <Image
  src={avatar} 
   alt="User avatar"
    width="48" />
            <Name>{name}</Name>
</ItemCard>) 
   
}


FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
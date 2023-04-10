import PropTypes from 'prop-types';
import {   ProfileCard,
  Img,
  Title,
    Tag,
  Location,
  StatsList,
  ListItem,
  LabelText,
  QuantityText, } from './Profile.styled';



export default function Profile ({username, tag, location,avatar, stats }) {
   
return (
    <ProfileCard>
        <div className="description">
            <Img
                src={avatar}
                alt={username}
                className="avatar"
            />
            <Title>{username}</Title>
            <Tag>{tag}</Tag>
            <Location>{location}</Location>
        </div>

        <StatsList>
            <ListItem>
                <LabelText>Followers</LabelText>
                <QuantityText>{stats.followers}</QuantityText>
            </ListItem>
            <ListItem>
                <LabelText>Views</LabelText>
                <QuantityText>{stats.views}</QuantityText>
            </ListItem>
            <ListItem>
                <LabelText>Likes</LabelText>
                <QuantityText>{stats.likes}</QuantityText>
            </ListItem>
        </StatsList>
        </ProfileCard>
)
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
}
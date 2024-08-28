import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faHeart,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';

//assets
import { getInterFont } from '../../../../assets/fonts/Inter/interHelper';

//global components
import UserProfileImage from '../../../../components/UserProfileImage';

//utils
import { normalize, scaleVertical } from '../../../../utils/dimensionUtils';

function UserPost(props) {
  return (
    <View style={styles.userPostContainer}>
      <View style={styles.userOuterContainer}>
        <View style={styles.userContainer}>
          <UserProfileImage
            imageDimensions={normalize(48)}
            profileImage={props.profileImage}
          />
          <View style={styles.userTextContainer}>
            <Text style={styles.userName}>
              {props.firstName} {props.lastName}{' '}
            </Text>
            {props.location && (
              <Text style={styles.location}>{props.location}</Text>
            )}
          </View>
        </View>

        <FontAwesomeIcon
          icon={faEllipsisH}
          color="#79869F"
          size={normalize(24)}
        />
      </View>
      <View>
        <Image source={props.image} style={styles.postImage} />
      </View>
      <View style={styles.userPostStats}>
        <View style={styles.userPostStatButton}>
          <FontAwesomeIcon icon={faHeart} color="#79869F" />
          <Text style={styles.userPostStatText}>{props.likes}</Text>
        </View>

        <View style={styles.userPostStatButtonRight}>
          <FontAwesomeIcon icon={faMessage} color="#79869F" />
          <Text style={styles.userPostStatText}>{props.comments}</Text>
        </View>

        <View style={styles.userPostStatButtonRight}>
          <FontAwesomeIcon icon={faBookmark} color="#79869F" />
          <Text style={styles.userPostStatText}>{props.bookMarks}</Text>
        </View>
      </View>
    </View>
  );
}

export default UserPost;

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.any.isRequired,
  profileImage: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookMarks: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  userPostContainer: {
    marginTop: scaleVertical(35),
    borderBottomWidth: normalize(1),
    paddingBottom: scaleVertical(20),
    borderBottomColor: '#EFF2F6',
  },
  userOuterContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userContainer: {
    flexDirection: 'row',
  },
  userTextContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: normalize(10),
  },
  userName: {
    color: '#000',
    ...getInterFont(18, 'SemiBold'),
    fontSize: normalize(16),
  },
  location: {
    color: '#79869F',
    ...getInterFont(18, 'Medium'),
    fontSize: normalize(12),
    marginTop: scaleVertical(5),
  },
  postImage: {
    justifyContent: 'center',
    marginVertical: scaleVertical(20),
  },
  userPostStats: { marginLeft: normalize(10), flexDirection: 'row' },
  userPostStatButton: { flexDirection: 'row' },
  userPostStatButtonRight: { flexDirection: 'row', marginLeft: normalize(27) },
  userPostStatText: { marginLeft: normalize(3), color: '#79869F' },
});

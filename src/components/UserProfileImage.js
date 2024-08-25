import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import PropTypes from "prop-types"

function UserProfileImage(props) {
  return (
    <View style={styles.userImageContainer(props.imageDimensions)}>
      <Image source={props.profileImage} style={styles.image(props.imageDimensions)} />
    </View>
  );
}

UserProfileImage.propTypes = {
  profileImage: PropTypes.any.isRequired,
  imageDimensions: PropTypes.number.isRequired
}

export default UserProfileImage;

const styles = StyleSheet.create({
  userImageContainer: (imageDimensions) => ({
    borderWidth: 1,
    borderColor: '#F35BAC',
    padding: 3,
    borderRadius: imageDimensions,
  }),
  image: (imageDimensions) => ({
    width: imageDimensions,
    height: imageDimensions,
  }),
});

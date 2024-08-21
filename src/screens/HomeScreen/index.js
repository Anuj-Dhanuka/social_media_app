import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, FlatList} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

//local component
import {Title} from './components/Title';
import UserStory from './components/UserStroy.js';

//utils
import {userStories} from '../../utils/userArray';

//assets
import {getInterFont} from '../../assets/fonts/Inter/interHelper';

export const HomeScreen = () => {
  return (
    <>
      <View style={styles.view}>
        <Title title="Let's Explore" />
        <TouchableOpacity style={styles.envelopButton}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color="#898DAE" />
          <View style={styles.messageNumberContainer}>
            <Text style={styles.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.userStoriesContainer}>
        <FlatList
          horizontal={true}
          data={userStories}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <UserStory
              firstName={item.firstName}
              profileImage={item.profileImage}
            />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  envelopButton: {
    padding: 14,
    backgroundColor: '#F9FAFB',
    borderRadius: 100,
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    alignItems: 'center',
    height: 10,
    width: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: 12,
  },
  messageNumber: {
    color: '#fff',
    ...getInterFont(24, 'Bold'),
    fontSize: 6,
  },
  userStoriesContainer: {
    marginTop: 20,
    marginHorizontal: 28,
  },
});

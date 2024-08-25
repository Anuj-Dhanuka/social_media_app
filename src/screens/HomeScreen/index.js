import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, FlatList} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

//local component
import {Title} from './components/Title';
import UserStory from './components/UserStroy.js';
import UserPost from './components/UserPost.js/index.js';

//utils
import {userStories, userPosts} from '../../utils/userArray';

//assets
import {getInterFont} from '../../assets/fonts/Inter/interHelper';

export const HomeScreen = () => {
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUsersStoriesRenderedData] = useState([]);
  const [isLoadingUsersStories, setIsLoadingUsersStories] = useState(false);

  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUsersPostsRenderedData] = useState([]);
  const [isLoadingUsersPosts, setIsLoadingUsersPosts] = useState(false);

  const userStoryPageSize = 4;
  const userPostsPageSize = 2;

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUsersStories(true);
    const getInitialData = pagination(userStories, 1, userStoryPageSize);
    setUsersStoriesRenderedData(getInitialData);
    setIsLoadingUsersStories(false);

    setIsLoadingUsersPosts(true)
    const getInitialPostData = pagination(userPosts, 1, userPostsPageSize)
    setUsersPostsRenderedData(getInitialPostData)
    setIsLoadingUsersPosts(false)
  }, []);

  return (
    <>
      <View style={styles.userPostContainer}>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={styles.view}>
                <Title title="Let's Explore" />
                <TouchableOpacity style={styles.envelopButton}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size={20}
                    color="#898DAE"
                  />
                  <View style={styles.messageNumberContainer}>
                    <Text style={styles.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.userStoriesContainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isLoadingUsersStories) {
                      return;
                    }
                    setIsLoadingUsersStories(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoriesCurrentPage + 1,
                      userStoryPageSize,
                    );
                    if (contentToAppend.length > 0) {
                      setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                      setUsersStoriesRenderedData(prevState => [
                        ...prevState,
                        ...contentToAppend,
                      ]);
                    }
                    setIsLoadingUsersStories(false);
                  }}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={userStoriesRenderedData}
                  keyExtractor={item => item.id}
                  style={{flexGrow: 1}}
                  renderItem={({item}) => (
                    <UserStory
                      key={'userStory' + item.id}
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          showsVerticalScrollIndicator={false}
          data={userPostsRenderedData}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if(isLoadingUsersPosts) {
              return
            }
            setIsLoadingUsersPosts(true)
            const contentToAppend = pagination(userPosts, userPostsCurrentPage + 1, userPostsPageSize)
            if(contentToAppend.length > 0) {
              setUserPostsCurrentPage(userPostsCurrentPage + 1)
              setUsersPostsRenderedData((prevStat) => [...prevStat, ...contentToAppend])
            }
            setIsLoadingUsersPosts(false)
          }}
          renderItem={({item}) => (
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              location={item.location}
              image={item.image}
              likes={item.likes}
              comments={item.comments}
              bookMarks={item.bookmarks}
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
  },
  userPostContainer: {
    marginHorizontal: 24,
  },
});

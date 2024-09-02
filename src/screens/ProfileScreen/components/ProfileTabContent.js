import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { normalize, scaleVertical } from '../../../utils/dimensionUtils';

function ProfileTabContent() {

    return (
        <ScrollView style={styles.profileTabContentContainer}>
            <View style={styles.profileTabContent}>
                <Image
                    source={require('../../../assets/images/default_post.png')}
                    style={styles.image}
                />
                <Image
                    source={require('../../../assets/images/default_post.png')}
                    style={styles.image}
                />
                <Image
                    source={require('../../../assets/images/default_post.png')}
                    style={styles.image}
                />
                <Image
                    source={require('../../../assets/images/default_post.png')}
                    style={styles.image}
                />
                <Image
                    source={require('../../../assets/images/default_post.png')}
                    style={styles.image}
                />
                <Image
                    source={require('../../../assets/images/default_post.png')}
                    style={styles.image}
                />
                <Image
                    source={require('../../../assets/images/default_post.png')}
                    style={styles.image}
                />
                <Image
                    source={require('../../../assets/images/default_post.png')}
                    style={styles.image}
                />
            </View>
        </ScrollView>
    );
}

export default ProfileTabContent;

const styles = StyleSheet.create({
    profileTabContentContainer: {
        backgroundColor: '#FFFFFF',
    },
    profileTabContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: normalize(20),
        paddingBottom: scaleVertical(36)
    },
    image: {
        width: normalize(160),
        height: scaleVertical(110),
        margin: scaleVertical(11),
        borderRadius: normalize(10)
    },
});

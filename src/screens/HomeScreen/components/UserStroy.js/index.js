import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {PropTypes} from "prop-types"

//assets/fonts
import { getInterFont } from "../../../../assets/fonts/Inter/interHelper";

//global components
import UserProfileImage from "../../../../components/UserProfileImage";

//utils
import { normalize, scaleVertical } from "../../../../utils/dimensionUtils";

function UserStory(props) {
    
    return ( 
        <View style={styles.storyContainer}>
            <UserProfileImage profileImage={props.profileImage} imageDimensions={65} />
            <Text style={styles.firstName}>{props.firstName}</Text>
        </View>
     );
}

UserStory.propTypes = {
    firstName: PropTypes.string.isRequired,
}

export default UserStory;

const styles = StyleSheet.create({
    userImageContainer: {
        borderWidth: normalize(1),
        borderColor: '#F35BAC',
        padding: normalize(3),
        borderRadius: normalize(65)
    },
    storyContainer: {
        marginRight: normalize(20)
    },
    image: {
        width: normalize(65),
        height: normalize(65)
    },
    firstName: {
        ...getInterFont(24, 'SemiBold'),
        fontSize: normalize(14),
        color: "#022150",
        marginTop: scaleVertical(8),
        textAlign: "center"
    }
})
import React from "react";
import { Image, Text, View } from "react-native";
import {PropTypes} from "prop-types"

function UserStory(props) {
    
    return ( 
        <View>
            <Image source={props.profileImage} />
            <Text>{props.firstName}</Text>
        </View>
     );
}

UserStory.propTypes = {
    firstName: PropTypes.string.isRequired,
}

export default UserStory;
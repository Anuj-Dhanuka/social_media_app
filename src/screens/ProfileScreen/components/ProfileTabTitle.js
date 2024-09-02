import React from "react";
import PropTypes from "prop-types"
import { StyleSheet, Text } from "react-native";

//assets
import { getInterFont } from "../../../assets/fonts/Inter/interHelper";
import { normalize } from "../../../utils/dimensionUtils";

function ProfileTabTitle(props) {
    return ( 
        <Text style={[styles.title, !props.isFocused && styles.titleNotFocused]}>{props.title}</Text>
     );
}

ProfileTabTitle.propTypes = {
    title : PropTypes.string.isRequired,
    isFocused : PropTypes.bool.isRequired
}

export default ProfileTabTitle;

const styles = StyleSheet.create({
    title: {
        color: "#022150",
        ...getInterFont(24, "SemiBold"),
        fontSize: normalize(16),
        padding: normalize(15)
    },
    titleNotFocused: {
        color: "#79869F",
        ...getInterFont(18, "Medium"),

    }
})
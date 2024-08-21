import React from "react";
import { StyleSheet, Text } from "react-native";
import PropTypes from "prop-types"

//assets
import { getInterFont } from "../../../../assets/fonts/Inter/interHelper";



export const Title = (props) => {
    return (
        <Text style={styles.text}>{props.title}</Text>
    )
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    text: {
        ...getInterFont(24, 'Bold'),
        color: "#022150",
        fontSize: 24
    }
})
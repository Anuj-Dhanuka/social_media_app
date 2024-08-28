import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { normalize, scaleVertical } from "../../utils/dimensionUtils";

//styles
import { getInterFont } from "../../assets/fonts/Inter/interHelper";
import { ProfileTabsNavigator } from "../../Navigation";

function ProfileScreen() {
    return (
        <SafeAreaView style={styles.profileContainer}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.profileImageContainer}>
                    <View style={styles.profileImageContent}>
                        <Image source={require("../../assets/images/default_profile.png")} style={styles.profileImage} />
                    </View>
                    <Text style={styles.userName} >Anuj Dhanuka</Text>
                </View>
                <View style={styles.statContainer}>
                    <View style={styles.statContentContainer}>
                        <Text style={styles.statAmount}>45</Text>
                        <Text style={styles.statType}>Following</Text>
                    </View>
                    <View style={styles.statBorder}></View>
                    <View style={styles.statContentContainer}>
                        <Text style={styles.statAmount}>30M</Text>
                        <Text style={styles.statType}>Followers</Text>
                    </View>
                    <View style={styles.statBorder}></View>
                    <View style={styles.statContentContainer}>
                        <Text style={styles.statAmount}>100</Text>
                        <Text style={styles.statType}>Posts</Text>
                    </View>
                </View>

                <View style={{flexGrow: 1}}>
                    <ProfileTabsNavigator />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    profileContainer: {
        backgroundColor: "#FFFFFF",
        flex: 1
    },
    scrollView: {
        flexGrow: 1
    },
    profileImageContainer: {
        alignItems: "center",
        marginTop: scaleVertical(32)
    },
    profileImageContent: {
        borderWidth: 1,
        borderColor: "#0150EC",
        padding: normalize(4),
        borderRadius: normalize(110)
    },
    profileImage: {
        width: normalize(110),
        height: normalize(110)
    },
    userName: {
        marginTop: scaleVertical(20),
        ...getInterFont(24, 'Bold'),
        fontSize: normalize(20),
        color: "#022150"
    },
    statContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: normalize(40),
        paddingVertical: scaleVertical(30),
        borderBottomWidth: 1,
        borderColor: "#E9EFF1"
    },
    statContentContainer: {
        alignItems: "center"
    },
    statBorder: {
        borderRightWidth: 1,
        borderColor: "#E9EFF1"
    },
    statAmount: {
        ...getInterFont(24, 'Bold'),
        fontSize: normalize(20),
        color: "#022150"
    },
    statType: {
        ...getInterFont(24, 'SemiBold'),
        fontSize: normalize(16),
        color: "#79869F"
    }
})
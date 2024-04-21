import { StyleSheet } from "react-native";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
import { ExtendedTheme } from "@react-navigation/native";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: colors.background,
    },
    scrollVew: {
      marginHorizontal: 10,
      flex: 1,
      marginBottom:-35
    },
    titleTextStyle: {
      fontSize: 32,
    },
    buttonStyle: {
      height: 45,
      width: ScreenWidth * 0.9,
      marginTop: 32,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.primary,
      shadowRadius: 5,
      shadowOpacity: 0.7,
      shadowColor: colors.shadow,
      shadowOffset: {
        width: 0,
        height: 3,
      },
    },
    buttonTextStyle: {
      color: colors.white,
      fontWeight: "700",
    },
    header: {
      width: ScreenWidth * 0.9,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      zIndex: 1

    },
    listContainer: {
      marginTop: 8,
    },
    profilePicImageStyle: {
      height: 50,
      width: 50,
      borderRadius: 30,
    },
    dropdownStyle: {
      borderWidth: 0,
      backgroundColor: colors.background,
    },
    dropdownContainer: {
      width: 110,
      backgroundColor: colors.background,

    },
    location: {
      flexDirection: "row",
      alignItems: "center",
      zIndex: 1
    },
    adImg: {
      width: '100%',
      height: 200
    },


    main: {
      flex: 1
    },

    showroomHeadingText:{
      fontSize:16,
      fontWeight: 'bold'
    },
    showroomHeader:{
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    primaryText:{
      color: colors.primary
    },
    showroomContainer:{
      flexDirection: 'column',
      margin:5,
      justifyContent:'flex-start',
      alignItems: 'flex-start',
    },
    carImg: {
      height: 120,
      width: 150,
    },
    showroomDetails:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo:{
      height: 50,
      width: 52
    },
    showroomNameContainer: {
      flex:1,
      flexDirection: 'column',
      marginHorizontal:5,
      marginVertical:0,
      paddingVertical:0,
    },
    showroomName: {
      fontSize: 14,
      color: colors.black
    },
    showroomDescription:{
      fontSize: 12
    }
  });
};

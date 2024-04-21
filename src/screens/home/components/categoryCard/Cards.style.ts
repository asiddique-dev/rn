import { StyleSheet } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    main: {
      flex: 1
    },
    contentContainer: {
      flex: 1,
      flexDirection: 'column'
    },
    contentRow: {
      flex: 1,
      flexDirection: 'row',
    },
    card: {
      flex: 1,
      flexDirection: 'column',
      margin: 5,
      padding: 5,
      borderWidth: 1,
      borderColor: colors.primary,
      borderStyle: 'solid',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: { width: 10, height: 10 },
      shadowOpacity: 0.4,
      shadowRadius: 5,
      elevation: 15

    },
    categoryImg: {
      width: 80,
      height: 80
    },
    categoryText: {
      fontSize: 9
    }
  });
};

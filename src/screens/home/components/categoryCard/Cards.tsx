import React, {useMemo} from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import createStyles from "./Cards.style";
import { useTheme } from "@react-navigation/native";
import { Categories } from "types";

  const CategoryCards = ({categories}: {categories:Categories}) => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);

    return (<View style={styles.contentContainer}>
      {categories.map((item, index: number) => (
        <View key={index + 1 + ''}>
          {!!(index % 3 === 0) && <View style={styles.contentRow}>
            <TouchableOpacity style={styles.card}>
              <Image source={item.img} resizeMode="contain" style={styles.categoryImg} />
              <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
            {!!(categories.length > index + 1) &&
              <TouchableOpacity style={styles.card}>
                <Image source={categories[index + 1].img} resizeMode="contain" style={styles.categoryImg} />
                <Text style={styles.categoryText}>{categories[index + 1].name}</Text>
              </TouchableOpacity>}
            {!!(categories.length > index + 2) &&
              <TouchableOpacity style={styles.card}>
                <Image source={categories[index + 2].img} resizeMode="contain" style={styles.categoryImg} />
                <Text style={styles.categoryText}>{categories[index + 2].name}</Text>
              </TouchableOpacity>}
          </View>}
        </View>
      )
      )}
    </View>)
  }


export default CategoryCards;

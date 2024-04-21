import React, { useEffect, useMemo, useState } from "react";
import { FlatList, Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
// import * as NavigationService from "react-navigation-helpers";
import createStyles from "./HomeScreen.style";
import { useTheme } from "@react-navigation/native";
import { DEFAULTCITY } from "@shared-constants";
// import axios from "axios";
import DropDownPicker from 'react-native-dropdown-picker';
import { Categories, Cities } from "types";
import CategoryCards from "./components/categoryCard/Cards";

const HomeScreen: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [cities, setCities] = useState<Cities>([]);
  const [selectedCity, setSelectedCity] = useState<string>(DEFAULTCITY);
  const [openDropdown, setOpenDropdown] = useState(false);

  const [categories, setCategories] = useState<Categories>([]);


  useEffect(() => {
    // const cities = axios.get('localhost:3000/cities');
    const cities = [{ value: 'Dubai', label: 'Dubai' }, { value: 'Sharjah', label: 'Sharjah' }];
    setCities(cities);

    const categories = [{
      img: require('../../assets/1.png'),
      name: "Motors"
    }, {
      img: require('../../assets/2.png'),
      name: "Motorbikes"
    }, {
      img: require('../../assets/3.png'),
      name: "Showrooms"
    }, {
      img: require('../../assets/4.png'),
      name: "Parts & Accessories"
    }, {
      img: require('../../assets/5.png'),
      name: "Number Plates"
    }, {
      img: require('../../assets/6.png'),
      name: "Car Service"
    }, {
      img: require('../../assets/7.png'),
      name: "Car Wash"
    }, {
      img: require('../../assets/8.png'),
      name: "Car Recovery"
    }, {
      img: require('../../assets/9.png'),
      name: "Boats"
    },];
    setCategories(categories);
  }, [])

  const cars = [{
    img: require('../../assets/car.png'),
    title: 'Toyota Motos',
    description: '1.2 km away',
    logo: require('../../assets/toyota.png')
  },{
    img: require('../../assets/car.png'),
    title: 'Toyota Motos',
    description: '1.2 km away',
    logo: require('../../assets/toyota.png')
  },{
    img: require('../../assets/car.png'),
    title: 'Toyota Motos',
    description: '1.2 km away',
    logo: require('../../assets/toyota.png')
  },{
    img: require('../../assets/car.png'),
    title: 'Toyota Motos',
    description: '1.2 km away',
    logo: require('../../assets/toyota.png')
  }];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollVew}>
        <View style={styles.header}>
          <View style={styles.location}>
            <Icon
              name="location"
              type={IconType.Ionicons}
              color={colors.primary}
              size={20}
            />
            <DropDownPicker
              open={openDropdown}
              value={selectedCity}
              items={cities}
              setOpen={setOpenDropdown}
              setValue={setSelectedCity}
              containerStyle={styles.dropdownContainer}
              style={styles.dropdownStyle}
            />
          </View>
          <View>
            <TouchableOpacity>
              <Icon
                name="search"
                type={IconType.Ionicons}
                color={colors.primary}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>
        {<CategoryCards categories={categories} />}

        {/*ad... */}
        <Image source={require('../../assets/slide.png')} resizeMode="contain" style={styles.adImg} />

        <View style={styles.showroomHeader}>
          <Text style={styles.showroomHeadingText}>Top Showrooms</Text>
          <TouchableOpacity><Text style={styles.primaryText}>View all</Text></TouchableOpacity>
        </View>
        <FlatList data={cars} horizontal={true} style={styles.main} renderItem={({item, index})=> (
          <TouchableOpacity key={index+1+''} style={styles.showroomContainer}>
            <Image source={item.img} style={styles.carImg} resizeMode="contain" />
            <View style={styles.showroomDetails}>
              <Image source={item.logo} style={styles.logo} resizeMode="contain" />
              <View style={styles.showroomNameContainer}>
                <Text style={styles.showroomName}>{item.title}</Text>
                <Text style={styles.showroomDescription}>{item.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

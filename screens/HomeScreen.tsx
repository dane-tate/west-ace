import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState } from "react";
  
  import { categories, products, user } from "../Data/index";
  import Spacing from "../constants/Spacing";
  import Font from "../constants/Font";
  import Colors from "../constants/Colors";
  import { Ionicons } from "@expo/vector-icons";
  import { NativeStackScreenProps } from "@react-navigation/native-stack";
  import { RootStackParamList } from "../types";
  import { useFonts } from 'expo-font'
  
  
  const IMAGE_WITH = 190;
  const IMAGE_HEIGHT = 250;
  
  type Props = NativeStackScreenProps<RootStackParamList, "Home">;
  
  
  const HomeScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

    const [Font] = useFonts({
      Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
      PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
      PoppinsSemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
    });
  
    const handleProductPress = () => {};
  
    return (

      <SafeAreaView>
        <ScrollView
          style={{
            paddingHorizontal: Spacing * 2,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={user.image}
                style={{ width: Spacing * 4, height: Spacing * 4 }}
              />
              <Text
                style={{
                  fontFamily: "PoppinsSemiBold",
                  fontSize: Spacing * 2,
                  color: Colors.text,
                  marginLeft: Spacing,
                }}
              >
                Bem vindo {user.name}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  padding: Spacing / 2,
                }}
              >
                <Ionicons
                  name="search-outline"
                  size={Spacing * 3}
                  color={Colors.text}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: Spacing / 2,
                }}
              >
                <Ionicons
                  name="cart-outline"
                  size={Spacing * 3}
                  color={Colors.text}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              paddingVertical: Spacing * 4,
            }}
          >
            <Text
              style={{
                fontSize: Spacing * 3.5,
                fontFamily: "PoppinsBold",
                color: Colors.text,
              }}
            >
              Espera pela melhor
              <Text
                style={{
                  fontSize: Spacing * 4,
                  color: Colors.primary,
                }}
              >
                {" "}
                Coleção{" "}
              </Text>
              Para ti
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "PoppinsSemiBold",
                fontSize: Spacing * 2,
              }}
            >
              Categorias
            </Text>
            <ScrollView
              horizontal
              contentContainerStyle={{
                paddingVertical: Spacing,
              }}
            >
              {[{ id: 0, name: "Tudo" }, ...categories].map((category, index) => (
                <TouchableOpacity
                  onPress={() => setActiveCategoryIndex(index)}
                  style={[
                    {
                      paddingHorizontal: Spacing * 2,
                      paddingVertical: Spacing / 2,
                      borderWidth: 1,
                      borderRadius: Spacing * 2,
                      borderColor: Colors.border,
                      marginRight: Spacing,
                    },
                    activeCategoryIndex === index && {
                      backgroundColor: Colors.primary,
                    },
                  ]}
                  key={category.id}
                >
                  <Text
                    style={{
                      color:
                        activeCategoryIndex === index
                          ? Colors.onPrimary
                          : Colors.text,
                      fontSize: Spacing * 1.4,
                      fontFamily: "Poppins",
                    }}
                  >
                    {category.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "PoppinsSemiBold",
                    fontSize: Spacing * 2,
                  }}
                >
                  Lançamento
                </Text>
                <TouchableOpacity
                  style={{
                    paddingVertical: Spacing,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Poppins",
                      fontSize: Spacing * 1.6,
                    }}
                  >
                    Ver Tudo
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                {products.map((product) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigate("Product-detail", { product: product })
                    }
                    style={{
                      marginVertical: Spacing,
                    }}
                    key={product.id}
                  >
                    <Image
                      style={{
                        width: IMAGE_WITH,
                        height: IMAGE_HEIGHT,
                        borderRadius: Spacing * 2,
                      }}
                      source={product.image}
                    />
                    <Text
                      style={{
                        fontFamily: "PoppinsSemiBold",
                        fontSize: Spacing * 1.4,
                        color: Colors.text,
                        marginVertical: Spacing,
                      }}
                    >
                      {product.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "PoppinsSemiBold",
                          fontSize: Spacing * 1.4,
                          color: Colors.gray,
                        }}
                      >
                        {product.price} €
                      </Text>
                      <View
                        style={{
                          width: Spacing / 2,
                          height: Spacing / 2,
                          backgroundColor: Colors.gray,
                          borderRadius: Spacing / 4,
                          marginHorizontal: Spacing,
                        }}
                      />
                      <Text
                        style={{
                          fontFamily: "PoppinsSemiBold",
                          fontSize: Spacing * 1.4,
                          color: Colors.gray,
                        }}
                      >
                        {product.brand}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default HomeScreen;
  
  const styles = StyleSheet.create({});
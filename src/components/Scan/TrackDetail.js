import React from 'react'
import { Platform, Dimensions, Text, TouchableOpacity, View,  StyleSheet,  SafeAreaView, FlatList, Image } from 'react-native'

export default function App(props) {
  const { product } = props.route.params;
  const renderChatItem = (item, index) => {
    return (
      <View>
        <TouchableOpacity key={index} activeOpacity={0.5} style={Style.listItem} >
          <View style={Style.listItemDetail}>
            <Text style={Style.listItemText}>Brand Name: {product.name}</Text>
            <Text style={Style.listItemText}>Color: {product.color}</Text>
            <Text style={Style.listItemText}>Package: {product.package}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  };

  return (
    <SafeAreaView style={{height: dimensions.height * 0.9}}>
      <View style={Style.trackUpperView}>
        <View style={Style.topView}>
          <View style={Style.Avatar}>
            <Image
              source={{uri: 'https://placeimg.com/140/140/any'}}
              style={Style.profileImage}
            />
          </View>
          <View style={Style.headerAvatar}>
            <View style={{width: '100%'}}>
              <Text style={Style.nameText}>{product.name}</Text>
              <Text style={Style.lable}>{product.city}</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity activeOpacity={0.5} style={Style.listItem}>
          <View style={Style.listItemDetail}>
            <Text style={Style.listItemText}>Brand Name: {product.name}</Text>
            <Text style={Style.listItemText}>Color: {product.color}</Text>
            <Text style={Style.listItemText}>Package: {product.package}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={[1]}
        renderItem={renderChatItem.bind(props)}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
      />
    </SafeAreaView>
  );
}

const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
const Style = StyleSheet.create({
  trackUpperView: {
    height: '30%',
    backgroundColor: '#1A2238',
    // borderBottomEndRadius: 100,
  },
  iconText: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 20,
  },
  topView: {
    // flex: 1,
    // flexDirection: 'row',
    height: dimensions.height * 0.4,
  },
  settingText: {
    width: dimensions.width,
    fontSize: 45,
    color: '#fff',
    top: dimensions.height * 0.05,
    marginLeft: 20,
    fontWeight: "bold"
  },

  nameText: {
    fontSize: 20,
    color: '#CFC9C9',
    marginLeft: 10,
    fontWeight: "bold",
    textAlign: "center"
  },
  buttonText: {
    fontSize: 25,
    color: '#7C7575',
    marginLeft: 10,
    // fontWeight: "bold",
    alignSelf: "center"
  },
  lable: {
    color: '#908F9E',
    marginLeft: 10,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  },
  Statuslable: {
    color: '#908F9E',
    fontWeight: "bold",
    textAlign: "center",
  },
  headerAvatar: {
    width: dimensions.width,
    marginVertical: "5%",
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
  },

  Avatar: {
    width: dimensions.width,
    marginVertical: "3%",
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  profileImage: {
    marginHorizontal: 10,
    width: dimensions.height * 0.1,
    height: dimensions.height * 0.1,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    width: dimensions.width,
    padding: 20,
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(61,39,255,0.2)',
        shadowOffset: {
          width: 5,
          height: 5
        },
        shadowRadius: 5,
        shadowOpacity: 0.8
      },
      android: {
        elevation: 8,
      },
    }),
  },
  icon: {
    fontSize: 15
  },
  listItemImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 6,
    // borderWidth: 1,
    // borderColor: '#d3d3d3',
    marginRight: 15
  },
  listItemImage: {
    width: "90%",
    height: "90%",
    borderRadius: 10,
  },
  listItemImageUser: {
    width: 20,
    height: 20,
    margin: 2,
    borderRadius: 12,
  },
  listItem: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3'
  },
  listItemDetail: {
    flex: 1
  },
  load: {
    padding: 10
  },
  listItemText: {
    flex: 1,
    // fontWeight: "bold",
    fontSize: 18,
    color: '#000'
  },
  listItemSubText: {
    flex: 1,
    fontSize: 14,
    color: '#1A2238'
  },
  listItemDetailIconButton: {

    width: 32,
    height: 32,
    borderWidth: 2,
    borderColor: '#d3d3d3',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
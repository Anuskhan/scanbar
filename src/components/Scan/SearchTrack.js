import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import ScanTrack from './ScanTrack';
import data from '../../data.json';
import {useNavigation} from '@react-navigation/native';
import RoutesKey from '../../navigation/routeskey';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
// eslint-disable-next-line no-undef
export default SearchTrack = () => {
  const navigation = useNavigation();
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isBarcode, setIsBarcode] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [name, setName] = useState('');
  const [color, setcolor] = useState('');
  const [packages, setpackage] = useState('');

  const onPress = async () => {
    const jsonValue = await AsyncStorage.getItem('submitData');
    let dataSet = data.users.concat(JSON.parse(jsonValue));
    let newdata = dataSet.filter(x => x.name == trackingNumber);
    if (newdata.length > 0) {
      navigation.navigate(RoutesKey.SCANSTATUS, {product: newdata[0]});;
    } else {
      alert('Data Not Found');
    }
  };

  const enterProduct = () => {
    setIsShow(true);
  };
  let obj = {
    name: name,
    color: color,
    package: packages,
  };
  const submit = async () => {
    if  (name !== '') {
      await AsyncStorage.setItem('submitData', JSON.stringify(obj));
      setIsShow(false);
      setName('');
      setpackage('');
      setcolor('');
    }
  };

  const handleBarcode = e => {
    setTrackingNumber(e?.data);
    setIsBarcode(false);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        {isBarcode && <ScanTrack handleBarcode={handleBarcode} />}

        {!isBarcode && (
          <TouchableOpacity
            onPress={() => {
              setIsBarcode(true);
            }}>
            <Image
              style={styles.logo}
              source={{
                uri: 'https://advocateprinting.net/wp-content/uploads/2020/08/AMP.png',
              }}
            />
          </TouchableOpacity>
        )}
        <View style={styles.trackingView}>
          <TextInput
            style={styles.textInput}
            placeholder="Scan Number"
            placeholderTextColor="#fff"
            value={trackingNumber}
            onChangeText={number => setTrackingNumber(number)}
          />
          {isBarcode && (
            <Icon
              style={styles.icon}
              onPress={() => {
                setIsBarcode(false);
              }}
              name="closecircle"
            />
          )}
        </View>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={enterProduct}>
          <Text>Enter Product</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={isShow} animationType="slide">
      <Text style={styles.head}>Enter Product</Text>
        <View style={styles.modalView}>
          <TextInput
            style={styles.modalTextInput}
            placeholder="Enter Brand Name"
            placeholderTextColor="black"
            value={name}
            onChangeText={value => setName(value)}
          />
        </View>
        <View style={styles.modalView}>
          <TextInput
            style={styles.modalTextInput}
            placeholder="Color"
            placeholderTextColor="black"
            value={color}
            onChangeText={value => setcolor(value)}
          />
        </View>
        <View style={styles.modalView}>
          <TextInput
            style={styles.modalTextInput}
            placeholder="Enter Package in kg or ml"
            placeholderTextColor="black"
            value={packages}
            onChangeText={value => setpackage(value)}
          />
        </View>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.modalButton} onPress={() => submit()}>
            <Text>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalButtons}
            onPress={() => setIsShow(false)}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};;

const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: dimensions.height,
    // justifyContent: 'center',
    backgroundColor: '#1c2e4a',
    alignItems: 'center',
    paddingTop: '40%',
  },
  head: {
    alignSelf: 'center',
    padding: 20,
    fontSize: 18
  },
  logo: {
    width: 200,
    height: 200,
  },
  tinyLogo: {
    width: 30,
    height: 25,
    marginLeft: 5,
  },
  trackingView: {
    // flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#1c2e4a',
    paddingTop: '10%',
  },
  modalView: {
    alignSelf: 'center',
    flexDirection: 'row',
    paddingTop: '10%',
  },
  icon: {color: '#fff', fontSize: 30},
  textInput: {
    width: '50%',
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    paddingBottom: 0,
    marginBottom: 0,
    color: '#fff',
  },
  modalTextInput: {
    width: '50%',
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 0,
    marginBottom: 0,
    color: '#000',
  },
  button: {
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    paddingHorizontal: 50,
    marginLeft: 2,
  },
  modalButton: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    paddingHorizontal: 50,
    // marginLeft: 2
  },
  modalButtons: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    paddingHorizontal: 50,
    marginLeft: 2,
  },
});

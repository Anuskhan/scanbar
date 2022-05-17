import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image
} from 'react-native';
import { RNCamera as Camera } from 'react-native-camera';
export default class ScanTrack extends Component {
  constructor(props) {
    super(props);
    this.handleTourch = this.handleTourch.bind(this);
    this.state = {
      torchOn: false
    }
  }
  onBarCodeRead = (e) => {
    if(e.type=="CODE_128")
    {
      this.props?.handleBarcode(e);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Camera
          style={styles.preview}
          onBarCodeRead={this.onBarCodeRead}
          ref={cam => this.camera = cam}
        >
          <Text style={{
            backgroundColor: 'white'
          }}></Text>
        </Camera>
        <View style={styles.bottomOverlay}>
          <TouchableOpacity onPress={() => this.handleTourch(this.state.torchOn)}>
            <Image style={styles.cameraIcon}
              source={this.state.torchOn === true ? { uri: "https://www.google.com/search?q=image+wallpaper&sxsrf=ALeKk02UwWrZj0wlhYcue3eWH79fmIDc_w:1621698172860&tbm=isch&source=iu&ictx=1&fir=B2kIipqI53NzGM%252CK3xDzlwFVMxheM%252C_&vet=1&usg=AI4_-kR01Vhi3pWJiy_xqV5tp53MugBtNg&sa=X&ved=2ahUKEwiiuZq80N3wAhWIbsAKHWG3BK0Q9QF6BAgQEAE#imgrc=B2kIipqI53NzGM" } : { uri: "https://www.google.com/search?q=image+wallpaper&sxsrf=ALeKk02UwWrZj0wlhYcue3eWH79fmIDc_w:1621698172860&tbm=isch&source=iu&ictx=1&fir=B2kIipqI53NzGM%252CK3xDzlwFVMxheM%252C_&vet=1&usg=AI4_-kR01Vhi3pWJiy_xqV5tp53MugBtNg&sa=X&ved=2ahUKEwiiuZq80N3wAhWIbsAKHWG3BK0Q9QF6BAgQEAE#imgrc=B2kIipqI53NzGM" }} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  handleTourch(value) {
    if (value === true) {
      this.setState({ torchOn: false });
    } else {
      this.setState({ torchOn: true });
    }
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'row',
    height:"50%",
    width:"100%"
  },
  preview: {
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cameraIcon: {
    margin: 5,
    height: 40,
    width: 40
  },
  bottomOverlay: {
    position: "absolute",
    width: "100%",
    flex: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
});
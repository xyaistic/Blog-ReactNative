import { View, Text ,Modal} from 'react-native'
import React from 'react'

export default function BottomSheet(visible) {
  return (
    <Modal visible={visible}>
    <View style={{flex:1,backgroundColor:'red'}}>
      <Text>BottomSheet</Text>
    </View>
    </Modal>
  )
}
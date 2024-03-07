import { Button,View} from "react-native";
import React from 'react';


export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            onPress={() => navigation.navigate('Notification')}
            title="Go to notifications"
          />
        </View>
      );

}
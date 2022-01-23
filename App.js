import * as React from 'react';
import Homepage from "./pages/page1";
import Profile from "./pages/page3";
import Memo from "./pages/page2";
import {View,StyleSheet} from 'react-native';
import { BottomNavigation,Appbar, Text,DefaultTheme,FAB, Provider as PaperProvider} from 'react-native-paper';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#a60c0c',
    accent: '#141111',
  },
};

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [routes] = React.useState(
    [
     { key: 'Memo', title: 'Streams', icon: 'book-variant-multiple' },
     { key: 'home', title: 'Homepage', icon: 'home'},
     { key: 'Profile', title: 'My Account', icon: 'account-settings-outline'},
    
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home:Homepage,
    Profile:Profile,
    Memo: Memo,
  });

  return (
<PaperProvider theme={theme}>
            <Appbar.Header>
            <Appbar.Content title="Daily VLRNT Updates"/>
            </Appbar.Header>
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
     <FAB
    style={styles.fab}
    small
    icon="plus"
    onPress={() => console.log('Pressed')}
  />
    
</PaperProvider>
  );
};
const styles = StyleSheet.create({
  fab: {
    position:'absolute',
    margin:15,
    right:0,
    bottom:50,
  },
})

export default App;
/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from 'react-native-screens/native-stack';
import * as React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {Home} from '../screens/home/Home';
import {RootStackParamList} from './types';
import {AppView} from '@pengepantry/core/lib/components/layout/AppView';
import {AppText} from '@pengepantry/core/lib/components/app-text/AppText';
import {Icon} from '@pengepantry/core/lib/icons/Icon';
import NotFoundScreen from '../screens/NotFoundScreen';
import {fonts} from '@pengepantry/core/lib/theme/fonts';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

const options: NativeStackNavigationOptions = {
  headerCenter: () => (
    <AppView style={defaultHeaderBStyle}>
      <AppText style={defaultHeaderTitleStyle}>Home</AppText>
    </AppView>
  ),
};

export const defaultScreenOptions: (navigationOptionsContainer: {
  navigation: NativeStackNavigationProp<Record<string, never>>;
}) => NativeStackNavigationOptions = () => ({
  // ...defaultHeaderStatusBarHeight,
  headerTopInsetEnabled: false,
  headerHideShadow: true,
  headerLeft: () => <Icon name="burgerMenu" />,
  headerRight: () => <Icon name="burgerMenu" />,
  headerStyle: {
    backgroundColor: '#FAFAFA',
  },
});

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name="Home" component={Home} options={options} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{title: 'Oops!'}}
      />
    </Stack.Navigator>
  );
}

export const defaultHeaderTitleStyle = {
  flex: 0,
  alignSelf: 'flex-start',
  fontFamily: fonts.PRIMARY_MEDIUM,
  fontSize: 20,
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
} as StyleProp<TextStyle>;

export const headerStyle = () =>
  ({
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    // width: Dimensions.get('window').width - 60 * (rightIcons + 1) - 15,
    alignSelf: 'flex-start',
    // marginBottom: Platform.OS === 'android' ? 2 : -1,
    // left: Platform.OS === 'android' ? 5 : undefined,
  } as StyleProp<TextStyle>);
export const defaultHeaderBStyle = headerStyle();

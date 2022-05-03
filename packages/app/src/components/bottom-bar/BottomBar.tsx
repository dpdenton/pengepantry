import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {TouchableOpacity} from 'react-native';
import styled from '@emotion/native';
import {CenteredRow} from '@pengepantry/core/lib/components/layout/Row';
import {Icon} from '@pengepantry/core/lib/icons/Icon';
import {IconName} from '@pengepantry/core/lib/icons/Icon';
import {AppText} from '@pengepantry/core/lib/components/app-text/AppText';
import {CenteredColumn} from '@pengepantry/core/lib/components/layout/Column';
import {useRoute} from '@react-navigation/native';

const iconRouteMap: {[key: string]: IconName} = {
  Home: 'home',
  Menu: 'voucher',
  Profile: 'profile',
};

export const BottomBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return null;
  return (
    <BottomBarRow>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name, {merge: true});
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{flex: 1}}
          >
            <CenteredRow style={{justifyContent: 'center'}}>
              <CenteredColumn>
                <Icon name={iconRouteMap[route.name]} />
                <AppText>{label}</AppText>
              </CenteredColumn>
            </CenteredRow>
          </TouchableOpacity>
        );
      })}
    </BottomBarRow>
  );
};

const BottomBarRow = styled(CenteredRow)`
  background: white;
  height: 60px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.12;
  shadow-radius: 48px;
  margin-bottom: 16px;
  //box-shadow: 0px 2px 48px rgba(0, 0, 0, 0.12);
`;

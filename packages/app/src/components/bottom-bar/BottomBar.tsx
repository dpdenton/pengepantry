import React from 'react';
import {TouchableOpacity} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {CenteredRow, Row} from '@pengepantry/core/lib/components/layout/Row';
import {Icon, IconName} from '@pengepantry/core/lib/icons/Icon';
import {AppText} from '@pengepantry/core/lib/components/app-text/AppText';

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
  return (
    <Row>
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
            <CenteredRow>
              <Icon name={iconRouteMap[route.name]} />
              <AppText>{String(label)}</AppText>
            </CenteredRow>
          </TouchableOpacity>
        );
      })}
    </Row>
  );
};

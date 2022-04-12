import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {ListItem} from '@pengepantry/core/lib/components/list-item/ListItem';
import {Icon} from '@pengepantry/core/lib/icons/Icon';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <Icon name="burgerMenu" />
          <ListItem
            item={{
              url: 'https://eadn-wc02-3894996.nxedge.io/wp-content/uploads/2018/01/pistachio-turmeric-rice-bowl6-1024x683.jpg',
            }}
            onPress={() => {}}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {},
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
export default App;

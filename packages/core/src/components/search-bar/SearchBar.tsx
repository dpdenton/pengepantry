import React from 'react';
import {TextInput} from 'react-native';
import {AppView} from 'components/layout/AppView';

export const SearchBar = () => {
  return (
    <AppView>
      <TextInput
        placeholder="Search recipes..."
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'white',
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#eaebec',
          color: '#c5c5c5',
          letterSpacing: 1,
          padding: 14,
        }}
      />
    </AppView>
  );
};

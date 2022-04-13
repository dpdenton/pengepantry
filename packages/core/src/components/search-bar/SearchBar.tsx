import React from 'react';
import styled from '@emotion/native';
import {fonts} from 'theme/fonts';
import {AppView} from 'components/layout/AppView';

export const SearchBar = () => {
  return (
    <AppView>
      <SearchBarView placeholder="Search recipes..." />
    </AppView>
  );
};

const SearchBarView = styled.TextInput`
  display: flex;
  flex-direction: row;
  background: #ffffff;
  border: 1px solid #eaebec;
  border-radius: 10px;
  font-family: ${fonts.PRIMARY_MEDIUM};
  font-size: 14px;
  color: #c5c5c5;
  letter-spacing: 1px;
  padding: 14px 12px 14px 40px;
`;

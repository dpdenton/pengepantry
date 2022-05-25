import {AppView} from 'components/layout/AppView';
import styled from '@emotion/native';

export const Divider = styled(AppView)`
  flex-grow: 0;
  height: 1px;
  background-color: ${({theme}) => theme.colors.neutral.light};
`;

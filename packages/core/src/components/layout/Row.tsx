import styled from '@emotion/native';
import {AppView} from 'components/layout/AppView';

export const Row = styled(AppView)`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const CenteredRow = styled(Row)`
  align-items: center;
`;

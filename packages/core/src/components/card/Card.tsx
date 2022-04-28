import styled from '@emotion/native';
import {AppView} from 'components/layout/AppView';

interface Props {
  padding?: number;
}

export const Card = styled(AppView)<Props>`
  background: white;
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.06;
  shadow-radius: 48px;
  padding: ${({padding = 0}) => padding}px;
`;

import styled from '@emotion/native';
import {AppView} from 'components/layout/AppView';

interface Props {
  size: number;
  color: string;
}

export const Dot = styled(AppView)<Props>`
  height: ${props => props.size.toString()}px;
  width: ${props => props.size.toString()}px;
  border-radius: ${props => (props.size / 2).toString()}px;
  background-color: ${props => props.color};
`;

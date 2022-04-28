import {AppView} from 'components/layout/AppView';
import styled from '@emotion/native';

interface Props {
  size: number;
}

export const Spacer = styled(AppView)<Props>`
  height: ${props => `${props.size}px`};
`;

export const ColMedium = styled(AppView)`
  height: ${props => props.theme.spacing.m.toString()}px;
`;

export const RowSmall = styled(AppView)`
  width: ${props => props.theme.spacing.s.toString()}px;
`;

export const RowMedium = styled(AppView)`
  width: ${props => props.theme.spacing.m.toString()}px;
`;

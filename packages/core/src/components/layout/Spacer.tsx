import {AppView} from 'components/layout/AppView';
import styled from '@emotion/native';

export const ColXSmall = styled(AppView)`
  height: ${props => props.theme.spacing.xs.toString()}px;
`;
export const ColSmall = styled(AppView)`
  height: ${props => props.theme.spacing.s.toString()}px;
`;

export const ColMedium = styled(AppView)`
  height: ${props => props.theme.spacing.m.toString()}px;
`;

export const ColLarge = styled(AppView)`
  height: ${props => props.theme.spacing.l.toString()}px;
`;

export const RowSmall = styled(AppView)`
  width: ${props => props.theme.spacing.s.toString()}px;
`;

export const RowMedium = styled(AppView)`
  width: ${props => props.theme.spacing.m.toString()}px;
`;

export const RowLarge = styled(AppView)`
  width: ${props => props.theme.spacing.l.toString()}px;
`;

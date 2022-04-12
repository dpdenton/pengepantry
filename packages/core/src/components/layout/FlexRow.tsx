import styled from '@emotion/native'
import { AppView } from 'components/layout/AppView'

export const FlexRow = styled(AppView)`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const CenteredFlexRow = styled(FlexRow)`
  align-items: center;
`

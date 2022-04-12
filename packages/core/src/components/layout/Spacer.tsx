import { AppView } from 'components/layout/AppView'
import styled from '@emotion/native'

interface Props {
  size: number
}

export const Spacer = styled(AppView)<Props>`
  height: ${(props) => `${props.size}px`};
`

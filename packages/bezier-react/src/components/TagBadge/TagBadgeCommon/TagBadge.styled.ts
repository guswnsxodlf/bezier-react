/* Internal dependencies */
import { styled } from 'Foundation'
import type { InjectedInterpolation, InterpolationProps, FoundationProps } from 'Types/Foundation'
import type { ColorProps, AdditionalColorProps } from 'Types/ComponentProps'
import { TAGBADGE_VERTICAL_PADDING } from './constants/TagBadgeStyle'

interface CommonTagBadgeStyleProps extends
  InterpolationProps,
  ColorProps,
  Required<AdditionalColorProps<'bg'>> {
  rounding: InjectedInterpolation
  horizontalPadding: number
}

const Wrapper = styled.div.attrs(({
  foundation,
  bgColor,
  color = 'txt-black-darkest',
  horizontalPadding,
}: CommonTagBadgeStyleProps & FoundationProps) => ({
  style: {
    padding: `${TAGBADGE_VERTICAL_PADDING}px ${horizontalPadding}px`,
    color: foundation?.theme?.[color],
    backgroundColor: foundation?.theme?.[bgColor],
  },
}))<CommonTagBadgeStyleProps>`
  display: flex;
  align-items: center;

  ${({ rounding }) => rounding};

  ${({ interpolation }) => interpolation};
`

export default {
  Wrapper,
}

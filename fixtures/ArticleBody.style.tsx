import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { border, color, size, space, typography } from '@paper/ui-tokens';
import { mediaQuery } from '../../styles';
import { telekomDotLargeStyle } from '../../core/TelekomDot';

export const ELEMENT_IMAGE_MAX_WIDTH = 633;
export const ELEMENT_IMAGE_MAX_HEIGHT = 351;
// 📌 Info:
// 12px == some more space between sticky header and content
export const SCROLL_MARGIN_TOP_MOBILE = parseInt(size.pageStickyHeaderMobileHeight, 10) + parseInt(space.small, 10);
// 📌 Info:
// 24px == some more space between sticky header and content. This is also the
// same space as the companion item padding top.
// TODO: introduce a named variable for the companion item padding stuff
export const SCROLL_MARGIN_TOP_DESKTOP = parseInt(size.pageStickyHeaderDesktopHeight, 10) + parseInt(space.large, 10);

export const articleBodyStyle = css`
  color: ${color.trout};
  line-height: ${typography.lineHeight.xxlarge};
`;

export const bodySubStyle = css`
  color: ${color.salemsfur};
  scroll-margin-top: ${SCROLL_MARGIN_TOP_MOBILE}px;

  ${mediaQuery.desktop} {
    font-size: ${typography.fontSize.medium};
    scroll-margin-top: ${SCROLL_MARGIN_TOP_DESKTOP}px;
  }
`;

const textStyles = css`
  font-size: ${typography.fontSize.regular};
  line-height: ${typography.lineHeight.xxlarge};
`;

export const bodySummaryStyle = css`
  font-weight: bold;
`;

const commercialBaseStyle = css`
  border-top: ${border.width.small} solid ${color.whitelilac};
  border-bottom: ${border.width.small} solid ${color.whitelilac};
  background-color: ${color.alpine};
`;

export const commercialMobileStyle = css`
  ${commercialBaseStyle};
  padding-top: ${space.medium};
  padding-bottom: ${space.medium};
`;

export const commercialDesktopNativendoStyle = css`
  ${commercialBaseStyle};
  padding: ${space.large} ${space.xxxlarge};
`;

export const commercialRectangleStyle = css`
  padding-right: ${space.xxxlarge};
  float: right;
`;

export const commercialDesktopStyle = css`
  padding-bottom: ${space.large};
  background-color: ${color.alpine};

  ${mediaQuery.desktop} {
    border-top: ${border.width.small} solid ${color.whitelilac};
    border-bottom: ${border.width.small} solid ${color.whitelilac};
  }
`;

// [1] All values needed for the correct UI/UX alignment. Is there a way to calc this value?
// [2] margin bottom for vertical-alignment adjustment
export const Ul = styled.ul`
  ${textStyles};
  display: grid;
  grid-gap: ${space.medium};
  grid-template-columns: 0.5vw 1fr;

  > li {
    grid-column: 2;

    &::before {
      content: '';
      ${telekomDotLargeStyle};
      margin: 0 12px 2px -20px; /* [1][2] */
    }
  }
`;

export const Li = styled.li();

// [1] All values needed for the correct UI/UX alignment. Is there a way to calc this value?
// [2] The right margin differs here to the `<ul/>` impl. to align the text correctly.
export const Ol = styled.ol`
  ${textStyles};
  display: grid;
  grid-gap: ${space.medium};
  grid-template-columns: 0.5vw 1fr;
  counter-reset: article-body-order-list-counter;

  > li {
    grid-column: 2;
    counter-increment: article-body-order-list-counter;

    &::before {
      content: counter(article-body-order-list-counter);
      margin: 0 10px 0 -20px; /* [1][2] */
      color: ${color.magenta};
      font-size: ${typography.fontSize.regular};
      font-weight: ${typography.fontWeight.bold};
      line-height: ${typography.lineHeight.small};
      font-variant-numeric: tabular-nums;
    }
  }
`;

export const P = styled.p`
  ${textStyles};
`;

export const Table = styled.table`
  width: 100%;
  overflow: hidden;
  border-collapse: collapse;
  border-radius: ${border.radii.large};
  font-size: ${typography.fontSize.xsmall};
`;

export const Th = styled.th`
  padding: ${space.xsmall};
  border: 1px solid ${color.snow};
  background-color: ${color.whitelilac};
  font-weight: bold;
  text-align: left;
`;

export const Td = styled.td`
  padding: ${space.xsmall};
  border: 1px solid ${color.snow};
  background-color: ${color.alpine};
`;

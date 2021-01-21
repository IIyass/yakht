import { css } from 'styled-components';

const sizes = {

  tablet: '980',
  mobile: '360',
  mobileX: '250',
  mobileY: '450'

};
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
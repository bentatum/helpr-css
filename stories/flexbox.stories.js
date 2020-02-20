import { withKnobs, select } from "@storybook/addon-knobs";

export default {
  title: 'Flexbox',
  decorators: [withKnobs]
};

export const Demo = () => `
  <div class="
    h1
    vh100
    ${select('.row|.column', ['row', 'column'], 'column')}
    align-items--${select('.align-items--{n}', ['start', 'center', 'end'], 'center')}
    justify-content--${select('.justify-content--{n}', ['start', 'center', 'end'], 'center')}
  ">
    <div>💪</div>
    <div>📦</div>
  </div>
`

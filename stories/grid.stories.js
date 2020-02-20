import { withKnobs, number } from "@storybook/addon-knobs";

export default {
  title: 'Grid',
  decorators: [withKnobs]
};

const gridGapOpts = { max: 25, min: 0 }

export const Row = () => `
  <div class="vh100 align-center justify-center">
    <div
      style="height:300px; width:300px;"
      class="
        grid row max-height-100 max-width-100
        grid-gap-${number('.grid-gap-{n}', 1, gridGapOpts)}
      "
    >
      <div class="border bg--grey--lighten-4"></div>
      <div class="border bg--grey--lighten-4"></div>
      <div class="border bg--grey--lighten-4"></div>
    </div>
  </div>
`

export const Column = () => `
  <div class="vh100 align-center justify-center">
    <div
      style="height:300px; width:300px;"
      class="
        grid column max-height-100 max-width-100
        grid-gap-${number('.grid-gap-{n}', 1, gridGapOpts)}
      "
    >
      <div class="border bg--grey--lighten-4"></div>
      <div class="border bg--grey--lighten-4"></div>
      <div class="border bg--grey--lighten-4"></div>
    </div>
  </div>
`

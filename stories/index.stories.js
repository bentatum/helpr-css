import '../uncompressed/kitchen-sink.css'
import { withKnobs, select, boolean, number } from "@storybook/addon-knobs";

export default {
  title: 'Examples',
  decorators: [withKnobs]
};

const numOpts = { max: 25, min: 0 }
const bgOpts = ['body', 'alternate', 'primary', 'secondary', 'success', 'error', 'warning']

export const Layout = () => `
  <style>
    .nav-item-skeleton {
      height: 30px;
      width: 30px;
    }
  </style>

  <div class="vh100">
    <div class="p2 flex row align-center">
      <h1 class="bg--primary--lighten-4" style="width:150px;">&nbsp;</h1>
      <div style="flex:1;"></div>
      <nav class="ml1 grid row grid-gap-1">
        <div class="round bg--primary--lighten-4 nav-item-skeleton"></div>
        <div class="round bg--secondary--lighten-4 nav-item-skeleton"></div>
        <div class="round bg--grey--lighten-4 nav-item-skeleton"></div>
      </nav>
    </div>
    <div class="bg--grey--lighten-4 color--grey--darken-3 align-items--center justify-content--center py10">
      <h2>Video</h2>
    </div>
    <div class="px2">
      <h2>Jon North - Vlog #66 - Ian USA Wilson</h2>
    </div>
    <div class="px2 grid row">
      <div>
        50k views
      </div>
      <div class="flex row justify-content--space-between">
        <div>+ 290</div>
        <div>- 4</div>
      </div>
      <div>
        Share
      </div>
      <div>
        Save
      </div>
      <div class="justify-self--end">
        ...
      </div>
    </div>
    <div class="p2">
      <p>Tempor minim quis aute aliqua anim amet sint ullamco tempor. Quis ullamco amet adipisicing in. Proident minim reprehenderit eiusmod anim do tempor nulla dolore eu laboris veniam. Aliquip ullamco proident voluptate proident laboris officia consequat deserunt tempor elit officia occaecat eu adipisicing. Incididunt veniam id Lorem excepteur ullamco anim deserunt quis ullamco eu laborum excepteur officia Lorem. Aliquip pariatur irure exercitation ad eiusmod velit magna ad minim id labore proident. Sit voluptate cillum commodo incididunt deserunt ullamco minim qui enim aliquip veniam.</p>
    </div>
  </div>
`

export const Paper = () => `
  <div class="vh100 align-center justify-center">
    <div
      style="max-width:500px;"
      class="
        m${number('.m{n}', 2, numOpts)}
        p${number('.p{n}', 2, numOpts)}
        ${boolean('.rounded', true) ? 'rounded' : ''}
        ${boolean('.border', false) ? 'border' : ''}
        shadow--${number('.shadow--{n}', 10, numOpts)}
        bg--${select('.bg--{color}', bgOpts, 'alternate')}
      "
    >
      <h1 class="gutter-bottom">Lorem Ipsum</h1>
      <p>Tempor minim quis aute aliqua anim amet sint ullamco tempor. Quis ullamco amet adipisicing in. Proident minim reprehenderit eiusmod anim do tempor nulla dolore eu laboris veniam. Aliquip ullamco proident voluptate proident laboris officia consequat deserunt tempor elit officia occaecat eu adipisicing. Incididunt veniam id Lorem excepteur ullamco anim deserunt quis ullamco eu laborum excepteur officia Lorem. Aliquip pariatur irure exercitation ad eiusmod velit magna ad minim id labore proident. Sit voluptate cillum commodo incididunt deserunt ullamco minim qui enim aliquip veniam.</p>
    </div>
  </div>
`;

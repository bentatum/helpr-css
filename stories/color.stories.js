import { withKnobs, select, text } from "@storybook/addon-knobs";

export default {
    title: 'Color',
    decorators: [withKnobs]
};

const COLORS = ['primary', 'secondary', 'grey', 'success', 'error', 'warning']
const MODIFIERS = ['', '--lighten-5', '--lighten-4', '--lighten-3', '--lighten-2', '--lighten-1',  '--darken-1', '--darken-2', '--darken-3', '--darken-4', '--darken-5', '--a1', '--a2', '--a3', '--a4', '--a5', '--contrast']

export const Demo = () => `
    <div class="
        vh100
        flex
        align-items--center
        justify-content--center
        bg--${select('.bg--', [...COLORS], 'grey')}${select('--{bg modifier}', MODIFIERS, '')}
        color--${select('.color--', COLORS, 'primary')}${select('--{color modifier}', MODIFIERS, '')}
    ">
        <h1>${text("Text", "Use knobs panel to change colors")}</h1>
    </div>
`
import React from 'react'
import { configure, setAddon, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { withKnobs } from '@storybook/addon-knobs'
import { checkA11y } from '@storybook/addon-a11y'
import jsxAddon from 'storybook-addon-jsx'

setOptions({
  name: 'LOS newsfeed',
  url: 'https://github.com/haakenlid/newsfeed',
  showStoriesPanel: true,
  showAddonPanel: true,
  addonPanelInRight: true,
})

addDecorator(withKnobs) // knobs!
addDecorator(checkA11y) // accessability checker
setAddon(jsxAddon) // show jsx

const loadStories = () => {
  require('../src/stories/index.js')
}

configure(loadStories, module)
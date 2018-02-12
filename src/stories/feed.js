import React from 'react'
import { boolean, text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { Feed } from 'components/Feed'
import { FeedStory } from 'components/FeedStory'
import LoadingIndicator from 'components/LoadingIndicator'
import { baseProps, randomProps } from './utils'

storiesOf('Feed', module)
  .addWithJSX('FeedStory', () => {
    const props = {
      host: text('host', baseProps.host),
      title: text('title', baseProps.title),
      image: text('image', baseProps.image),
    }
    return <FeedStory {...props} />
  })
  .addWithJSX('LoadingIndicator', () => (
    <LoadingIndicator
      isLoading={boolean('isLoading', false)}
      children={text('message', '') || null}
    />
  ))
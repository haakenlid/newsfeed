import React from 'react'
import Feed from 'components/Feed'
import Filters from 'components/Filters'
import Story from 'components/Story'
import GoToTop from 'components/GoToTop'
import { Logo, Icon } from 'logos'

const REPO = 'https://github.com/haakenlid/db-feed'
const SOL = 'https://sol.no'

export default () => (
  <div id="pageWrapper">
    <header className="pageHeader">
      <a href={SOL}>
        <Logo id="pageLogo" host="sol.no" />
      </a>
      <Filters />
      <a id="githubLink" href={REPO} title="source code">
        <Icon host="github" />
      </a>
    </header>
    <GoToTop />
    <main className="Page">
      <Story />
      <Feed />
    </main>
  </div>
)
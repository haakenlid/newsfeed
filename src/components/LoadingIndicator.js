import React from 'react'
import { connect } from 'react-redux'
import { selectFeed } from 'ducks/feed'
import './loader.css'

const Loader = () => (
  <div class="sk-cube-grid">
    <div class="sk-cube sk-cube1" />
    <div class="sk-cube sk-cube2" />
    <div class="sk-cube sk-cube3" />
    <div class="sk-cube sk-cube4" />
    <div class="sk-cube sk-cube5" />
    <div class="sk-cube sk-cube6" />
    <div class="sk-cube sk-cube7" />
    <div class="sk-cube sk-cube8" />
    <div class="sk-cube sk-cube9" />
  </div>
)

const LoadingIndicator = ({ fetching }) => (
  <div className="LoadingIndicator">{fetching && <Loader />}</div>
)
export default connect(selectFeed)(LoadingIndicator)
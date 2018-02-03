import React from 'react'
import { connect } from 'react-redux'
import { selectFeed } from 'ducks/feed'

const Loader = () => (
  <div className="sk-cube-grid">
    <div className="sk-cube sk-cube1" />
    <div className="sk-cube sk-cube2" />
    <div className="sk-cube sk-cube3" />
    <div className="sk-cube sk-cube4" />
    <div className="sk-cube sk-cube5" />
    <div className="sk-cube sk-cube6" />
    <div className="sk-cube sk-cube7" />
    <div className="sk-cube sk-cube8" />
    <div className="sk-cube sk-cube9" />
  </div>
)

const LoadingIndicator = ({ fetching }) => (
  <div className="LoadingIndicator">
    <Loader />
  </div>
)
export default connect(selectFeed)(LoadingIndicator)

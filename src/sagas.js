import { select, takeLatest, call, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import * as feed from 'ducks/feed'
import * as hosts from 'ducks/hosts'
import * as tags from 'ducks/tags'
import * as api from 'services/api'

export function* feedSaga() {
  yield takeLatest(feed.FEED_REQUESTED, fetchFeed)
  yield takeLatest([tags.TOGGLE_TAG, hosts.TOGGLE_HOST], filterListener)
  yield put(feed.feedRequested())
}

const selectFeedParameters = state => ({
  excludePaywall: true,
  limit: 10,
  offset: 0,
  includeHosts: hosts.selectActiveHosts(state),
  includeAnyTags: tags.selectActiveTags(state),
})

function* filterListener() {
  // refetch feed when filter inputs are changed
  const DEBOUNCE = 500
  yield call(delay, DEBOUNCE)
  yield put(feed.feedRequested())
}

function* fetchFeed() {
  const params = yield select(selectFeedParameters)
  const { response, error } = yield call(api.fetchFeed, params)
  if (response) {
    yield put(feed.feedReceived(response))
  } else {
    yield put(feed.feedRequestFailed(error))
  }
}
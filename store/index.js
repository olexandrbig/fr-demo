const PACKAGE_VERSION = require('../package.json').version

export const state = () => ({
  languages: [
    { title: 'English', code: 'en' }
  ],
  locale: 'en',
  appVersion: PACKAGE_VERSION
})

export const mutations = {
  SET_ERROR (state, { type, error }) {
    state['error' + (type.charAt(0).toUpperCase() + type.slice(1))] = error
  }
}

export const actions = {
}

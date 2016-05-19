import reducer, { initialState } from 'redux/modules/Overview'

describe('(Redux) Overview', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })
  })
})

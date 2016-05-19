import reducer, { initialState } from 'redux/modules/Snap'

describe('(Redux) Snap', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })
  })
})

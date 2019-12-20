import produce from 'immer';

export default function about(state = [], action) {
  switch (action.type) {
    case '@about/ACTION_ONE':
      return produce(state, draft => {
        draft.push(action.item);
      });
    default:
      return state;
  }
}

import { CHANGE_MAIN_TAG } from '../actions/mainTags';

const initialState = {
  chosenTag: [{ tagName: 'wszystko', tagColor: '#bdb5b5' }],
  availableTags: [
    { tagName: 'śniadania', tagColor: '#335C67' },
    { tagName: 'obiady', tagColor: '#E09F3E' },
    { tagName: 'kawa', tagColor: '#9E2A2B' },
    { tagName: 'desery', tagColor: '#540B0E' },
    { tagName: 'alkohole', tagColor: '#4CAF50' },
  ],
};

const order = ['wszystko', 'śniadania', 'obiady', 'kawa', 'desery', 'alkohole'];

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MAIN_TAG:
      const oldTag = state.chosenTag[0];
      const newTag = action.tag;
      const updatedTags = [
        ...state.availableTags,
        { tagName: oldTag.tagName, tagColor: oldTag.tagColor },
      ];
      const deleteTagIndex = updatedTags.indexOf(newTag);
      updatedTags.splice(deleteTagIndex, 1);
      return {
        ...state,
        chosenTag: [{ tagName: newTag.tagName, tagColor: newTag.tagColor }],
        availableTags: updatedTags.sort((a, b) => {
          return order.indexOf(a.tagName) - order.indexOf(b.tagName);
        }),
      };
  }
  return state;
};

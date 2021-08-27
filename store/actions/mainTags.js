export const CHANGE_MAIN_TAG = 'CHANGE_MAIN_TAG';

export const changeMainTag = tag => {
  return { type: CHANGE_MAIN_TAG, tag: tag };
};

import { ContentState, convertToRaw } from 'draft-js';

type Highlight = {
  start: number,
  end: number,
};

export const getPostText = (state: ContentState): string => {
  const highlights: Highlight[] = convertToRaw(state).blocks[0].inlineStyleRanges
    .map((range) => ({
      start: range.offset,
      end: range.offset + range.length,
    }));

  const text = highlights.reduce((acc, highlight, index) => (
    acc.slice(0, highlight.start + index*7)
    + '<b>' + acc.slice(highlight.start + index*7, highlight.end + index*7) + '</b>'
    + acc.slice(highlight.end + index*7)
  ), convertToRaw(state).blocks[0].text);


  return text;
};

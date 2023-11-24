import { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

import classes from './new-post.module.sass'

export const NewPost = (): JSX.Element => {
  const [ editorState, setEditorState ] = useState(() => EditorState.createEmpty());

  const handleBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  return (
    <div className={classes.container}>
      <div
        className={classes.inputTitle}
        contentEditable
      />

      <div className={classes.inputPost}>
        <Editor blockStyleFn={() => 'class'} editorState={editorState} onChange={setEditorState} />
      </div>

      <div className={classes.controls}>
        <button type='button' onClick={handleBoldClick}>Bold</button>

        <button type='button'>Add Post</button>
      </div>
    </div>
  );
}

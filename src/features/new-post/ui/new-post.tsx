import { ChangeEvent, useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

import { postPost } from '../../../entities/post';
import { useAppDispatch } from '../../../shared/lib/hooks/use-app-dispatch';

import classes from './new-post.module.sass'
import { getPostText } from '../lib/get-post-text';

export const NewPost = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [ title, setTitle ] = useState('');
  const [ editorState, setEditorState ] = useState(() => EditorState.createEmpty());

  const handleBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const handleAddClick = () => {
    dispatch(postPost({
      title,
      body: getPostText(editorState.getCurrentContent()),
    })).then(() => {
      setTitle('');
      setEditorState(() => EditorState.createEmpty());
    });
  };

  return (
    <div className={classes.container}>
      <input
        className={classes.inputTitle}
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        placeholder='Type here post Title'
      />

      <div className={classes.inputPost}>
        <Editor placeholder='Type here New Post' blockStyleFn={() => 'class'} editorState={editorState} onChange={setEditorState} />
      </div>

      <div className={classes.controls}>
        <button type='button' onClick={handleBoldClick}>Bold</button>

        <button type='button' onClick={handleAddClick}>Add Post</button>
      </div>
    </div>
  );
}

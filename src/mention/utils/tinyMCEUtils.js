export function getLastChar(editor) {
  const start = editor.selection.getRng(true).startOffset;
  const text = editor.selection.getRng(true).startContainer.data || '';
  const character = text.substr(start - 1, 1);
  return character;
}

export function getEditorContent(editor, format = 'text') {
  return editor.getContent({ format });
}

export function collectMentionIds(editor, mentionClassName) {
  const mentions = editor.dom
    .select(mentionClassName)
    .map(mentionNode => mentionNode.id);

  return mentions;
}

export function exitSelection(editor) {
  editor.selection.select(editor.getBody(), true);
  editor.selection.collapse(false);
}

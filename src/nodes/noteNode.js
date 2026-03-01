// nodes/noteNode.js
import BaseNode from "./baseNode";

export const NoteNode = ({ id }) => (
  <BaseNode id={id} label="Note" handles={[]}>
    <textarea placeholder="Write a note..." style={{ border: 'none', background: '#fff9c4', width: '100%', height: '100%', resize: 'none' }} />
  </BaseNode>
);
// nodes/noteNode.js
import BaseNode from "./baseNode";
import { useRef, useState } from "react";
import { useAutoResizeTextarea } from "../hooks/useAutoResizeTextarea";

export const NoteNode = ({ id }) => {
  const textAreaRef = useRef(null);
  const [currText, setCurrText] = useState('');
  useAutoResizeTextarea(textAreaRef, currText);

  return (
    <BaseNode id={id} nodeType='notes'>    
      <textarea
        name='noteNode'
        ref={textAreaRef}
        placeholder="Write a note..."
        style={{ border: 'none', background: '#fff9c4', width: '100%', minWidth: '300px', minHeight: '300px', resize: 'none', padding: '7px' }}
        onChange={(e) => setCurrText(e.target.value)}
      />
    </BaseNode>
  );
}
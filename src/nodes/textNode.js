// textNode.js

import { useEffect, useRef, useState } from 'react';
import { useUpdateNodeInternals } from 'reactflow';
import BaseNode from './baseNode';
import { useAutoResizeTextarea } from '../hooks/useAutoResizeTextarea';
import { useVariables } from '../hooks/useVariables';
import { NodeHeader } from "../components/nodeHeader";
import { NodeCounter } from "../components/nodeCounter";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textAreaRef = useRef(null);

  const variables = useVariables(currText);
  const updateNodeInternals = useUpdateNodeInternals();

  useAutoResizeTextarea(textAreaRef, currText);

  useEffect(() => {
    updateNodeInternals(id);
  }, [variables, id, updateNodeInternals]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode id={id} inputs={variables} outputs={['output']}>
      <>
        <NodeHeader label="Text" />
        <NodeCounter
          id={id}
          counterName={id}
         />
        <textarea
          name='textNode'
          ref={textAreaRef}
          value={currText} 
          onChange={handleTextChange}
            style={{
            width: '95%',
            marginTop: '5px',
            borderRadius: '4px',
            border: '1px solid #d1d5db',
            resize: 'none',
            overflow: 'hidden',
            padding: '4px'
          }}
        />
      </>
    </BaseNode>
  );
}

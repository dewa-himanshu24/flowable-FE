// textNode.js

import { useEffect, useRef, useState } from 'react';
import { useUpdateNodeInternals } from 'reactflow';
import BaseNode from './baseNode';
import { useAutoResizeTextarea } from '../hooks/useAutoResizeTextarea';
import { useVariables } from '../hooks/useVariables';

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
    <BaseNode id={id} label="Text" inputs={variables} outputs={['output']}>
      <>
        <span           
          style={{ 
            paddingBottom: '4px',
            fontSize: '12px',
            fontWeight: '500',
            color: '#4b5563'
          }}>Text:</span>
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

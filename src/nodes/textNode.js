// textNode.js

import { useEffect, useRef, useState } from 'react';
import { Position, useUpdateNodeInternals } from 'reactflow';
import BaseNode from './baseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);

  const textAreaRef = useRef(null);

  const updateNodeInternals = useUpdateNodeInternals();

  const extractVariables = (text) => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [...text.matchAll(regex)];
    const varNames = [...new Set(matches.map(m => m[1]))];
    return varNames;
  };

  useEffect(() => {
    const extractedVariables = extractVariables(currText);
    setVariables(extractedVariables);

    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }
 
  }, [currText]);

  useEffect(() => {
    updateNodeInternals(id);
  }, [variables, id, updateNodeInternals]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const handles = [
    {type: 'source', position: Position.Right, id: 'output'},
    ...variables?.map((item, idx) => {
    const top =
      ((idx + 1) * 100) / (variables.length + 1);
      
    return {
      type: 'target',
      position: Position.Left, 
      id: item,
      style: { top: `${top}%`}   
    }})
  ];

  return (
    <BaseNode id={id} label="Text" handles={handles}>
      <>
        <span           
          style={{ 
            paddingBottom: '4px',
            fontSize: '12px',
            fontWeight: '500',
            color: '#4b5563'
          }}>Text:</span>
        <textarea
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

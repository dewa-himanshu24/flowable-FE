// textNode.js

import { useEffect, useState } from 'react';
import { Position, useUpdateNodeInternals } from 'reactflow';
import BaseNode from './baseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);

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
      <label>
        Text:
        <textarea 
          value={currText} 
          onChange={handleTextChange}
            style={{
            marginTop: '5px',
            borderRadius: '4px',
            border: '1px solid #d1d5db',
            resize: 'none',
            overflow: 'hidden',
            padding: '4px'
          }}
        />
      </label>
    </BaseNode>
  );
}

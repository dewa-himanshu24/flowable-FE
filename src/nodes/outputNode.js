// // outputNode.js

import BaseNode from './baseNode';
import { NodeHeader } from "../components/nodeHeader";
import { NodeCounter } from "../components/nodeCounter";
import { NodeSubType } from "../components/nodeSubType";

export const OutputNode = ({ id, data }) => {
  const variables = [`${id}-value`];

  return (
    <BaseNode id={id} label="Output" inputs={variables}>
      <NodeHeader label="Output" />
      <NodeCounter 
        id={id} 
        counterName={id}
        field='outputName'
      />
      <NodeSubType
        label='Output Type'
        id={id}
        value={data?.outputType || 'text'}
        field='outputType'
      />
    </BaseNode>
  )
}


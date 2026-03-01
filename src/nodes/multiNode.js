// // outputNode.js

import BaseNode from './baseNode';
import { NodeHeader } from "../components/nodeHeader";
import { NodeCounter } from "../components/nodeCounter";
import { NodeSubType } from "../components/nodeSubType";

export const MultiNode = ({ id, data }) => {
  const variables = [`${id}-value`];

  return (
    <BaseNode id={id} inputs={variables} outputs={['a', 'ab']}>
      <NodeHeader label="Multi" />
      <NodeCounter 
        id={id} 
        counterName={id}
        field='multi1'
      />
      <NodeSubType
        label='Multi Attach'
        id={id}
        value={data?.multiText || 'text'}
        field='multiText'
        type='text'
      />
      <NodeSubType
        label='Multi Int'
        id={id}
        value={data?.multiInt || 'text'}
        field='multiInt'
        type='integer'
      />
      <NodeSubType
        label='Multi File'
        id={id}
        value={data?.multiType || 'text'}
        field='multiType'
        type='file'
      />
    </BaseNode>
  )
}


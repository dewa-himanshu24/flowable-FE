// // outputNode.js

import BaseNode from './baseNode';
import { NodeHeader } from "../components/nodeHeader";
import { NodeCounter } from "../components/nodeCounter";
import { NodeSubType } from "../components/nodeSubType";

export const AttachmentNode = ({ id, data }) => {
  const variables = [`${id}-value`];

  return (
    <BaseNode id={id} inputs={variables} outputs={['a', 'ab']}>
      <NodeHeader label="Attachment" />
      <NodeCounter 
        id={id} 
        counterName={id}
        field='attachment1'
      />
      <NodeSubType
        label='Attachment Type'
        id={id}
        value={data?.attachmentType || 'text'}
        field='attachmentType'
        type='file'
      />
    </BaseNode>
  )
}


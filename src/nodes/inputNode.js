// inputNode.js

import BaseNode from './baseNode';
import { NodeHeader } from "../components/nodeHeader";
import { NodeCounter } from "../components/nodeCounter";
import { NodeSubType } from "../components/nodeSubType";

export const InputNode = ({ id, data }) => {

  const options = [
    {id: 1 ,label: 'Text', value: 'text'},
    {id: 2 ,label: 'Dropdown', value: 'dropdown'},
    {id: 3 ,label: 'File', value: 'file'},
  ]

  return (
    <BaseNode id={id} label="Input" outputs={['output']}>
      <NodeHeader label="Input" />
      <NodeCounter 
        id={id} 
        counterName={id}
        field='inputName'
      />
      <NodeSubType
        label='Input Type'
        id={id}
        value={data?.inputType || 'text'}
        field='inputType'
        type='dropdown'
        options={options}
      />
    </BaseNode>
  )
}

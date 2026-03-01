// inputNode.js

import BaseNode from './baseNode';
import { NodeHeader } from "../components/nodeHeader";
import { NodeCounter } from "../components/nodeCounter";
import { NodeSubType } from "../components/nodeSubType";

export const InputNode = ({ id, data }) => {

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
      />
    </BaseNode>
  )

  // return (
  //   <div style={{width: 200, height: 80, border: '1px solid black'}}>
  //     <div>
  //       <span>Input</span>
  //     </div>
  //     <div>
  //       <label>
  //         Name:
  //         <input 
  //           type="text" 
  //           value={currName} 
  //           onChange={handleNameChange} 
  //         />
  //       </label>
  //       <label>
  //         Type:
  //         <select value={inputType} onChange={handleTypeChange}>
  //           <option value="Text">Text</option>
  //           <option value="File">File</option>
  //         </select>
  //       </label>
  //     </div>
  //     <Handle
  //       type="source"
  //       position={Position.Right}
  //       id={`${id}-value`}
  //     />
  //   </div>
  // );
}

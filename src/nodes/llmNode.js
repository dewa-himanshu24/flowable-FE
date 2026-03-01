// llmNode.js

import { Handle, Position } from 'reactflow';
import BaseNode from './baseNode';
import { NodeHeader } from "../components/nodeHeader";
import { NodeCounter } from "../components/nodeCounter";
import { NodeSubType } from "../components/nodeSubType";

export const LLMNode = ({ id, data }) => {

  return (
    <BaseNode id={id} label="LLM" inputs={['system', 'prompt']} outputs={['response']}>
      <NodeHeader label="LLM" />
      <NodeCounter 
        id={id} 
        counterName={id}
        field='llmName'
        disabled
      />
    </BaseNode>
  )

  // return (
  //   <div style={{width: 200, height: 80, border: '1px solid black'}}>
  //     <Handle
  //       type="target"
  //       position={Position.Left}
  //       id={`${id}-system`}
  //       style={{top: `${100/3}%`}}
  //     />
  //     <Handle
  //       type="target"
  //       position={Position.Left}
  //       id={`${id}-prompt`}
  //       style={{top: `${200/3}%`}}
  //     />
  //     <div>
  //       <span>LLM</span>
  //     </div>
  //     <div>
  //       <span>This is a LLM.</span>
  //     </div>
  //     <Handle
  //       type="source"
  //       position={Position.Right}
  //       id={`${id}-response`}
  //     />
  //   </div>
  // );
}

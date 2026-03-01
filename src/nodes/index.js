// nodes/index.js

import { InputNode } from './inputNode';
import { LLMNode } from './llmNode';
import { OutputNode } from './outputNode';
import { TextNode } from './textNode';
import { NoteNode } from './noteNode';
import { StartNode, EndNode } from './edgeNode';
import { AttachmentNode } from './attachment';
import { MultiNode } from './multiNode';

export {
  InputNode,
  LLMNode,
  OutputNode,
  TextNode,
  NoteNode,
  StartNode,
  EndNode,
  AttachmentNode,
  MultiNode,
};

export const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  note: NoteNode,
  start: StartNode,
  end: EndNode,
  attach: AttachmentNode,
  multi: MultiNode
};
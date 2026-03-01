// nodes/index.js

import { InputNode } from './inputNode';
import { LLMNode } from './llmNode';
import { OutputNode } from './outputNode';
import { TextNode } from './textNode';
import { NoteNode } from './noteNode';
import { StartNode, EndNode } from './edgeNode';

export {
  InputNode,
  LLMNode,
  OutputNode,
  TextNode,
  NoteNode,
  StartNode,
  EndNode,
};

export const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  note: NoteNode,
  start: StartNode,
  end: EndNode,
};
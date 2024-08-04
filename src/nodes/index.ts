import type { NodeTypes } from "@xyflow/react";

import { PositionLoggerNode } from "./PositionLoggerNode";
import { AppNode } from "./types";

export const initialNodes: AppNode[] = [
  {
    id: "a",
    type: "input",
    position: { x: 0, y: 0 },
    data: { label: "PrettyGood AaaP" },
  },
  {
    id: "b",
    type: "output",
    position: { x: -100, y: 100 },
    data: { label: "core elements" },
  },
  {
    id: "c",
    position: { x: 100, y: 100 },
    data: { label: "PrettyGood Media Planner UI" },
  },
  {
    id: "d",
    type: "output",
    position: { x: 0, y: 200 },
    data: { label: "Features" },
  },
];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;

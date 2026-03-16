export type VisualizationAlgorithmId = "bubble-sort" | "quick-sort";

export type FigureType =
  | "heap-tree"
  | "stack-queue"
  | "bst"
  | "red-black-tree"
  | "dp-grid"
  | "greedy-interval"
  | "disjoint-set"
  | "graph-traversal"
  | "mst"
  | "shortest-path"
  | "max-flow"
  | "btree"
  | "string-match";

export interface ClrsPart {
  id: string;
  title: string;
  chapters: string[];
}

export interface ComplexityInfo {
  best: string;
  avg: string;
  worst: string;
  space: string;
}

export interface AlgorithmFrame {
  array: number[];
  activeIndices: number[];
  swappedIndices: number[];
  sortedIndices: number[];
  pivotIndex: number | null;
  line: number;
  note: string;
}

export interface VisualizationDefinition {
  id: VisualizationAlgorithmId;
  name: string;
  pseudocode: string[];
  generateFrames: (input: number[]) => AlgorithmFrame[];
}

export interface IndustryHighlight {
  domain: string;
  detail: string;
  tone: "sun" | "sea" | "berry" | "ink";
}

export interface ChapterTopic {
  id: string;
  partId: string;
  chapterLabel: string;
  title: string;
  summary: string;
  keyIdeas: string[];
  applications: string[];
  explanation: string;
  conceptNarrative: string[];
  industryHighlights: IndustryHighlight[];
  complexity?: ComplexityInfo;
  visualizationId?: VisualizationAlgorithmId;
  figureType?: FigureType;
  pseudocode?: string[];
  sourceNotes?: string[];
}

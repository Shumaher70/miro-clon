export type Color = {
  r: number;
  g: number;
  b: number;
};

export type Camera = {
  x: number;
  y: number;
};

export enum LayerType {
  Path,
  Text,
  Note,
  Ellipse,
  Rectangle,
}

export type RectangleLayer = {
  x: number;
  y: number;
  fill: Color;
  width: number;
  value?: string;
  height: number;
  type: LayerType.Rectangle;
};

export type EllipseLayer = {
  x: number;
  y: number;
  fill: Color;
  width: number;
  value?: string;
  height: number;
  type: LayerType.Ellipse;
};

export type PathLayer = {
  x: number;
  y: number;
  fill: Color;
  width: number;
  value?: string;
  height: number;
  points: number[][];
  type: LayerType.Path;
};

export type TextLayer = {
  x: number;
  y: number;
  fill: Color;
  width: number;
  value?: string;
  height: number;
  type: LayerType.Text;
};

export type NoteLayer = {
  x: number;
  y: number;
  fill: Color;
  width: number;
  value?: string;
  height: number;
  type: LayerType.Note;
};

export type Point = {
  x: number;
  y: number;
};

export type XYWH = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type CanvasState =
  | { mode: CanvasMode.None }
  | { mode: CanvasMode.Pencil }
  | { mode: CanvasMode.Pressing; origin: Point }
  | { mode: CanvasMode.Translating; current: Point }
  | { mode: CanvasMode.Resizing; initialBounds: XYWH; corner: Side }
  | { mode: CanvasMode.SelectionNet; origin: Point; current?: Point }
  | {
      mode: CanvasMode.Inserting;
      layerType:
        | LayerType.Ellipse
        | LayerType.Rectangle
        | LayerType.Text
        | LayerType.Note;
    };

export enum CanvasMode {
  None,
  Pencil,
  Pressing,
  Resizing,
  Inserting,
  Translating,
  SelectionNet,
}

export enum Side {
  Top = 1,
  Left = 4,
  Right = 8,
  Bottom = 2,
}

export type Layer =
  | RectangleLayer
  | EllipseLayer
  | PathLayer
  | TextLayer
  | NoteLayer;

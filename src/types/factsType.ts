export type TFacts = {
  total: number;
  items: Array<TFact>;
};

export type TFact = {
  text: string;
  type: string;
  spoiler: boolean;
};

interface DataSet<I,O> {
  input: I;
  output: O;
}

export type DataSets<I,O> = DataSet<I, O>[];

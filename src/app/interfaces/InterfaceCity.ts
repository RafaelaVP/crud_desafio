export interface Icities {
  docs: [
    {
      city: string;
      state: string;
    }
  ];

  limit: number;
  offset: number;
  total: number;
}

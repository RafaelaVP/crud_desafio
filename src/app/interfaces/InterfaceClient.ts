export interface Iclients {
  docs: [
    {
      name: string;
      gender: string;
      birthdate: Date;
      city_home: {
        id: string;
        city: string;
        state: string;
      };
      age: number;
    }
  ];

  limit: number;
  offset: number;
  total: number;
}

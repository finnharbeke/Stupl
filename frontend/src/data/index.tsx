export type SubjectData = {
  name: string;
  ects: number;
  grade: number;
  semester: number;
  planned: boolean;
  id: number;
};

export type SubjectGroup = {
  name: string;
  data: SubjectData[];
  information: string;
};

export const SubjectData: SubjectData[] = [
  {
    name: "Diskrete Mathematik",
    ects: 7,
    grade: 5.5,
    semester: 1,
    planned: true,
    id: 1,
  },
  {
    name: "Algorithmen und Datenstrukturen",
    ects: 7,
    grade: 5.25,
    semester: 2,
    planned: true,
    id: 1,
  },
  {
    name: "Algorithmen und Datenstrukturen",
    ects: 7,
    grade: 5.25,
    semester: 3,
    planned: true,
    id: 1,
  },
  {
    name: "Algorithmen und Datenstrukturen",
    ects: 7,
    grade: 5.25,
    semester: 1,
    planned: true,
    id: 1,
  },
];

export const subjectGroups: SubjectGroup[] = [
  {
    name: "Basisjahr",
    data: SubjectData,
    information: "Kacke",
  },
  {
    name: "Grundlagenfächer",
    data: SubjectData,
    information: "noch mehr kacke",
  },
];

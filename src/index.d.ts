interface IPerson {
    name: string;
    age: number;
    gender: 'male' | 'female';
}

interface IEmployee {
    name: string;
    age: number;
    gender: 'male' | 'female';
    company: string;
}

export declare function getPersons(): IPerson[];

export declare function personToString(person: IPerson): string;
export declare function personToString(person: IEmployee): string;

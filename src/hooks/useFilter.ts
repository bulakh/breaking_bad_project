import { ICharacter } from "../types/types";


export const findCharacter = <T extends ICharacter>(find: string, persons:T[]):T[] => {
    const regex = new RegExp(find, 'gi')
    const filteredPersons = persons.filter(person => (person.name.match(regex) || person.nickname.match(regex)));
    return filteredPersons;
};

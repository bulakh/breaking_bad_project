import { ICharacter } from "../types/types";


export  const findCharacter = (find: string, persons: Array<ICharacter>):Array<ICharacter> => {
    const regex = new RegExp(find, 'gi')
    const filteredPersons = persons.filter(person => person.name.match(regex));
    return filteredPersons;
};
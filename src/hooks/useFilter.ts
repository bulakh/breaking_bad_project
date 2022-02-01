interface Filterwise {
    name: string,
}

export const findCharacter = <T extends Filterwise>(find: string, persons:T[]):T[] => {
    const regex = new RegExp(find, 'gi')
    const filteredPersons = persons.filter(person => person.name.match(regex));
    return filteredPersons;
};
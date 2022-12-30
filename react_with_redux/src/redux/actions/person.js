import {ADD_PERSON} from "../constant";

// add person action
export function addPerson(person){

    return {type:ADD_PERSON, data:person}
}
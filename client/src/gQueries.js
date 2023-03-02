import { gql } from "@apollo/client"


export const GET_PEOPLE = gql`
{
    persons {
        id
        firstName
        lastName
    }
}`
export const GET_CARS=gql`{
    cars {
      id
      year
      make
      model
      price
      personId
    }
  }`

  export const ADD_PERSON = gql`
  
  mutation AddPersonMutation($id: String!, $firstName: String!, $lastName: String!) {
    addPerson(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }`

  export const REMOVE_PERSON = gql`
mutation RemovePersonMutation($id: String!) {
  removePerson(id: $id) {
    id
    firstName
    lastName
  }
}
`
;
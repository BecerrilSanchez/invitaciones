/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      IDnovios
      nombreInvitado1
      nombreInvitado2
      nombreInvitado3
      nombreInvitado4
      nombreInvitado5
      nombreInvitado6
      nombreInvitado7
      nombreInvitado8
      nombreInvitado9
      nombreInvitado10
      nombreInvitado11
      nombreInvitado12
      ofertaDeInvitaciones
      nInvitacionesAceptadas
      invitacionFamiliar
      apellidosFamilia
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        IDnovios
        nombreInvitado1
        nombreInvitado2
        nombreInvitado3
        nombreInvitado4
        nombreInvitado5
        nombreInvitado6
        nombreInvitado7
        nombreInvitado8
        nombreInvitado9
        nombreInvitado10
        nombreInvitado11
        nombreInvitado12
        ofertaDeInvitaciones
        nInvitacionesAceptadas
        invitacionFamiliar
        apellidosFamilia
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

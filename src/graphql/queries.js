/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      nombreUsuario
      gmailUsuario
      movilUsuario
      formatoInvitacion
      notaEnvio
      fechaEnvio
      horaEnvio
      invitaciones {
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        nombreUsuario
        gmailUsuario
        movilUsuario
        formatoInvitacion
        notaEnvio
        fechaEnvio
        horaEnvio
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInvitaciones = /* GraphQL */ `
  query GetInvitaciones($id: ID!) {
    getInvitaciones(id: $id) {
      numInvitacionesOfrecidas
      numInvitacionesConfirmadas
      invitacionFamiliar
      grupo {
        nombreFamilia
        id
        createdAt
        updatedAt
        __typename
      }
      evento {
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      userInvitacionesId
      invitacionesGrupoId
      __typename
    }
  }
`;
export const listInvitaciones = /* GraphQL */ `
  query ListInvitaciones(
    $filter: ModelInvitacionesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvitaciones(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        numInvitacionesOfrecidas
        numInvitacionesConfirmadas
        invitacionFamiliar
        id
        createdAt
        updatedAt
        userInvitacionesId
        invitacionesGrupoId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGrupo = /* GraphQL */ `
  query GetGrupo($id: ID!) {
    getGrupo(id: $id) {
      nombreFamilia
      invitados {
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listGrupos = /* GraphQL */ `
  query ListGrupos(
    $filter: ModelGrupoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGrupos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        nombreFamilia
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInvitados = /* GraphQL */ `
  query GetInvitados($id: ID!) {
    getInvitados(id: $id) {
      nombreInvitado
      apellidoMaInv
      apellidoPaInv
      movilInvitado
      emailInvitado
      id
      createdAt
      updatedAt
      grupoInvitadosId
      __typename
    }
  }
`;
export const listInvitados = /* GraphQL */ `
  query ListInvitados(
    $filter: ModelInvitadosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvitados(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        nombreInvitado
        apellidoMaInv
        apellidoPaInv
        movilInvitado
        emailInvitado
        id
        createdAt
        updatedAt
        grupoInvitadosId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getEvento = /* GraphQL */ `
  query GetEvento($id: ID!) {
    getEvento(id: $id) {
      nombreEvento
      lugares {
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      invitacionesEventoId
      __typename
    }
  }
`;
export const listEventos = /* GraphQL */ `
  query ListEventos(
    $filter: ModelEventoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        nombreEvento
        id
        createdAt
        updatedAt
        invitacionesEventoId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLugares = /* GraphQL */ `
  query GetLugares($id: ID!) {
    getLugares(id: $id) {
      tipo
      fecha
      hora
      urlUbicacion
      id
      createdAt
      updatedAt
      eventoLugaresId
      __typename
    }
  }
`;
export const listLugares = /* GraphQL */ `
  query ListLugares(
    $filter: ModelLugaresFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLugares(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        tipo
        fecha
        hora
        urlUbicacion
        id
        createdAt
        updatedAt
        eventoLugaresId
        __typename
      }
      nextToken
      __typename
    }
  }
`;

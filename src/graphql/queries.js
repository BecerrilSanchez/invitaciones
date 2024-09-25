/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
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
        id
        nombreUsuario
        gmailUsuario
        movilUsuario
        formatoInvitacion
        notaEnvio
        fechaEnvio
        horaEnvio
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
      invitacionID
      numInvitacionesOfrecidas
      numInvitacionesConfirmadas
      invitacionFamiliar
      grupo {
        GrupoID
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
        invitacionID
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
      GrupoID
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
        GrupoID
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
      invitadoID
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
        invitadoID
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
      eventoID
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
        eventoID
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
      lugarID
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
        lugarID
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

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateInvitaciones = /* GraphQL */ `
  subscription OnCreateInvitaciones(
    $filter: ModelSubscriptionInvitacionesFilterInput
  ) {
    onCreateInvitaciones(filter: $filter) {
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
export const onUpdateInvitaciones = /* GraphQL */ `
  subscription OnUpdateInvitaciones(
    $filter: ModelSubscriptionInvitacionesFilterInput
  ) {
    onUpdateInvitaciones(filter: $filter) {
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
export const onDeleteInvitaciones = /* GraphQL */ `
  subscription OnDeleteInvitaciones(
    $filter: ModelSubscriptionInvitacionesFilterInput
  ) {
    onDeleteInvitaciones(filter: $filter) {
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
export const onCreateGrupo = /* GraphQL */ `
  subscription OnCreateGrupo($filter: ModelSubscriptionGrupoFilterInput) {
    onCreateGrupo(filter: $filter) {
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
export const onUpdateGrupo = /* GraphQL */ `
  subscription OnUpdateGrupo($filter: ModelSubscriptionGrupoFilterInput) {
    onUpdateGrupo(filter: $filter) {
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
export const onDeleteGrupo = /* GraphQL */ `
  subscription OnDeleteGrupo($filter: ModelSubscriptionGrupoFilterInput) {
    onDeleteGrupo(filter: $filter) {
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
export const onCreateInvitados = /* GraphQL */ `
  subscription OnCreateInvitados(
    $filter: ModelSubscriptionInvitadosFilterInput
  ) {
    onCreateInvitados(filter: $filter) {
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
export const onUpdateInvitados = /* GraphQL */ `
  subscription OnUpdateInvitados(
    $filter: ModelSubscriptionInvitadosFilterInput
  ) {
    onUpdateInvitados(filter: $filter) {
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
export const onDeleteInvitados = /* GraphQL */ `
  subscription OnDeleteInvitados(
    $filter: ModelSubscriptionInvitadosFilterInput
  ) {
    onDeleteInvitados(filter: $filter) {
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
export const onCreateEvento = /* GraphQL */ `
  subscription OnCreateEvento($filter: ModelSubscriptionEventoFilterInput) {
    onCreateEvento(filter: $filter) {
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
export const onUpdateEvento = /* GraphQL */ `
  subscription OnUpdateEvento($filter: ModelSubscriptionEventoFilterInput) {
    onUpdateEvento(filter: $filter) {
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
export const onDeleteEvento = /* GraphQL */ `
  subscription OnDeleteEvento($filter: ModelSubscriptionEventoFilterInput) {
    onDeleteEvento(filter: $filter) {
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
export const onCreateLugares = /* GraphQL */ `
  subscription OnCreateLugares($filter: ModelSubscriptionLugaresFilterInput) {
    onCreateLugares(filter: $filter) {
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
export const onUpdateLugares = /* GraphQL */ `
  subscription OnUpdateLugares($filter: ModelSubscriptionLugaresFilterInput) {
    onUpdateLugares(filter: $filter) {
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
export const onDeleteLugares = /* GraphQL */ `
  subscription OnDeleteLugares($filter: ModelSubscriptionLugaresFilterInput) {
    onDeleteLugares(filter: $filter) {
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

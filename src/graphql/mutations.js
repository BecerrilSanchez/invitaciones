/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createInvitaciones = /* GraphQL */ `
  mutation CreateInvitaciones(
    $input: CreateInvitacionesInput!
    $condition: ModelInvitacionesConditionInput
  ) {
    createInvitaciones(input: $input, condition: $condition) {
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
export const updateInvitaciones = /* GraphQL */ `
  mutation UpdateInvitaciones(
    $input: UpdateInvitacionesInput!
    $condition: ModelInvitacionesConditionInput
  ) {
    updateInvitaciones(input: $input, condition: $condition) {
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
export const deleteInvitaciones = /* GraphQL */ `
  mutation DeleteInvitaciones(
    $input: DeleteInvitacionesInput!
    $condition: ModelInvitacionesConditionInput
  ) {
    deleteInvitaciones(input: $input, condition: $condition) {
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
export const createGrupo = /* GraphQL */ `
  mutation CreateGrupo(
    $input: CreateGrupoInput!
    $condition: ModelGrupoConditionInput
  ) {
    createGrupo(input: $input, condition: $condition) {
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
export const updateGrupo = /* GraphQL */ `
  mutation UpdateGrupo(
    $input: UpdateGrupoInput!
    $condition: ModelGrupoConditionInput
  ) {
    updateGrupo(input: $input, condition: $condition) {
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
export const deleteGrupo = /* GraphQL */ `
  mutation DeleteGrupo(
    $input: DeleteGrupoInput!
    $condition: ModelGrupoConditionInput
  ) {
    deleteGrupo(input: $input, condition: $condition) {
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
export const createInvitados = /* GraphQL */ `
  mutation CreateInvitados(
    $input: CreateInvitadosInput!
    $condition: ModelInvitadosConditionInput
  ) {
    createInvitados(input: $input, condition: $condition) {
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
export const updateInvitados = /* GraphQL */ `
  mutation UpdateInvitados(
    $input: UpdateInvitadosInput!
    $condition: ModelInvitadosConditionInput
  ) {
    updateInvitados(input: $input, condition: $condition) {
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
export const deleteInvitados = /* GraphQL */ `
  mutation DeleteInvitados(
    $input: DeleteInvitadosInput!
    $condition: ModelInvitadosConditionInput
  ) {
    deleteInvitados(input: $input, condition: $condition) {
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
export const createEvento = /* GraphQL */ `
  mutation CreateEvento(
    $input: CreateEventoInput!
    $condition: ModelEventoConditionInput
  ) {
    createEvento(input: $input, condition: $condition) {
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
export const updateEvento = /* GraphQL */ `
  mutation UpdateEvento(
    $input: UpdateEventoInput!
    $condition: ModelEventoConditionInput
  ) {
    updateEvento(input: $input, condition: $condition) {
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
export const deleteEvento = /* GraphQL */ `
  mutation DeleteEvento(
    $input: DeleteEventoInput!
    $condition: ModelEventoConditionInput
  ) {
    deleteEvento(input: $input, condition: $condition) {
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
export const createLugares = /* GraphQL */ `
  mutation CreateLugares(
    $input: CreateLugaresInput!
    $condition: ModelLugaresConditionInput
  ) {
    createLugares(input: $input, condition: $condition) {
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
export const updateLugares = /* GraphQL */ `
  mutation UpdateLugares(
    $input: UpdateLugaresInput!
    $condition: ModelLugaresConditionInput
  ) {
    updateLugares(input: $input, condition: $condition) {
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
export const deleteLugares = /* GraphQL */ `
  mutation DeleteLugares(
    $input: DeleteLugaresInput!
    $condition: ModelLugaresConditionInput
  ) {
    deleteLugares(input: $input, condition: $condition) {
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

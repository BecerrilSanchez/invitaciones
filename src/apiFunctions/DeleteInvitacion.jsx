import React from 'react';
import { useApiKey } from '../context/ApiKeyContext';

const DeleteInvitacion = ({ groupId, invitacionId, onDelete }) => {
    const apiKey = useApiKey();
    const endpoint="https://gyela7sxvfg7hofofnpumj74ti.appsync-api.us-west-2.amazonaws.com/graphql"

    const handleDeleteCascade = async () => {
        const confirmed = window.confirm("¿Estás seguro de eliminar esta invitación?");
        if (confirmed) {
            alert(`Invitación eliminada para el grupo con ID: ${groupId}`);
            await deleteInvitacionCascada(); // Ejecuta la eliminación en cascada
            onDelete(); // Llama a la función para ocultar la fila si el usuario confirma
        }
    };

    // Función que realiza la consulta y elimina cada invitado en cascada
    const deleteInvitacionCascada = async () => {

        // Paso 1: Obtener los invitados del grupo
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'x-api-key': apiKey,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: `query ConsultainvitadosGrupo { getGrupo(id: "${groupId}") { id invitados(limit: 10) { items { id } } } }`
                }),
            });

            const result = await response.json();
            const invitados = result?.data?.getGrupo?.invitados?.items || [];

            // Paso 2: Eliminar cada invitado usando su id
            for (const invitado of invitados) {
                await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'x-api-key': apiKey,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        query: `mutation DeleteInvitado { deleteInvitados(input: {id: "${invitado.id}"}) { id nombreInvitado } }`
                    }),
                });
                console.log(`Deleted invitado with id: ${invitado.id}`);
            }
        } catch (error) {
            console.error("Error deleting invitados in cascade:", error);
        }
        await DeleteGrupo();
    };
    const DeleteGrupo = async () => {
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'x-api-key': apiKey,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: `mutation DeleteGrupo { deleteGrupo (input: {id: "${groupId}"}) { id } }`
                }),
            });
    
            const result = await response.json();
            
            if (result.errors) {
                console.error("Error deleting group:", result.errors);
            } else {
                console.log("Group deleted successfully:", result.data.deleteGrupo.id);
            }
        } catch (error) {
            console.error("Network error deleting group:", error);
        }
        await DeleteInvitacion();
    }
    const DeleteInvitacion = async () => {
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'x-api-key': apiKey,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: `mutation DeleteInvitaciones { deleteInvitaciones (input: {id: "${invitacionId}"}) { id } }`
                }),
            });
    
            const result = await response.json();
            
            if (result.errors) {
                console.error("Error deleting Invitacion:", result.errors);
            } else {
                console.log("Invitacion deleted successfully:", result.data.deleteInvitaciones.id);
            }
        } catch (error) {
            console.error("Network error deleting invitacion:", error);
        }
    }

    return (
        <div>
            <button onClick={handleDeleteCascade}>Eliminar</button>
        </div>
    );
};

export default DeleteInvitacion;

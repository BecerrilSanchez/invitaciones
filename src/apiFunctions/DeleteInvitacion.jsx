import React from 'react';
import { useApiKey } from '../context/ApiKeyContext';

const DeleteInvitacion = ({ userId, groupId, onDelete }) => {
    const apiKey = useApiKey();

    const handleDeleteCascade = async () => {
        const confirmed = window.confirm("¿Estás seguro de eliminar esta invitación?");
        if (confirmed) {
            alert(`Invitación eliminada para el usuario con ID: ${userId} y grupo con ID: ${groupId}`);
            onDelete(); // Llama a la función para ocultar la fila si el usuario confirma
        }
    };

    return (
        <div>
            <button onClick={handleDeleteCascade}>Eliminar</button>
        </div>
    );
};

export default DeleteInvitacion;

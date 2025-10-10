import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store/store';
import { getUserProfile, updateUserName as apiUpdateUserName } from '../../api/authService'; 
import { updateUserName } from '../../store/authSlice'; 

interface EditUserFormProps {
    onCancel: () => void;
}

export const EditUserForm: React.FC<EditUserFormProps> = ({ onCancel }) => {
    const dispatch = useDispatch();
    const token = useSelector((state: RootState) => state.auth.token);
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [newUserName, setNewUserName] = useState('');
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const loadProfileData = async () => {
            if (!token) {
                setLoading(false);
                return; 
            }

            try {
         
                const profileData = await getUserProfile(token);
                setFirstName(profileData.firstName);
                setLastName(profileData.lastName);
          
                setNewUserName(profileData.userName); 
                
            } catch (error) {
                console.error("Erreur lors du chargement des données de profil:", error);
             
            } finally {
                setLoading(false);
            }
        };

        loadProfileData();
    }, [token]);


    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!token || !newUserName.trim()) return;

        try {
            setLoading(true);
     
            await apiUpdateUserName(token, newUserName.trim());
    
            dispatch(updateUserName({ userName: newUserName.trim() })); 

            onCancel(); 
            
        } catch (error) {
            console.error('Échec de la sauvegarde du nom d’utilisateur:', error);

        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="header">Chargement du profil...</div>;
    }

    return (
        <form className="edit-user-form" onSubmit={handleSave}>
            <h2>Edit user info</h2>
            <div className="input-group">
                <label htmlFor="username">User name:</label>
                <input 
                    type="text" 
                    id="username" 
                    value={newUserName} 
                    onChange={(e) => setNewUserName(e.target.value)} 
                />
            </div>
            <div className="input-group">
                <label htmlFor="firstname">First name:</label>
                <input 
                    type="text" 
                    id="firstname" 
                    value={firstName} 
                    disabled={true} 
                    className="disabled-input"
                />
            </div>
            <div className="input-group">
                <label htmlFor="lastname">Last name:</label>
                <input 
                    type="text" 
                    id="lastname" 
                    value={lastName} 
                    disabled={true} 
                    className="disabled-input"
                />
            </div>
            <div className="button-group">
                <button type="submit" className="save-button" disabled={loading}>Save</button>
                <button type="button" className="cancel-button" onClick={onCancel} disabled={loading}>Cancel</button>
            </div>
        </form>
    );
};
const API_BASE_URL = 'http://localhost:3001/api/v1';

export const login = async (email : string, password : string) => {

    const url = `${API_BASE_URL}/user/login`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
       
            body: JSON.stringify({email, password})
        });

        if (!response.ok) {
         
            const errorData = await response.json();
            throw new Error(errorData.message || 'E-mail ou mot de passe incorrect.');
        }

        const data = await response.json();

        if (data.body && data.body.token) {
            return {
                token: data.body.token,
            };
        } else {
            throw new Error('Token manquant dans la réponse de l’API.');
        }

    } catch (error) {
        throw error;
    }
};

export const getUserProfile = async (token: string) => {
    const url = `${API_BASE_URL}/user/profile`;

    try {
        const response = await fetch(url, {
            method: 'GET', 
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error("Erreur lors de la récupération du profil.");
        }

        const data = await response.json();
        
        return {
            firstName: data.body.firstName, 
            lastName: data.body.lastName,
        };

    } catch (error) {
        throw error;
    }
};
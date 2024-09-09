export const login = async (payload) => {
    console.log(JSON.stringify(payload))
    try {
        const response = await fetch('http://localhost:5000/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Esta cabecera es importante
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return error
    }
}

export const createUser = async (body) => {
    try {
        const response = await fetch('http://localhost:5000/api/auth/new', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json', // Esta cabecera es importante
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
        return error
    }
}
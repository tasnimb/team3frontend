
export async function getAllUsers() {

    const response = await fetch('http://localhost:8081/api/users');
    return await response.json();
}

export async function createUser(data) {
    const response = await fetch(`http://localhost:8081/api/user`, {
        method: 'POST',
        mode: "no-cors",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response.json();
}
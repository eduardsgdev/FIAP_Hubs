import api from '../util/apiAddress.js';

export function profile(element) {
    const token = localStorage.getItem('tokenUserFiap');
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    const requestOptions = {
        method: 'GET',
        headers: {
        'authorization': token,
        'Content-Type': 'application/json'
        },
        mode: 'cors',
    }

    fetch(api + '/src/backend/controllers/user/getProfile', requestOptions)
    .then(async response => {
        const data = await response.json();
        
        const menu = `<div class="me-2">
                        <i class="bi bi-person-circle text-white d-flex justify-content-center data-bs-toggle="tooltip" 
                        title="${data.profile.email}"></i>
                        <span class="d-flex text-white mt-1" style="font-size: small;">${data.profile.name}</span>
                    </div>`;
        element.innerHTML = menu;
    }).catch((error) => {
        return console.error(error);
    });
}
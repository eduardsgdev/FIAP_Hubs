import { createTopModal } from '../components/modal.js';

export function verifyToken(title, message, statusCode) {
    if (statusCode == 401) {
        setTimeout(() => {
            window.top.location.href = '../login/index.html';
        }, 2000)
        localStorage.removeItem('tokenAdminFiap');

        return createTopModal(title, message, 'text-bg-danger');
    }
}
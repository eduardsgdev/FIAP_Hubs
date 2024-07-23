/*
Take your element example: var button = document.getElementById('#id');
Pass your variable as parameter to invoke function example: loadingAdd(button)
*/
export function loadingAdd(tag) {
    var spinner = document.createElement('span');
    spinner.classList.add('spinner-border', 'spinner-border-sm', 'loading-spinner', 'me-1', 'mt-1');
    spinner.setAttribute('role', 'status');
    spinner.setAttribute('aria-hidden', 'true');
    tag.insertBefore(spinner, tag.firstChild);
    tag.loadingSpinner = spinner;
}

export function loadingRemove(tag) {
        tag.loadingSpinner.style.display = 'none';
    
}
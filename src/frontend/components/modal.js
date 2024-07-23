/*
Creates a top modal based bootstrap, automatically when was invoked.
Pass title, content message and color if 400 or 200 example: createTopModal('Sucesso', feedback.message, 'text-bg-success')
*/
export function createTopModal(title, message, color, dismiss = false) {
    const modal = document.createElement("div");
    modal.classList.add("modal", "fade");
    modal.id = "staticBackdrop";
    modal.setAttribute("data-bs-backdrop", "static");
    modal.setAttribute("data-bs-keyboard", "false");
    modal.tabIndex = "-1";
    modal.setAttribute("aria-labelledby", "staticBackdropLabel");
    modal.setAttribute("aria-hidden", "true");

    const modalDialog = document.createElement("div");
    modalDialog.classList.add("modal-dialog");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");

    const modalTitle = document.createElement("h1");
    modalTitle.classList.add("modal-title", "fs-5");
    modalTitle.id = "staticBackdropLabel";
    modalTitle.textContent = title;

    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.classList.add("btn-close");
    closeButton.setAttribute("data-bs-dismiss", "modal");
    closeButton.setAttribute("aria-label", "Close");

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);

    const modalBody = document.createElement("div");
    modalBody.classList.add("modal-body", 'text-start');
    modalBody.textContent = message;

    const modalFooter = document.createElement("div");
    modalFooter.classList.add("modal-footer");

    const closeButtonFooter = document.createElement("button");
    closeButtonFooter.type = "button";
    closeButtonFooter.classList.add("btn", color);
    closeButtonFooter.setAttribute("data-bs-dismiss", "modal");
    closeButtonFooter.textContent = dismiss == false ? 'Fechar' : dismiss;

    modalFooter.appendChild(closeButtonFooter);

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    modalDialog.appendChild(modalContent);
    modal.appendChild(modalDialog);

    document.body.appendChild(modal);

    new bootstrap.Modal(modal).show();
}
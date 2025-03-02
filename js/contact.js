
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.querySelector('#contact-form');
            const fields = form.querySelectorAll('input, select, textarea');
            
            form.addEventListener('submit', function(event) {
                let isValid = true;
                
                fields.forEach(field => {
                    const errorMessage = field.nextElementSibling;
                    if (field.type === 'checkbox' && !field.checked) {
                        field.classList.add('error-border');
                        if (!errorMessage || !errorMessage.classList.contains('error-message')) {
                            const error = document.createElement('div');
                            error.className = 'error-message';
                            error.textContent = 'Ce champ est obligatoire';
                            field.parentNode.insertBefore(error, field.nextSibling);
                        }
                        isValid = false;
                    } else if (field.value.trim() === '') {
                        field.classList.add('error-border');
                        if (!errorMessage || !errorMessage.classList.contains('error-message')) {
                            const error = document.createElement('div');
                            error.className = 'error-message';
                            error.textContent = 'Ce champ est obligatoire';
                            field.parentNode.insertBefore(error, field.nextSibling);
                        }
                        isValid = false;
                    } else {
                        field.classList.remove('error-border');
                        if (errorMessage && errorMessage.classList.contains('error-message')) {
                            errorMessage.remove();
                        }
                    }
                });
                
                if (!isValid) {
                    event.preventDefault();
                }
            });
        });


      
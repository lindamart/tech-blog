const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#username-signup');
    const password = document.querySelector('#password-signup');

    if (name && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({
                username: name.value.trim(),
                password: password.value.trim()
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
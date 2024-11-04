document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('passwordResetForm');
    const sendCodeBtn = document.getElementById('sendCode');
    const emailInput = document.getElementById('email');
    const codeInput = document.getElementById('code');
    const newPasswordInput = document.getElementById('newPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    // Handle sending verification code
    sendCodeBtn.addEventListener('click', function() {
        const email = emailInput.value.trim();
        
        if (!email) {
            alert('Silakan masukkan alamat email');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Silakan masukkan alamat email yang valid');
            return;
        }

        // Simulate sending code
        alert('Kode verifikasi telah dikirim ke ' + email);
        // Here you would typically make an API call to send the verification code
    });

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const code = codeInput.value.trim();
        const newPassword = newPasswordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Validate all fields
        if (!email || !code || !newPassword || !confirmPassword) {
            alert('Silakan isi semua field');
            return;
        }

        // Validate email format
        if (!isValidEmail(email)) {
            alert('Silakan masukkan alamat email yang valid');
            return;
        }

        // Validate password match
        if (newPassword !== confirmPassword) {
            alert('Kata sandi baru dan konfirmasi kata sandi tidak cocok');
            return;
        }

        // Validate password strength
        if (!isStrongPassword(newPassword)) {
            alert('Kata sandi harus minimal 8 karakter dan mengandung huruf besar, huruf kecil, dan angka');
            return;
        }

        // Here you would typically make an API call to verify the code and update the password
        alert('Kata sandi berhasil diperbarui!');
        form.reset();
    });

    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Password strength validation helper
    function isStrongPassword(password) {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        
        return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers;
    }
});
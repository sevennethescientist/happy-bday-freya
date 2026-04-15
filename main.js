        const correctPassword = "lildih";
        
        function validatePassword() {
            const inputPassword = document.getElementById("passwordInput").value;
            const errorMsg = document.getElementById("errorMsg");
            
            if (inputPassword === correctPassword) {
                // Hide login form and show protected content
                document.getElementById("loginForm").style.display = "none";
                document.getElementById("container").style.display = "flex";
                errorMsg.textContent = "";
            } else {
                // Show error message
                errorMsg.textContent = "Incorrect password! Please try again.";
                document.getElementById("passwordInput").value = "";
                document.getElementById("passwordInput").focus();
            }
        }
        
        function logout() {
            // Hide protected content and show login form
            document.getElementById("container").style.display = "none";
            document.getElementById("loginForm").style.display = "block";
            document.getElementById("passwordInput").value = "";
        }
        
        // Allow Enter key to submit
        document.getElementById("passwordInput").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                validatePassword();
            }
        });
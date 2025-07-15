// newsletter.js - Handle newsletter signups

document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            
            // Simple validation
            if (!name || !email) {
                alert('Please fill in all fields');
                return;
            }
            
            // In a real implementation, you would send this to your backend
            console.log('Newsletter signup:', { name, email });
            
            // Show success message
            const successMsg = document.createElement('p');
            successMsg.textContent = 'Thanks for subscribing!';
            successMsg.style.color = 'green';
            successMsg.style.marginTop = '1rem';
            this.parentNode.appendChild(successMsg);
            
            // Reset form
            this.reset();
            
            // Remove message after 5 seconds
            setTimeout(() => {
                successMsg.remove();
            }, 5000);
        });
    }
});

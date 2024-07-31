document.addEventListener("DOMContentLoaded", function () {
            const elements = document.querySelectorAll('.animate-on-scroll');
    
            const animationClasses = {
                'fadeInUp': 'animate__fadeInUp',
                'fadeInDown': 'animate__fadeInDown',
                'fadeInLeft': 'animate__fadeInLeft',
                'fadeInRight': 'animate__fadeInRight',
                'ZoomInUp': 'animate_ZoomInUp',
                'zoomInDown': 'animate__ZoomInDown',
                'ZoomInLeft': 'animate_ZoomInLeft',
                'rollIn': 'animate__rollIn',
                'flip': 'animate__flip',
                'slideInLeft': 'animate__slideInLeft',
                'rotateIn': 'animate__rotateIn'
                // Add more animation classes as needed
            };
    
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const animationType = entry.target.getAttribute('data-animation');
                        const animationClass = animationClasses[animationType] || 'animate__fadeInDown'; // Default animation if not specified
    
                        entry.target.classList.add('visible');
                        entry.target.classList.add('animate__animated');
                        entry.target.classList.add(animationClass);
    
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
    
            elements.forEach(element => {
                observer.observe(element);
            });
        });
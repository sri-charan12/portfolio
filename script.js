document.addEventListener('DOMContentLoaded', function() {
    // Loader
    const loader = document.querySelector('.loader');
    
    // Hide loader after 1.5 seconds
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1500);
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const floatingNav = document.querySelector('.floating-nav');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        floatingNav.classList.toggle('active');
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Close mobile menu if open
            mobileMenuBtn.classList.remove('active');
            floatingNav.classList.remove('active');
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Update active link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Update active link on scroll
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
 

const username = 'yourusername';

async function fetchGitHubStats() {
  const userRes = await fetch(`https://api.github.com/users/${username}`);
  const userData = await userRes.json();

  const reposRes = await fetch(userData.repos_url);
  const repos = await reposRes.json();

  // Calculate total stars
  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

  document.getElementById('total-stars').textContent = totalStars;
  document.getElementById('total-repos').textContent = userData.public_repos;
}

fetchGitHubStats();


    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            if (isElementInViewport(bar)) {
                bar.style.width = width + '%';
            }
        });
    }
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    window.addEventListener('scroll', animateSkillBars);
    animateSkillBars(); // Run once on load
    
    // Project filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active filter button
            filterBtns.forEach(btn => btn.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Form submission
    const hireForm = document.getElementById('hireForm');
    const successModal = document.getElementById('successModal');
    const closeModal = document.querySelector('.close-modal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    
    hireForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For demo purposes, we'll just show the success modal
        successModal.classList.add('active');
        
        // Reset form
        hireForm.reset();
    });
    
    // Close modal
    closeModal.addEventListener('click', () => {
        successModal.classList.remove('active');
    });
    
    modalCloseBtn.addEventListener('click', () => {
        successModal.classList.remove('active');
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === successModal) {
            successModal.classList.remove('active');
        }
    });
    
    // Update copyright year
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Tooltip for floating nav on mobile
    if (window.innerWidth <= 768) {
        const floatingNavLinks = document.querySelectorAll('.floating-nav a');
        
        floatingNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Remove active class from all links
                floatingNavLinks.forEach(navLink => navLink.classList.remove('active'));
                // Add active class to clicked link
                link.classList.add('active');
            });
        });
    }
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const animatedElements = document.querySelectorAll('.animated-text, .animated-subtext, .animated-description, .hero-buttons, .scroll-indicator');
        
        animatedElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.style.animationPlayState = 'running';
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});

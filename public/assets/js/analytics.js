window.addEventListener('load', () => {
    window.dataLayer = window.dataLayer || [];

    const trackSectionView = sectionName => {
        const config = {
            event: 'section_enter',
            name: sectionName,
        };

        window.dataLayer?.push(config);
    };

    const sections = document.querySelectorAll('.section');

    const observerConfig = {
        rootMargin: '0px',
        threshold: 0.1,
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) trackSectionView(entry.target.id);
        });
    }, observerConfig);

    sections.forEach(section => observer.observe(section));
});

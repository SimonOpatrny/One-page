document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
 
    // Posluchač události pro kolečko myši (wheel)
    document.addEventListener('wheel', (event) => {
        const deltaY = event.deltaY;
        const currentSectionIndex = getCurrentSectionIndex(sections);
 
        if (deltaY > 0) {
            // Scrollování dolů
            scrollToNextSection(sections, currentSectionIndex);
        } else {
            // Scrollování nahoru (není potřeba implementovat, nechat prázdné)
        }
    });
 
    function getCurrentSectionIndex(sections) {
        // Zjistí index aktuální sekce, která je zobrazena v viewportu
        for (let i = 0; i < sections.length; i++) {
            if (isElementInViewport(sections[i])) {
                return i;
            }
        }
        return -1; // Pokud žádná sekce není v viewportu
    }
 
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }
 
    function scrollToNextSection(sections, currentIndex) {
        const nextIndex = currentIndex + 1;
        if (nextIndex < sections.length) {
            const nextSection = sections[nextIndex];
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
// JavaScript pro přepnutí sekce při najetí myši (hover) na kolečko myši
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
 
    sections.forEach((section, index) => {
        section.addEventListener('mouseover', () => {
            scrollToSection(index + 1); // Index + 1 odpovídá číslu sekce (1, 2, 3)
        });
    });
 
    function scrollToSection(sectionNumber) {
        const targetSectionId = `section${sectionNumber}`;
        const targetSection = document.getElementById(targetSectionId);
 
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const firstSection = sections[0];
    const lastSection = sections[sections.length - 1];
 
    // Posluchač události pro kolečko myši (wheel)
    document.addEventListener('wheel', (event) => {
        const isScrollingDown = event.deltaY > 0;
 
        // Pokud uživatel scrolloval dolů a je na poslední sekci
        if (isScrollingDown && isAtBottomOfPage()) {
            scrollToSection(firstSection);
        }
    });
 
    function isAtBottomOfPage() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
 
        return (scrollPosition + windowHeight) >= documentHeight;
    }
 
    function scrollToSection(section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
});
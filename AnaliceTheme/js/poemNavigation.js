export function setupPoemNavigation(poems) {
    let currentPoemIndex = 0;
    const poemContent = document.getElementById('poemContent');
    const prevButton = document.getElementById('prevPoem');
    const nextButton = document.getElementById('nextPoem');

    function displayPoem(index) {
        const poem = poems[index];
        poemContent.innerHTML = `
            <h3>${poem.title}</h3>
            <p>${poem.content}</p>
        `;
    }

    prevButton.addEventListener('click', () => {
        currentPoemIndex = (currentPoemIndex - 1 + poems.length) % poems.length;
        displayPoem(currentPoemIndex);
    });

    nextButton.addEventListener('click', () => {
        currentPoemIndex = (currentPoemIndex + 1) % poems.length;
        displayPoem(currentPoemIndex);
    });

 
    displayPoem(currentPoemIndex);
}
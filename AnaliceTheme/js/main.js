import { poems } from './poems.js';
import { puzzleImages } from './puzzleImages.js';
import { setupPuzzle } from './puzzle.js';
import { setupPoemNavigation } from './poemNavigation.js';



document.addEventListener('DOMContentLoaded', () => {
    const startPuzzleBtn = document.getElementById('startPuzzle');
    const puzzleContainer = document.getElementById('puzzleContainer');
    const poemSection = document.getElementById('poemSection');

    startPuzzleBtn.addEventListener('click', () => {
        puzzleContainer.classList.remove('hidden');
        startPuzzleBtn.classList.add('hidden');
    });


    setupPuzzle(puzzleImages, () => {

        puzzleContainer.classList.add('hidden');
        poemSection.classList.remove('hidden');
        setupPoemNavigation(poems);
    });


    });

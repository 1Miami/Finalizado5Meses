export function setupPuzzle(images, onSuccess) {
    const imageContainer = document.getElementById('imageContainer');
    const checkButton = document.getElementById('checkOrder');
    let currentOrder = [];

    
    const shuffledImages = [...images].sort(() => Math.random() - 0.5);


    shuffledImages.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.description;
        img.classList.add('puzzle-image');
        img.dataset.order = image.order;
        img.dataset.currentPosition = index;
        
        img.addEventListener('click', () => selectImage(img));
        imageContainer.appendChild(img);
    });


    function selectImage(img) {
        img.classList.toggle('selected');
        const position = parseInt(img.dataset.currentPosition);
        
        if (img.classList.contains('selected')) {
            currentOrder.push({
                position: position,
                order: parseInt(img.dataset.order)
            });
        } else {
            currentOrder = currentOrder.filter(item => item.position !== position);
        }
    }

    checkButton.addEventListener('click', () => {
        if (currentOrder.length !== images.length) {
            alert('Please select all images in order!');
            return;
        }

        const isCorrect = currentOrder.every((item, index) => item.order === index + 1);
        
        if (isCorrect) {
            alert('Olha só não é o tamanho da cabeça tem algum sentido! ❤️');
            onSuccess();
        } else {
            alert('Mas essa colocar essa cabecinha pra pensar não quer né amor?');
         
            currentOrder = [];
            document.querySelectorAll('.puzzle-image').forEach(img => {
                img.classList.remove('selected');
            });
        }
    });
}
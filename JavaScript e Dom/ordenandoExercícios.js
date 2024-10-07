// Function swap

const swap = (array, pos1, pos2) => {
    if (pos1 < 0 || pos2 < 0 || pos1 >= array.length || pos2 >= array.length){
        throw new console.error("As posições devem estar dentro dos limites do vetor");
    }

    // Troca da posição dos valores

    [array[pos1], array[pos2]] = [array[pos2]], array[pos1];
};

// Exemplo abaixo do uso

const meuVetor = [1,2,3,4,5,6];
console.log("Antes da troca:", meuVetor);

swap(meuVetor, 1, 3);
console.log("Depois da troca:", meuVetor);

//-----------------------------------------------------------------------------------//

// Function shuflle

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        // Gera um índice aleatório entre 0 e i
        const j = Math.floor(Math.random() * (i + 1));
        // Troca os elementos
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// Exemplo abaixo do uso
const meuVetor2 = [1, 2, 3, 4, 5];
console.log("Antes do shuffle:", meuVetor2);

const vetorMisturado = shuffle(meuVetor2);
console.log("Depois do shuffle:", vetorMisturado);

//-----------------------------------------------------------------------------------//

// Function bubble_sort

const bubbleSort = (array) => {
    const n = array.length;
    let swapped;

    // Loop para percorrer todos os elementos do array
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            // Compara elementos adjacentes e troca se estiverem na ordem errada
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true; // Marca que houve uma troca
            }
        }
    } while (swapped); // Continua enquanto houver trocas

    return array;
};

// Exemplo de uso
const meuVetor3 = [5, 3, 8, 4, 2];
console.log("Antes do bubble sort:", meuVetor3);

const vetorOrdenado = bubbleSort(meuVetor3);
console.log("Depois do bubble sort:", vetorOrdenado);

//-------------------------------------------------------------------------------------//

// Function selection_sort

const selectionSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Troca os valores
        }
    }
    return arr;
};

// Exemplo de uso
const arr = [64, 25, 12, 22, 11];
console.log("Antes do selection_sort:", arr);

const ordenado = selectionSort(arr);
console.log("Depois do selection_sort", ordenado);

//------------------------------------------------------------------------------------//

// Function quick_sort

const quickSort = (arr2) => {
    if (arr2.length <= 1) return arr2;

    const pivot = arr2[arr2.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr2.length - 1; i++) {
        if (arr2[i] < pivot) {
            left.push(arr2[i]);
        } else {
            right.push(arr2[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
};

// Exemplo de uso
const arr2 = [64, 25, 12, 22, 11];
console.log("Antes do quick_sort:", arr2);

const ordenado2 = quickSort(arr2);
console.log("Depois do quick_sort:", ordenado2);

//------------------------------------------------------------------------------------//

// Function particionamento

const partition = (arr3, low, high) => {
    const pivot = arr3[high];  // Escolhe o pivô como o último elemento
    let i = low - 1;  // Índice do menor elemento

    for (let j = low; j < high; j++) {
        if (arr3[j] < pivot) {
            i++;
            [arr3[i], arr3[j]] = [arr3[j], arr3[i]];  // Troca os elementos
        }
    }

    // Coloca o pivô no seu lugar correto
    [arr3[i + 1], arr3[high]] = [arr3[high], arr3[i + 1]];
    return i + 1;  // Retorna o índice do pivô
};

// Exemplo de uso no contexto de Quick Sort
const arr3 = [64, 25, 12, 22, 11];
console.log(partition(arr3, 0, arr3.length - 1)); // Saída: índice do pivô final
console.log(arr3);  // Saída: array parcialmente ordenado após a partição
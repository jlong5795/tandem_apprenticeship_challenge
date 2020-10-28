export const useShuffleArray = (array, elementsReturns) => {
    const returnedArray = []

    while (returnedArray.length < elementsReturns) {
        let index = Math.floor(Math.random() * Math.floor(array.length - 1))
        
        let removed = array.splice(index, 1)
        returnedArray.push(removed[0])
    }

    return returnedArray;
};
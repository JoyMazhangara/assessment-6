const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    const array = [1,2,3,4,5,6]
    test('should return a shuffled array', () => {
        expect(shuffleArray(array)).not.toBe(array)
    })
    
    test('should return same array length', () => {
        expect(array.length).toBe(shuffleArray(array).length)
    })
    
    test('should return all items in array', () => {
        for (let i=0; i < array.length; i++) {
            expect(shuffleArray(array)).toContain(array[i])
        }
    })
})
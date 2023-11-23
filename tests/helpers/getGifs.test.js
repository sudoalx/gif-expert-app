import getGifs from "../../src/helpers/getGifs"

describe('Tests for getGifs', () => {
    test('should return an array of Gifs', async () => {
        const gifs = await getGifs('Iron Man')
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    })
})
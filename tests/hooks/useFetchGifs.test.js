import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Test useFetchGifs custom hook', () => {
    test('should return initial state', () => {
        const { result } = renderHook(() => useFetchGifs('Iron Man'))
        const { images, isLoading } = result.current
        expect(images.length).toBe(0)
        expect(isLoading).toBe(true)
    })

    test('should return an array of images and isLoading should be false', async () => {
        const { result } = renderHook(() => useFetchGifs('Iron Man'))
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )
        const { images, isLoading } = result.current
        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBe(false)
    })
})
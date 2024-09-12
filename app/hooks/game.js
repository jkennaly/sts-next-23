import { useCallback } from "react"
import { useAppDispatch as useDispatch } from "@/lib/hooks"
import { setGameState } from "@/lib/actions"
import { useRouter } from "next/navigation"

const seed = 'ZERO'


export const useNewGameState = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    return useCallback(() => {
        const newGameState = {
            type: 'NEW_GAME',
            seed: seed
        }
        dispatch(setGameState(newGameState))
        router.push('/pages/sts/overview')
    }, [dispatch, router])
}

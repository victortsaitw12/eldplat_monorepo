import { DUMMY_USER } from "@services/account/login"

export const useSession = () => {
    return {
        data: {user: DUMMY_USER},
        status: "authenticated"
    }
}


import {atom} from 'recoil'

const GlobalState = {
    canbuy: atom<boolean>({
        key: "canbuy",
        default: false
    }),
    theme: atom<"light" | "dark">({
        key:"theme",
        default: "light",
    })
}

export default GlobalState;
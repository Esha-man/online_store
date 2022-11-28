import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._types = [
            {id: 1, name: "Обувь"},
            {id: 2, name: "Одежда"},
        ]
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(bool) {
        this._user = bool
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

}
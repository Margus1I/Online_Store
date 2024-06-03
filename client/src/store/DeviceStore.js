import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильник'},
            {id: 2, name: 'Смартфоны'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'}
        ]
        this._devices = [
            {"id":4,"name":"12 pro","price":120000,"rating":0,"img":"42741d00-9359-46c6-9e10-682e1307ae5c.jpg","createdAt":"2024-05-18T12:08:17.047Z","updatedAt":"2024-05-18T12:08:17.047Z","typeId":2,"brandId":2},
            {"id":5,"name":"A51","price":100000,"rating":0,"img":"6502e0a7-fdb2-4c03-a25f-2540faae8384.jpg","createdAt":"2024-05-18T12:16:54.895Z","updatedAt":"2024-05-18T12:16:54.895Z","typeId":1,"brandId":1},
            {"id":6,"name":"Realme","price":100000,"rating":0,"img":"7d7ce3e9-8e3e-49ef-a21b-2b9f4fdbd1e1.jpg","createdAt":"2024-05-18T12:17:08.368Z","updatedAt":"2024-05-18T12:17:08.368Z","typeId":2,"brandId":2}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}
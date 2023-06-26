import { makeAutoObservable } from "mobx";

export default class ProductStore {
  constructor() {
    this._widths = []
    this._heights = []
    this._diametrs = []
    this._speeds = []
    this._thorns = []
    this._seasonalitys = []
    this._indexs = []
    this._brands = []
    this._products = []
    this._selectedWidth = {}
    this._selectedHeight = {}
    this._selectedDiametr = {}
    this._selectedSpeed = {}
    this._selectedThorn = {}
    this._selectedSeasonality = {}
    this._selectedIndex = {}
    this._selectedBrand = {}
    this._page = 1
    this._limit = 6
    this._totalCount = 0
    makeAutoObservable(this)
  }

  setWidths(widths) {
    this._widths = widths
  }
  setHeights(heights) {
    this._heights = heights
  }
  setDiametrs(diametrs) {
    this._diametrs = diametrs
  }
  setSpeeds(speeds) {
    this._speeds = speeds
  }
  setThorns(thorns) {
    this._thorns = thorns
  }
  setSeasonalitys(seasonalitys) {
    this._seasonalitys = seasonalitys
  }
  setIndexs(indexs) {
    this._indexs = indexs
  }
  setBrands(brands) {
    this._brands = brands
  }
  setProducts(products) {
    this._products = products
  }
  setSelectedWidth(width) {
    this.setPage(1)
    this._selectedWidth = width
  }
  setSelectedHeight(height) {
    this.setPage(1)
    this._selectedHeight = height
  }
  setSelectedDiametr(diametr) {
    this.setPage(1)
    this._selectedDiametr = diametr
  }
  setSelectedSpeed(speed) {
    this.setPage(1)
    this._selectedSpeed = speed
  }
  setSelectedThorn(thorn) {
    this.setPage(1)
    this._selectedThorn = thorn
  }
  setSelectedSeasonality(seasonality) {
    this.setPage(1)
    this._selectedSeasonality = seasonality
  }
  setSelectedIndex(index) {
    this.setPage(1)
    this._selectedIndex = index
  }
  setSelectedBrand(brand) {
    this.setPage(1)
    this._selectedBrand = brand
  }
  setPage(page) {
    this._page = page
  }
  setTotalCount(count) {
    this._totalCount = count
  }
  get widths() {
    return this._widths
  }
  get heights() {
    return this._heights
  }
  get diametrs() {
    return this._diametrs
  }
  get speeds() {
    return this._speeds
  }
  get thorns() {
    return this._thorns
  }
  get seasonalitys() {
    return this._seasonalitys
  }
  get indexs() {
    return this._indexs
  }
  get brands() {
    return this._brands
  }
  get products() {
    return this._products
  }
  get selectedWidth() {
    return this._selectedWidth
  }
  get selectedHeight() {
    return this._selectedHeight
  }
  get selectedDiametr() {
    return this._selectedDiametr
  }
  get selectedSpeed() {
    return this._selectedSpeed
  }
  get selectedThorn() {
    return this._selectedThorn
  }
  get selectedSeasonality() {
    return this._selectedSeasonality
  }
  get selectedIndex() {
    return this._selectedIndex
  }
  get selectedBrand() {
    return this._selectedBrand
  }
  get totalCount() {
    return this._totalCount
  }
  get page() {
    return this._page
  }
  get limit() {
    return this._limit
  }
}
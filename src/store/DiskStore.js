import { makeAutoObservable } from "mobx";

export default class DiskStore {
  constructor() {
    this._vilets = []
    this._diums = []
    this._krepQuans = []
    this._types = []
    this._widthDisks = []
    this._brandDisks = []
    this._diametrDisks = []
    this._diametrDiskKreps = []
    this._disks = []
    this._selectedVilet = {}
    this._selectedDium = {}
    this._selectedKrepQuan = {}
    this._selectedType = {}
    this._selectedWidthDisk = {}
    this._selectedBrandDisk = {}
    this._selectedDiametrDisk = {}
    this._selectedDiametrDiskKrep = {}
    this._page = 1
    this._limit = 6
    this._totalCount = 0
    makeAutoObservable(this)
  }

  setVilets(vilets) {
    this._vilets = vilets
  }
  setDiums(diums) {
    this._diums = diums
  }
  setKrepQuans(krepQuans) {
    this._krepQuans = krepQuans
  }
  setTypes(types) {
    this._types = types
  }
  setWidthDisks(widthDisks) {
    this._widthDisks = widthDisks
  }
  setBrandDisks(brandDisks) {
    this._brandDisks = brandDisks
  }
  setDiametrDisks(diametrDisks) {
    this._diametrDisks = diametrDisks
  }
  setDiametrDiskKreps(diametrDiskKreps) {
    this._diametrDiskKreps = diametrDiskKreps
  }
  setDisks(disks) {
    this._disks = disks
  }
  setSelectedVilet(vilet) {
    this.setPage(1)
    this._selectedVilet = vilet
  }
  setSelectedDium(dium) {
    this.setPage(1)
    this._selectedDium = dium
  }
  setSelectedKrepQuan(krepQuan) {
    this.setPage(1)
    this._selectedKrepQuan = krepQuan
  }
  setSelectedType(type) {
    this.setPage(1)
    this._selectedType = type
  }
  setSelectedWidthDisk(widthDisk) {
    this.setPage(1)
    this._selectedWidthDisk = widthDisk
  }
  setSelectedBrandDisk(brandDisk) {
    this.setPage(1)
    this._selectedBrandDisk = brandDisk
  }
  setSelectedDiametrDiskKrep(diametrDiskKrep) {
    this.setPage(1)
    this._selectedDiametrDiskKrep = diametrDiskKrep
  }
  setSelectedDiametrDisk(diametrDisk) {
    this.setPage(1)
    this._selectedDiametrDisk = diametrDisk
  }
  setPage(page) {
    this._page = page
  }
  setTotalCount(count) {
    this._totalCount = count
  }
  get vilets() {
    return this._vilets
  }
  get diums() {
    return this._diums
  }
  get krepQuans() {
    return this._krepQuans
  }
  get types() {
    return this._types
  }
  get widthDisks() {
    return this._widthDisks
  }
  get brandDisks() {
    return this._brandDisks
  }
  get diametrDisks() {
    return this._diametrDisks
  }
  get diametrDiskKreps() {
    return this._diametrDiskKreps
  }
  get disks() {
    return this._disks
  }
  get selectedVilet() {
    return this._selectedVilet
  }
  get selectedDium() {
    return this._selectedDium
  }
  get selectedKrepQuan() {
    return this._selectedKrepQuan
  }
  get selectedType() {
    return this._selectedType
  }
  get selectedWidthDisk() {
    return this._selectedWidthDisk
  }
  get selectedBrandDisk() {
    return this._selectedBrandDisk
  }
  get selectedDiametrDisk() {
    return this._selectedDiametrDisk
  }
  get selectedDiametrDiskKrep() {
    return this._selectedDiametrDiskKrep
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
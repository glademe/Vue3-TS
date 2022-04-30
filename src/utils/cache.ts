class LocalCache {
  //放入缓存
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  //移除某一个
  removeCache(key: string) {
    window.localStorage.removeItem(key)
  }
  //清空缓存
  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()

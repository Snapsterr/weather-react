export const controlStorage = {
  setItem: (name, item) => {
    localStorage.setItem(name, JSON.stringify(item))
  },
  getItem: (name) => {
    const item = localStorage.getItem(name)

    if (item) {
      return JSON.parse(item)
    }
  },
}

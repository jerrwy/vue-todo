const storage = window.localStorage

export const ST_SET = (k, v) => {
  storage.setItem(k, v)
}

export const ST_GET = (k) => {
  return storage.getItem(k)
}

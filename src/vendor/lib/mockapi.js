// Simple in-memory mock API with tiny delays
const wait = (ms) => new Promise((r) => setTimeout(r, ms))

let ORDERS = [
  { id: 'ord_01', title: 'Chicken Biryani', meta: '2 items • $25', thumbnail: '', status: 'running' },
  { id: 'ord_02', title: 'Veg Fried Rice', meta: '1 item • $8', thumbnail: '', status: 'running' },
  { id: 'ord_03', title: 'Spicy Ramen', meta: '1 item • $12', thumbnail: '', status: 'running' },
  { id: 'ord_04', title: 'Pepperoni Pizza', meta: '3 items • $36', thumbnail: '', status: 'running' }
]

export async function fetchOrders() {
  await wait(350)
  // return a copy so consumer can't mutate internal array directly
  return ORDERS.map(o => ({ ...o }))
}

export async function completeOrderApi(id) {
  await wait(600)
  // mutate internal state
  const idx = ORDERS.findIndex(o => o.id === id)
  if (idx === -1) throw new Error('Order not found')
  ORDERS[idx] = { ...ORDERS[idx], status: 'completed' }
  return { ok: true, id }
}

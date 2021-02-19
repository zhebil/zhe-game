export const updateData = (data, id)=>{
    const itemIdx = data.rest.findIndex(item=> item.id === id)
    const item = data.rest[itemIdx]
    return {
      ...data,
      rest: [...data.rest.slice(0, itemIdx), ...data.rest.slice(itemIdx + 1)],
      done: [...data.done, item]
    }
  }
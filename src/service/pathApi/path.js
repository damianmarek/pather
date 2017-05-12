const path = (instance) => {
  const getPath = (startPoint, endPoint) => {
    return (
      instance.get(`/${startPoint[1]},${startPoint[0]};${endPoint[1]},${endPoint[0]}?geometries=geojson`)
    )
  }

  return {
    getPath,
  }
}

export default path

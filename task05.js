function areaOfTriangle(length, breadth, height) {

  const semiPerimeter = (1/2) * (length + breadth + height)

  const area = Math.sqrt(semiPerimeter * ((semiPerimeter - length) * (semiPerimeter - breadth) * (semiPerimeter - height)))

  return area
}

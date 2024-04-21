type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare<T extends AllType, K extends keyof AllType> (top: Pick<AllType, K>, bottom: Pick<AllType, K>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}
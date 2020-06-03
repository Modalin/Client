export default function calculate (data) {
  let result = 0
  for(key in data){
    result += (data.value * data.total_unit)
  }
  return result
}
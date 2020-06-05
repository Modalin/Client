export default function name(profit_time,persentase,min_investasi) {
  const data = []

  // const persentase_keuntungan_ = persentase * profit_time
  // const pendapatan_ = persentase_keuntungan_ * min_investasi
  // const per_tahun = Math.round(12/profit_time)
  // const hasil_float = Number.parseFloat(pendapatan_).toFixed(2)

  const persentase_per_profit_times =  +persentase / +profit_time // inin dikali min invest
  const result = +persentase_per_profit_times * +min_investasi
  const result_per_profit_per_tahun = +result * +profit_time

  for(let index = 0 ; index < profit_time; index++){
      data.push({x: index+1, y: Math.round(+result)})
  }
  console.log('dari rumus',data)
  const hasil = 0
  return {pendapatan_dlm_tahun : result_per_profit_per_tahun, diagram: data}
}
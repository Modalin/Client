export default function name(profit_time,persentase,min_investasi) {
  const dlm_satu_keuntungan = []
  const persentase_keuntungan_ = persentase * profit_time
  const pendapatan_ = persentase_keuntungan_ * min_investasi
  const per_tahun = Math.round(12/profit_time)
  const hasil_float = Number.parseFloat(pendapatan_).toFixed(2)
  for(let index = 0 ; index < per_tahun; index++){
      dlm_satu_keuntungan.push({x: index+1, y: +hasil_float})
  }
  const hasil = pendapatan_ * per_tahun + min_investasi
  return {pendapatan_dlm_tahun : hasil, diagram: dlm_satu_keuntungan}
}
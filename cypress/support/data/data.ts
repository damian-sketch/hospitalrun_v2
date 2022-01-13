import moment from 'moment'

// generate a random number between a provided range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const username = 'hr.doctor@hospitalrun.io'
const password = 'HRt3st12'
const patient = 'Test Patient - P00201'
const medicine = 'Pramoxine - m00005'
const prescription = 'Testing prescription'
const date = moment().subtract(1, 'days').format('L')
const quantity = getRandomInt(1, 5)
const refills = getRandomInt(5, 10)

export {
  username,
  password,
  patient,
  medicine,
  prescription,
  date,
  quantity,
  refills,
}

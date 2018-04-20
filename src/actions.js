export const changeCoords = (latitude, longitude) => ({
  type: 'CHANGE_COORDS',
  latitude,
  longitude,
});

export const changeAddress = (address) => ({
  type: 'CHANGE_ADDRESS',
  address,
})

export const changeDate = (date) => ({
  type: 'CHANGE_DATE',
  date
});
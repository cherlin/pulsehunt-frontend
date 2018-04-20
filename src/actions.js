export const changeCoords = (latitude, longitude) => ({
  type: 'CHANGE_COORDS',
  latitude,
  longitude,
});
export const episodesFetchSuccess = (episodes) => ({
  type: 'EPISODES_FETCH_SUCCESS',
  episodes
});

export const changeAddress = (address) => ({
  type: 'CHANGE_ADDRESS',
  address,
})

export const changeDateInterval = (start, end) => ({
  type: 'CHANGE_DATE_INTERVAL',
  start,
  end,
});
export const changeCoords = (latitude, longitude) => ({
  type: 'CHANGE_COORDS',
  latitude,
  longitude,
});

export const episodesFetchSuccess = (episodes) => ({
  type: 'EPISODES_FETCH_SUCCESS',
  episodes,
});

export const changeAddress = (address) => ({
  type: 'CHANGE_ADDRESS',
  address,
})

export const changeDateTimeInterval = (start, end) => ({
  type: 'CHANGE_DATETIME_INTERVAL',
  start,
  end,
});
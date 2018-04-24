export const changeCoords = (latitude, longitude) => ({
  type: 'CHANGE_COORDS',
  latitude,
  longitude,
});

export const episodesFetchSuccess = (episodes) => ({
  type: 'EPISODES_FETCH_SUCCESS',
  episodes,
});

export const episodeFetchSuccess = (episode) => ({
  type: 'EPISODE_FETCH_SUCCESS',
  episode,
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

export const uploadedPhotoSuccess = (photos) => ({
  type: 'UPLOADED_PHOTO_SUCCESS',
  photos
});

export const pickEpisodePhoto = (photoId) => ({
  type: 'PICK_EPISODE_PHOTO',
  photoId
});

export const setLoggedInTrainer = (trainer) => ({
  type: 'SET_LOGGED_IN_TRAINER',
  trainer,
});

export const createEpisodeSuccess = (episodeId) => ({
  type: 'CREATE_EPISODE_SUCCESS',
  episodeId
});

export const createNewEpisode = () => ({
  type: 'CREATE_NEW_EPISODE',
});



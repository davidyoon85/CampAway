export const fetchAllSpots = () => (
  $.ajax({
    method: 'GET',
    url: '/api/spots',
  })
);

export const fetchSingleSpot = (id) => (
    $.ajax({
      method: 'GET',
      url: `/api/spots/${id}`,
    })
);

export const hostSpot = (spot) => (
  $.ajax({
    method: 'POST',
    url: 'api/spots',
    data: { spot }
  })
);

export const deleteSpot = (spotId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/spots/${spotId}`
  })
);
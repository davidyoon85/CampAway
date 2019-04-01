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
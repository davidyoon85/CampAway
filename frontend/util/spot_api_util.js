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

export const hostSpot = (formData) => {
        return(

  $.ajax({
    url: '/api/spots',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  })
        );
};

export const deleteSpot = (spotId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/spots/${spotId}`
  })
);

export const fetchSearchListings = searchParams => (
  $.ajax({
    method: "GET",
    url: "api/listings",
    data: { searchParams }
  })
);
export const applyFilters = (filters, spots) => {
  let filteredSpots = spots.filter(spot => {
    if (filters["campfire"] && !spot.campfire) return;
    if (filters["pets_allow"] && !spot.pets_allow) return;
    if (filters["tent"] && !spot.tent) return;
    if (filters["parking"] && !spot.parking) return;
    if (filters["toilet"] && !spot.toilet) return;
    if (filters["shower"] && !spot.shower) return;
    if (filters["hiking"] && !spot.hiking) return;
    if (filters["biking"] && !spot.biking) return;
    if (filters["paddling"] && !spot.paddling) return;
    if (filters.pricing < spot.price) return;
    if (filters.group_size > spot.group_size) return;

    return spots;
  });

  return filteredSpots;
};

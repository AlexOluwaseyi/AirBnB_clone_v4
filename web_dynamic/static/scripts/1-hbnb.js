$(document).ready(function () {
  const selectedAmenities = {};

  $('.checkbox').on('click', function () {
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');

    if (Object.prototype.hasOwnProperty.call(selectedAmenities, amenityId)) {
      delete selectedAmenities[amenityId];
    } else {
      selectedAmenities[amenityId] = amenityName;
    }

    $('.amenities h4').text(Object.values(selectedAmenities).join(', '));
  });
});

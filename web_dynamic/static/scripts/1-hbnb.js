$(document).ready(function() {
  let selectedAmenities = {};

  $('.checkbox').on('click', function() {
    let amenityId = $(this).data('id');
    let amenityName = $(this).data('name');

    selectedAmenities[amenityId] = amenityName;

    $('.amenities h4').text(Object.values(selectedAmenities).join(', '));
  });
});

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

    // getting the status of API

    $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
	    if (data.status === "OK") {
		    $("div#api_status").addClass("available");
	    } else {
		    $("div#api_status").removeClass("available");
	    }
    });
});

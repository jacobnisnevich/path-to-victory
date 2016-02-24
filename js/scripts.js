$(document).ready(function() {
	$(document).on("scroll", function() {
		if ($(document).scrollTop() > 15) {
			$("#header").addClass("shrink");
			$("#body").addClass("shrink");
		} else {
			$("#header").removeClass("shrink");
			$("#body").removeClass("shrink");
		}
	});
});
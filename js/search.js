$(function(){
	$("#searchbox").keyup(function(){
		
			var current_search_words = $("#searchbox").val().toLowerCase();
			if (current_search_words !== "") {
		$("#gallery li a").hide();
		
		$("#gallery li a").each(function(){
			
			var current_keyword = $(this).attr("data-title").toLowerCase();
			
			if (current_keyword.indexOf(current_search_words) >= 0) {
				$(this).show();
			}
		});
		} else {
			$("#gallery li a").show();
		}
	}); 
});
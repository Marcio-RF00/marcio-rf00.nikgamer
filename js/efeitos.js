$(document).ready(function(){

	$("#title-sec").on("mouseover",function(){
		
		$("#imagem").addClass("efeito");

	}).on("mouseout", function(){

		$("#imagem").removeClass("efeito");

	});
});
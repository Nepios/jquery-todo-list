$(document).ready(function (){
	$('button').on('click', function(e){
		e.preventDefault();
		$('ul').append('<li>'+ $('#input').val()+ '<span> x</span' + '</li>');

		function appendToStorage(name, data){
			var old = localStorage.getItem(name);
			if (old === null){
				old = '';
			}
			localStorage.setItem(name, old + data);
		};
		appendToStorage('list', $('#input').val(''));
		console.log(localStorage.getItem('list'));
		$('#input').val('');
		});
	
	$('ul').on('click', 'li span', function(){
		$(this).parent().remove();
	});
  $(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  });
  });
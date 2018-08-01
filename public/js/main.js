<<<<<<< HEAD
$(document).ready(function(){
  $('.delete-article').on('click', function(e){
    $target = $(e.target);
    const id = $target.attr('data-id');
    $.ajax({
      type:'DELETE',
      url: '/articles/'+id,
      success: function(response){
        alert('Deleting Article');
        window.location.href='/';
      },
      error: function(err){
        console.log(err);
      }
    });
  });
});
=======
$(document).ready(function() {
    $('.delete-article').on('click', function(e) {
        $target = $(e.target);
        const id = $target.attr('data-id');
        $.ajax({
            type: 'DELETE',
            url: '/articles/' + id,
            success: function (response) {
                alert('Deleting Article');
                window.location.href = '/';
            },
            error: function (err) {
                console.log(err);
            }
        });
    });
});
>>>>>>> 0f49b6b741d7ccdaba3978328fe07a9401b1b6cd

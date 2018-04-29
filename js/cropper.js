var canvas  = $("#canvas"),
        context = canvas.get(0).getContext("2d"),
        $result = $('#result');
        $picture = $('#picture');
    
    $('#fileInput').on( 'change', function(){
      $(".modal").addClass("is-active");
        if (this.files && this.files[0]) {
          if ( this.files[0].type.match(/^image\//) ) {
            var reader = new FileReader();
            reader.onload = function(evt) {
               var img = new Image();
               img.onload = function() {
                 context.canvas.height = img.height;
                 context.canvas.width  = img.width;
                 context.drawImage(img, 0, 0);
                 var cropper = canvas.cropper({
                   aspectRatio: 1 / 1
                  //  aspectRatio: 16 / 9
                 });
                 $('#btnCrop').click(function() {
                    // Get a string base 64 data url
                    var croppedImageDataURL = canvas.cropper('getCroppedCanvas').toDataURL("image/png");
                    $picture.html(`<img src="${croppedImageDataURL}" />`)
                    $('.bg-image').remove()
                    // $result.html($('<img>').attr('src', croppedImageDataURL))
                    // $result.append( $('<img>').attr('src', croppedImageDataURL) );
    
                    $(".modal").removeClass("is-active");                    
                 });
                //  $('#btnRestore').click(function() {
                //    canvas.cropper('reset');
                //    $result.empty();
                //  });
               };
               img.src = evt.target.result;
            };
            reader.readAsDataURL(this.files[0]);
          }
          else {
            alert("Invalid file type! Please select an image file.");
          }
        }
        else {
          alert('No file(s) selected.');
        }
    });
    
    $(".modal-close").click(function() {
       $(".modal").removeClass("is-active");
    });
var cropper;
    function updatePreview() {
        var imageUrl = document.getElementById('imageUrl').value.trim();
        var imageInput = document.getElementById('imageInput');
        var previewImage = document.getElementById('previewImage');
        var croppedImage = document.getElementById('croppedImage');
         // Get cropped image element
        if (imageInput.files && imageInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                previewImage.src = e.target.result;
                initializeCropper(previewImage, croppedImage); // Pass croppedImage element
            }
            reader.readAsDataURL(imageInput.files[0]);
        } else if (imageUrl !== "") {
            previewImage.src = imageUrl;
            initializeCropper(previewImage, croppedImage); // Pass croppedImage element
        }
    }
    function initializeCropper(image, croppedImage) {
        if (cropper) {
            cropper.destroy();
        }
        cropper = new Cropper(image, {
            aspectRatio: NaN,
            cropBoxResizable: true,
            cropBoxMovable: true,
            ready: function() {
                cropper.setCropBoxData({
                    width: 200,
                    height: 300,
                });
            },
            crop: function(event) {
                var canvas = cropper.getCroppedCanvas(); // Get cropped canvas
                croppedImage.src = canvas.toDataURL(); // Set cropped image src
            }
        });
    }
    function rotateLeft() {
        cropper.rotate(-90);
    }
    function rotateRight() {
        cropper.rotate(90);
    }
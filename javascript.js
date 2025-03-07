function generateQRCode() {
    var selectElement = document.getElementById("durationSelect"); // Get session dropdown element
    var selectedOption = selectElement.options[selectElement.selectedIndex].text;  
    var mankibat = document.getElementById('codingaagya');
    var sessionDropdown = document.getElementById('session'); // Get session dropdown element
    var addresscallkrrhehai = document.getElementById('addresschangehorhahai'); //yaha adress change ho rha hai/.
    
    
    
        var msNoInput = document.getElementById('msNoInput').value; // Get input text for MS number
        var rollNoInput = document.getElementById('rollinput').value; // Get input text for roll number
        var nameInput = document.getElementById('nameInput').value; // Get input text for name
        var fatherName = document.getElementById('fatherNameInput').value; // Get input text for father's name
        var dobInput = document.getElementById('dobInput').value; // Get input text for date of birth
        var examSelect = document.getElementById("examHeldOn"); // Get selected value for exam held on
        var displayText = document.getElementById("examDisplay");
        var select = document.getElementById('selectcode');
        var courseName = document.getElementById('courseName');
        courseName.textContent = select.options[select.selectedIndex].value;
        var selectedCourse = select.value;
    
                if (selectedCourse === 'ADVANCE DIPLOMA IN COMPUTER APPLICATION') {
                    durationSelect.value = 'TWELVE';
                } else if (selectedCourse === 'DIPLOMA IN COMPUTER APPLICATION') {
                    durationSelect.value = 'SIX';
                } else if (selectedCourse === 'TALLY PRIME4.1') {
                    durationSelect.value = 'THREE';
                } else {
                    durationSelect.value = '';
                }
                
        
        // Update selected exam text
        displayText.innerHTML = examSelect.options[examSelect.selectedIndex].text;
        // Set font style for examDisplay
        var fontStyles = "font-family: 'Times New Roman', Times, serif; font-size: 16px; font-weight: bold; text-transform: uppercase;"; // Modify as needed
        displayText.setAttribute('style', fontStyles);
    
        // Update text in the second preview for MS number, name, father's name, roll number, and date of birth
        document.querySelector('.ele > span').innerText = msNoInput;
        document.querySelector('.normal-font.ml-2.border-b.flex.justify-center.items-center.font-bold.uppercase.border-black.border-dotted').innerText = rollNoInput;
        document.querySelector('.normal-font.ml-2.mr-2.flex.font-normal.justify-center.uppercase.items-center.border-b.border-black.border-dotted').innerText = nameInput;
        document.getElementById('fatherName').querySelector('span').innerText = fatherName; // Update father's name
        document.querySelector('.ml-2.text-lg.f-font.border-b.border-black.border-dotted').innerText = dobInput;
        document.getElementById("selectedDuration").innerHTML = selectedOption;
    
        // Set font style for father's name and selected duration
        var commonFontStyles = "font-family: 'Times New Roman', Times, serif; font-size: 16px; font-weight: bold; text-transform: uppercase;";
        document.getElementById('fatherName').setAttribute('style', commonFontStyles);
        document.getElementById('selectedDuration').setAttribute('style', commonFontStyles);
    
        // Automatically update session based on the selected exam held on date
        if (examSelect.value === 'July 2022') {
            sessionDropdown.value = '12-07-2022';
            mankibat.innerText = '12-07-2022';
        } else if (examSelect.value === 'February 2023') {
            sessionDropdown.value = '21-02-2023';
            mankibat.innerText = '21-02-2023';
        
        }else if (examSelect.value === 'July 2023') {
            sessionDropdown.value = '18-07-2023';
            mankibat.innerText = '18-07-2023';
        
        }
        if (examSelect.value === "July 2023"){
            addresschangehorhahai.innerText = "G.C.S.M. Near BOI Khanwan, Narhat, Nawada-805122";
        } else if (examSelect.value === "July 2022") {
            addresschangehorhahai.innerText = "G.T.C., Prof. Colony, Sahganj, Patna-06";
        }
        else if (examSelect.value === "February 2023") {
            addresschangehorhahai.innerText = "G.T.C., Prof. Colony, Sahganj, Patna-06";
        }
    }
    
    // Attach event listeners to input fields and select elements to generate QR code dynamically
    document.querySelectorAll('input, select').forEach(item => {
        item.addEventListener('input', generateQRCode);
    });
    
    // Form submission event handler
    document.getElementById('textInputForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        generateQRCode(); // Update QR code after form submission
    });
    
    
// ye code hai croper ka 
var cropper;
function updatePreview() {
    var imageUrl = document.getElementById('imageUrl').value.trim();
    var imageInput = document.getElementById('imageInput');
    var previewImage = document.getElementById('previewImage');
    var croppedImage = document.getElementById('croppedImage');

    if (imageInput.files && imageInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            initializeCropper(previewImage, croppedImage);
        }
        reader.readAsDataURL(imageInput.files[0]);
    } else if (imageUrl !== "") {
        previewImage.src = imageUrl;
        initializeCropper(previewImage, croppedImage);
    } else {
        // Clear the cropped image if no new image is selected
        croppedImage.src = "";
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
            var canvas = cropper.getCroppedCanvas();
            if (canvas) {
                croppedImage.src = canvas.toDataURL();
            }
        }
    });
}

function rotateLeft() {
    if (cropper) {
        cropper.rotate(-90);
    }
}

function rotateRight() {
    if (cropper) {
        cropper.rotate(90);
    }
}
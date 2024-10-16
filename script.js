document.getElementById("uploadForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Get form values
  const username = document.getElementById("username").value;
  const nim = document.getElementById("nim").value;
  const kom = document.getElementById("kom").value;
  const photo = document.getElementById("photo").files[0];

  // Show alert that form is successfully submitted
  alert("Form berhasil disubmit!");

  // Display the result section
  document.getElementById("result").style.display = "block";

  // Set the form values to the result section
  document.getElementById("resultUsername").textContent = username;
  document.getElementById("resultNim").textContent = nim;
  document.getElementById("resultKom").textContent = kom;

  // Display the uploaded image
  const reader = new FileReader();
  reader.onload = function (e) {
    document.getElementById("preview").src = e.target.result;
  };
  reader.readAsDataURL(photo);
});

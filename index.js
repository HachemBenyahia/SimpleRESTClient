document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector("#formData").style.display = "none";

    document.querySelector("form button[name='formData']").addEventListener("click", function() {
        let formData = document.querySelector("#formData");

        if (formData.style.display !== "") {
            formData.style.display = "";
        }
        else {
            formData.style.display = "none";
        }
    });

    document.querySelector("#dataJSON textarea").value = JSON.stringify({
        "firstName": "Lucien",
        "lastName": "Dupont",
        "birthDate": "10-23-1990 00:00:01"});

    let method = document.querySelector("form select[name='method']");
    let endpoint = document.querySelector("form input[name='endpoint']");
    let status = document.querySelector("form #status > span");
    let response = document.querySelector("#form #response pre");

    endpoint.value = "http://127.0.0.1:8000/users";

    document.querySelector("form button[name='send']").addEventListener("click", function() {
        let colors = {
            "200": "#a9e37c",
            "404": "#e38687",
            "400": "#ff7233",
            "201": "#e3c6ff",
        };

        let ajax = new XMLHttpRequest();

        ajax.open(method.value, endpoint.value, true);

        ajax.onreadystatechange = function () {
            if (this.readyState == 4) {// && this.status == 200) {
                if ((this.status === "") || (this.statusText === "")) {
                    response.innerHTML = "ERROR: server is not responding. Are you sure the server is running?";
                    throw new Error("net::ERR_CONNECTION_REFUSED");
                }

                console.log(this);

                // console.log(this.responseText);
                response.innerHTML = JSON.stringify(JSON.parse(this.responseText), null, 4);
                status.innerHTML = this.status + " " + this.statusText;
                status.parentNode.style.backgroundColor = colors[this.status];
                // console.log(this.status);
            }
        }

        let data = document.querySelector("#dataJSON textarea").value;
        ajax.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        ajax.send(data);
        // The mistake was stringify, the " character at the beginning... it was that. Just send the JSON object as it is.
        // ajax.send(JSON.stringify(data));
        // console.log(JSON.stringify(data));
        document.querySelector("#log").innerHTML =
            "Sending the JSON data to <b>" + endpoint.value + "</b> as a <b>" + method.value + "</b> request.";


        console.log(document.querySelector("#dataJSON textarea").value);
    });

    // https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/
    document.querySelector("#dataJSON textarea").addEventListener("keydown", function (event) {
      // if (event.key !== undefined) {
      //   // Handle the event with KeyboardEvent.key
      // } else if (event.which !== undefined) {
      //   // Handle the event with KeyboardEvent.which
      // }

      if (event.key === "Tab") {
          event.preventDefault();
          // this.value += "    ";
          // this.selectionStart += "    ";
          insertText(this, "    ");
      }

      // console.log(event.key);
      // console.log(event.which);
    });


    // https://phuoc.ng/collection/html-dom/insert-text-into-a-text-area-at-the-current-position/
    function insertText(textarea, text) {
        // Get the current cursor position
        const position = textarea.selectionStart;

        // Get the text before and after the cursor position
        const before = textarea.value.substring(0, position);
        const after = textarea.value.substring(position, textarea.value.length);

        // Insert the new text at the cursor position
        textarea.value = before + text + after;

        // Set the cursor position to after the newly inserted text
        textarea.selectionStart = textarea.selectionEnd = position + text.length;
    };
});

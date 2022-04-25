const form = document.querySelector("form");
        form.addEventListener("submit", (event) => {
        // prevent the form submit from refreshing the page
        event.preventDefault();

        const { name, email, phone, subject, message } = event.target;

            // Use your API endpoint URL you copied from the previous step
        const endpoint =
            "https://cgteifdep7.execute-api.us-west-1.amazonaws.com/ElCompaGrill-Stag/ElCompaGrill-Form-Lambda";
        // We use JSON.stringify here so the data can be sent as a string via HTTP
            const body = JSON.stringify({
            senderName: name.value,
            senderEmail: email.value,
            senderPhone: phone.value,
            senderSubject: subject.value,
            message: message.value
        });
        const requestOptions = {
            method: "POST",
            body
        };

        fetch(endpoint, requestOptions)
            .then((response) => {
            if (!response.ok) throw new Error("Error in fetch");
            return response.json();
            })
            .then((response) => {
            document.getElementById("result-text").innerText =
                "Email sent successfully!";
            })
            .catch((error) => {
            document.getElementById("result-text").innerText =
                "An unkown error occured.";
            });
        });
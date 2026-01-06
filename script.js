document.getElementById("feedbackForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var rating = document.getElementById("rating").value;
    var comment = document.getElementById("comment").value;

    var data = {
        name: name,
        rating: rating,
        comment: comment
    };

    fetch("https://qiag8c1sc9.execute-api.ap-southeast-2.amazonaws.com/prod/feedback", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (result) {
        alert("Feedback submitted successfully!");
        document.getElementById("feedbackForm").reset();
        console.log(result);
    })
    .catch(function (error) {
        console.error(error);
        alert("Error submitting feedback");
    });
});

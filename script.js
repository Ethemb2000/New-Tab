// Update Time and Date
function updateTime() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const day = now.getDate();
    const month = now.getMonth() + 1; // Months are zero-indexed
    const year = now.getFullYear();

    // Format time
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    // Format date
    const dateString = `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;

    timeElement.innerText = `${hours}:${minutes}:${seconds}`;
    dateElement.innerText = dateString;
}

// Set interval to update time every second
setInterval(updateTime, 1);

// Search functionality
document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('search').value;
    if (query) {
        window.location.href = `https://www.google.com/search?q=${query}`;
    }
});

document.getElementById('search').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const query = e.target.value;
        if (query) {
            window.location.href = `https://${query}/`;
        }
    }
});

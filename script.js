document.getElementById('shorten-btn').addEventListener('click', () => {
    const url = document.getElementById('url-input').value.trim();
    if (!isValidURL(url)) {
        alert('Please enter a valid URL!');
        return;
    }

    fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`)
        .then(response => response.text())
        .then(shortUrl => {
            document.getElementById('short-url').textContent = shortUrl;
            navigator.clipboard.writeText(shortUrl);
            alert("Shortened URL copied to clipboard!");
        })
        .catch(() => alert("Error: Unable to shorten URL."));
});

function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

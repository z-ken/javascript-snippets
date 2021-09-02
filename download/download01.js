// Download from url
function download(url, filename) {
  if (!filename) {
    filename = url.slice(url.lastIndexOf("/") + 1);
  }

  let anchor = document.createElement("a");
  anchor.download = filename;
  anchor.style.display = "none";
  anchor.href = url;

  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

// Usage:
// download("http://127.0.0.1/path/abc.zip");

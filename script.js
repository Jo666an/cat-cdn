function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        button.textContent = "Скопировано!";
        setTimeout(() => {
            button.textContent = "Скопировать";
        }, 2000);
    });
}
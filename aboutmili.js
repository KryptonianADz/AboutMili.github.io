function showTopic(topicNumber) {
    const paragraph = document.getElementById(`topic${topicNumber}p`);
    if (paragraph.style.display === "none" || paragraph.style.display === "") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}

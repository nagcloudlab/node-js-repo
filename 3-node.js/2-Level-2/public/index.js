console.log("-index.js-")

const topicsBtn = document.getElementById('topics-btn')
const topicsEle = document.getElementById('topics');

topicsBtn.addEventListener('click', async e => {
    let response = await fetch("topics")
    let topics = await response.json()
    let topicLiEles = topics.map(topic => {
        return `
            <li class="list-group-item">
                ${topic}
            </li>
        `
    })
    topicsEle.innerHTML = topicLiEles.join("")
})
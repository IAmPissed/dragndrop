
const filled = document.querySelector('[data-filled]')
const emptyBoxes = document.querySelectorAll('[data-empty-box]')



filled.addEventListener('dragstart', dragStart);
filled.addEventListener('dragend', dragEnd);

function dragStart() {
    this.classList.add('start')
    setTimeout(() => this.classList.add('disappear'), 0
    )
}
function dragEnd() {
    this.classList.remove('start', 'disappear')
}

emptyBoxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragleave', dragLeave)
    box.addEventListener('dragover', dragOver)
    box.addEventListener('drop', drop)
})

function dragEnter() {
    this.classList.add('hovered')
}
function dragLeave() {
    this.classList.remove('hovered')
}
function dragOver(e) {
    e.preventDefault()
}
function drop() {
    this.classList.remove('hovered')
    this.append(filled)
}
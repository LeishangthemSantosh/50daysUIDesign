// import './style.css'

export const progressBar = () => {
    document.querySelector('#app').innerHTML = `
        <div class="container">
            <div class="progress-container">
                <div class="progress" id="progress"></div>
                <div class="circle active">1</div>
                <div class="circle">2</div>
                <div class="circle">3</div>
                <div class="circle">4</div>
            </div>
            <button class="btn" id="prev" disabled>Prev</button>
            <button class="btn" id="next">Next</button>
                
        </div>
    `
}

export const progressHandler = () => {
    const progress = document.getElementById('progress');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const circles = document.querySelectorAll('.circle');

    let currentActive = 1;
    next.addEventListener('click', () => {
        currentActive++;
        
        if(currentActive > circles.length) {
            currentActive = circles.length
        }
        update()
    })


    prev.addEventListener('click', () => {
        currentActive--;
        
        if(currentActive < 1) {
            currentActive = 1
        }
        
        update()
    })

    function update() {
        circles.forEach((circle, idx) => {
            if(idx < currentActive) {
                circle.classList.add('active')
            } else {
                circle.classList.remove('active')
            }
        })
        
        const actives = document.querySelectorAll('.active')
        
        progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

        if (currentActive === 1) {
            prev.disabled = true
        } else if(currentActive === circles.length) {
            next.disabled = true
        } else {
            prev.disabled = false
            next.disabled = false
        }
    }
}
// import './style.css';
import imageone from '../asset/images/one/day_one_one.jpg';
import imagetwo from '../asset/images/one/day_one_two.jpg';
import imagethree from '../asset/images/one/day_one_three.jpg';
import imagefour from '../asset/images/one/day_one_four.jpg';
import imagefive from '../asset/images/one/day_one_five.jpg'

export const expandingCard = () => {
    document.querySelector('#app').innerHTML = `
    <div class="container" id="project-one">
        <div class="panel active" style="background-image: url('${imageone}')">
            <h3>Expanding Card 1</h3>
        </div>
        <div class="panel" style="background-image: url('${imagetwo}');">
            <h3>Expanding Card 1</h3>
        </div>
        <div class="panel" style="background-image: url('${imagethree}');">
            <h3>Expanding Card 1</h3>
        </div>
        <div class="panel" style="background-image: url('${imagefour}');">
            <h3>Expanding Card 1</h3>
        </div>
        <div class="panel" style="background-image: url('${imagefive}');">
            <h3>Expanding Card 1</h3>
        </div>
    </div>
    `
}

export const expandHandler = () => {
    const panels = document.querySelectorAll('.panel');

    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            removeActiveClasses()
            panel.classList.add('active')
        });
    });
    
    const removeActiveClasses = () => {
        panels.forEach(panel => {
            panel.classList.remove('active')
        });
    };
}
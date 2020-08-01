import React from 'react';

const randomProgress = (id) => {
    const randomize = () => {
        let rand = 0 - 0.5 + Math.random() * (101);
        return Math.round(rand);
    };
    let percents = randomize();
    let progress = document.getElementById(id);
    console.log(progress);
    progress.style.background = !percents ? "transparent" : "rgb(" + Math.round(255 * (100 - percents) / 100) + ", " + Math.round(255 * (percents) / 100) + ", 0)";
    progress.style.height = 110 + percents + "px";
    let percents_view = document.getElementById(id + '_percents');
    percents_view.innerText = percents + "%";
};

const ProgressBar = ({id}) => {
    return (
        <div className="circle-out">
            <div className="progress" id={id}/>
            <div
                className="circle-in"
                onMouseOver={() => randomProgress(id)}>
                <p id={id + "_percents"}>0%</p>
            </div>
        </div>
    );
};


export {ProgressBar}
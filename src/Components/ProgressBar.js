import React from 'react';

const randomProgress = (id) => {
    const randomize = () => {
        let rand = 0 - 0.5 + Math.random() * (101);
        return Math.round(rand);
    };
    //(0,112,60) 0%, rgb(125,194,68)
    let percents = randomize();
    let progress = document.getElementById(id);
    console.log(progress);
    progress.style.background = !percents ? "transparent" : "rgb(" + (125 - Math.round(125 * percents / 100)) +", " + (194 - Math.round(82 * percents / 100)) + "," + (68 - Math.round(8 * percents / 100)) + ")";
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
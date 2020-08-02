import React, {useState} from 'react';

const randomProgress = (id) => {
    const randomize = () => {
        let rand = 0 - 0.5 + Math.random() * (101);
        return Math.round(rand);
    };
    //(0,112,60) 0%, rgb(125,194,68)
    let percents = randomize();
    let progress = document.getElementById(id);
    progress.style.background = !percents ? "transparent" : "rgb(" + (125 - Math.round(125 * percents / 100)) +", " + (194 - Math.round(82 * percents / 100)) + "," + (68 - Math.round(8 * percents / 100)) + ")";
    progress.style.height = 110 + percents + "px";
    let percents_view = document.getElementById(id + '_percents');
    percents_view.innerText = percents + "%";
};

const notRandomProgress = (id, percents) => {
    percents = percents > 100 ? 100 : percents;
    let progress = document.getElementById(id);
    progress.style.background = !percents ? "transparent" : "rgb(" + (125 - Math.round(125 * percents / 100)) +", " + (194 - Math.round(82 * percents / 100)) + "," + (68 - Math.round(8 * percents / 100)) + ")";
    progress.style.height = 110 + percents + "px";
    let percents_view = document.getElementById(id + '_percents');
    percents_view.innerText = percents + "%";
};

const ProgressBar = ({id, percents = -1, setTree}) => {

    const [percent, setPercent] = useState(percents);

    const handleClick = () => {
        if (percent === 0) {
            setTree(0);
            setPercent(percent + 15);
            return ;
        }
        if (percent === 15) {
            setPercent(percent + 25);
            setTree(1);
            return ;
        }
        if (percent === 40) {
            setPercent(percent + 25);
            setTree(2);
            return ;
        }
        if (percent === 65) {
            setPercent(percent + 15);
            setTree(3);
            return ;
        }
        if (percent === 80) {
            setPercent(percent + 10);
            setTree(4);
            return ;
        }
        if (percent === 90) {
            setPercent(percent + 10);
            setTree(5);
            return ;
        }
        if (percent === 100) {
            setPercent(101);
            setTree(6);
            return ;
        }
        if (percent === 101) {
            setPercent(102);
            setTree(7);
            return;
        }
        if (percent === 102) {
            setPercent(103);
            setTree(8);
            return;
        }
        if (percent === 103) {
            setPercent(104);
            setTree(9);
            return;
        }
        if (percent === 104) {
            setPercent(0);
            setTree(10);
            return;
        }
    }


    return (
        <div className="circle-out">
            <div className="progress" id={id}/>
            {setTree ?  <div
                className="circle-in"
                onClick={() => {
                        notRandomProgress(id, percent);
                        handleClick();
                }}>
                <p id={id + "_percents"}>0%</p>
            </div> :
                <div
                    className="circle-in"
                    onMouseOver={() => randomProgress(id)}>
                    <p id={id + "_percents"}>0%</p>
                </div> }

        </div>
    );
};


export {ProgressBar}
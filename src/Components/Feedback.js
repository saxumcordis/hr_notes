import React, {useState} from 'react';
import {ProgressBar} from "./ProgressBar";
import {Link} from "react-router-dom";

const activeTool = {
    'border-bottom': "3px solid rgba(214,224,62, 0.9)"
}

const Feedback = () => {
    const note =  {
        id: 1,
        header: "DO MVP BETTER",
        deadline: "02.08.20",
    };

    const content = [[<ul>
        <li>Quality of product: 4/4</li>
        <li>Technical side: 4/4</li>
        <li>Usability of product: 4/4</li>
    </ul>,
        <ul>
            <li>It has the big future</li>
            <li>Great idea. Do it!</li>
            <li>Good.</li>
        </ul>, <img style={{width: "400px"}}src="https://sun1-91.userapi.com/W8Rn-_Ki3VRwDIOu8jCqBPoKCJSOOC6dhkNU-g/ycUhw4VNQQ0.jpg"/>],
        [<ul>
        <li>Quality of product: 3/4</li>
        <li>Technical side: 3/4</li>
        <li>Usability of product: 4/4</li>
    </ul>,
        <ul>
            <li>Good idea, but mvp could be better</li>
            <li>Not bad. Try it harder</li>
            <li>Well done. I have some marks</li>
        </ul>, <img style={{width: "400px"}}src="https://sun1-91.userapi.com/W8Rn-_Ki3VRwDIOu8jCqBPoKCJSOOC6dhkNU-g/ycUhw4VNQQ0.jpg"/>],
        [<ul>
            <li>Quality of product: 1/4</li>
            <li>Technical side: 2/4</li>
            <li>Usability of product: 4/4</li>
        </ul>,
            <ul>
                <li>Poor stage. Make it better.</li>
                <li>I believe in you. DO IT</li>
                <li>Well done. I have some marks</li>
            </ul>, <img style={{width: "400px"}}src="https://sun1-91.userapi.com/W8Rn-_Ki3VRwDIOu8jCqBPoKCJSOOC6dhkNU-g/ycUhw4VNQQ0.jpg"/>],
        [<ul>
            <li>Quality of product: 3/4</li>
            <li>Technical side: 4/4</li>
            <li>Usability of product: 4/4</li>
        </ul>,
            <ul>
                <li>Good product</li>
                <li>I think, its quite good, but you can do better</li>
                <li>Well done. I have some marks</li>
            </ul>, <img style={{width: "400px"}}src="https://sun1-91.userapi.com/W8Rn-_Ki3VRwDIOu8jCqBPoKCJSOOC6dhkNU-g/ycUhw4VNQQ0.jpg"/>]
    ];

    const [activeContent, setContent] = useState(0);
    const handleContent = content => setContent(content);

    const [treeStage, setTreeStage] = useState(0);

    const trees = ['https://psv4.userapi.com/c856224/u89830763/docs/d4/c3359f3c8af2/tree_1.png?extra=Qc4Yuiz1rfuVcAMOE8AMEVwpSbaWCwwYbbYY6kuOHbet147ghbskpgxOtRhJvqEHq--VGhH4VSfu75LRuz4PrZfJGj5ENg7Fi68gVYsYjid5CZS478xXFjo8dXgm2Rc3p9-qEJdTRFmlJxLWweja',
        'https://psv4.userapi.com/c856224/u89830763/docs/d7/9247d7c03579/tree_2.png?extra=JqRJo0W0F4bnONITgDxMp3HoF4lxdtISNVatethaBUSPY3kqFXok8hXXYNbgRq1hpqoGjEH25yyyEJgOwdWyKv5ycXoqKUIMGqhdpdYUv1MzXLo3i8LWdwoVQ50eaaJYnZYaRYNlKcEZnW5urkCg',
    'https://psv4.userapi.com/c856224/u89830763/docs/d2/efb2c2553885/tree_3.png?extra=DgvjJIpGa1Bem5NyflaJLVXyUWH3ew--aDaGjZJdc2o0S_32anx28XZHx_TQNTcFdojsneEkCqAGUIqcoED91DfHFhe65TNTd2ZuQ0Srd7cxjC2DL5WkQWNQqg3mrV_Tmr2NgYnR_AsfBB480KHn',
        'https://psv4.userapi.com/c856224/u89830763/docs/d3/eea242e11522/tree_4.png?extra=_6_YwPAbxwy3bEqGsiQblcPewHU8bOmpyPpHz4nPQerJ9fdc1yLfmFSTydSyIOzpn7TS51FvQwxVFgNoAEBMTqnS1dyeFF4xdHKmoR7reIkZYT-0Rs-W7M8UAdNtd37KDK4E5sgZUw_WTiZe7L9k',
        'https://psv4.userapi.com/c856224/u89830763/docs/d1/4360d2af7153/tree_6.png?extra=qFNBBMthTrt27CrTkDAXdCtfqj0oLMFAjhJLXeVPjxtA6Iq5qJOUZfECDttsmtWib6zcwVotVtU6bTDBxQCB94TAxJy4N48P32Wt0r_lomQAR-DTkLbzntrb_YW3z6wQDKXs0ksRChiUY93379pc',
        'https://psv4.userapi.com/c856224/u89830763/docs/d11/675e13889e79/tree_7.png?extra=Sf2-yKijYWxHs-5nnOv2KTrMw1IZ-MHBHNZ2-3nRV0aHte4tE15d0qIHsBTUWylKbgmraA82uV5sFaU62V5VmpA1Weth2TEQsVBvhqj8OBeWBgeiJSULtDWvSc-WR2_jzQOvbNkfqeHtXmnUa7bf',
        'https://psv4.userapi.com/c856224/u89830763/docs/d17/7b6e98204c9a/tree_5.png?extra=g1Ycn9hQzOT-Ufabgn1c-VurVhNmWPE7DWGn2et3BmW7IYczXFhYNat_4c1dcm-LT-tDxZCJDIWGVVYgbdGYi5UnfIdMtiIPGf_EPhbxYyhmRGCkzdC8o0yI5N0b5SzESN0XFWwzGR8q13nA-YGQ',
        'https://psv4.userapi.com/c856336/u89830763/docs/d5/ecdb9e5056e4/feedback.png?extra=_HepH7y1Cy6JqSTXsP5qkEugFqb4aOu3oQwX6YoJElDnIrjNX60su9VT0FD60jY4HLCdr5KW15dz0vJSKqIXJbdnIrcJ0673PDa4a036ad8loo3WUAXIFozdPjbXtCArEjGQue2k9Nn3HVeQRTtG',
        'https://psv4.userapi.com/c856336/u89830763/docs/d1/5e78c17412e6/feedback1.png?extra=HmRNYI5bgOtk0io6MjVPXV4-yba9cb_oOmP8f3sMexWAeiUlFd3D7JOQ1VpABc6WpYuJDuAKqPu-MMbPC021QfJ28hSqqWYV4_UBqy8FMShmRMPL6V5oBPnwDysnC3k31D3yDmb3nzn5iIWiQrtL',
        'https://psv4.userapi.com/c856336/u89830763/docs/d8/f5d5eca6e43e/feedback3.png?extra=cLNWWSEPoGIerszwI7waAs_KW2hcDpvGdkucsXbsaR9PmYz5WkJM-Ok4h3XgUhjLEPxig50in_V_JbElEzD2NixAWYoGOcivan1LZELG4p43mDi_WzCG5wcQ5098kXej_x4aizQGNIb2zLXzMn0H',
        'https://psv4.userapi.com/c856336/u89830763/docs/d2/7fc2e96bf9b3/feedback4.png?extra=xw7yiAsLWqT9cTojZiGIV_cjB5ResHHF2cwcCvwamqZE4UniRgvtlpCDPxDrO41b0qehHiawMOeWGff7H_ZbLK102Ni_wY-YRMPODY0lRL5xhMAqXRFfcaWEiVpfcp_Q9BATOoJube-DfCe-xfEW'
    ];

    return (
        <div className="feedback_tree_box">
            <div className="feedback_tree_tools">
                <div className="tree_stage">
                <img className="tree_img" style={{marginLeft: "25px"}} src={trees[treeStage]}/>
                <div className="note_big">
                </div>
                    <ProgressBar id={note.id} percents={15} setTree={setTreeStage}/>
                    <div className="note_info">
                        <h3 className="note_header">{note.header}</h3>
                        <div className="note_service">
                            <h3 className="note_func">Progress stat</h3>
                            <h3 className="note_func">Steps</h3>
                        </div>
                        <h3 className="note_deadline">{note.deadline}</h3>
                    </div>
                </div>
                <ul className="feedback_tree_tools_menu">
                    <li onClick={() => handleContent(0)} style={activeContent === 0 ? activeTool : null}>Marks</li>
                    <li onClick={() => handleContent(1)} style={activeContent === 1 ? activeTool : null}>Comments</li>
                    <li onClick={() => handleContent(2)} style={activeContent === 2 ? activeTool : null}>Stats</li>
                </ul>
                <div className="feedback_tree_tools_content">
                    <p>{content[treeStage % 4][activeContent]}</p>
                </div>
            </div>
        </div>
    );
};

export {Feedback};
import React, {useState} from 'react';

const activeTool = {
    'border-bottom': "3px solid rgba(214,224,62, 0.9)"
}

const Feedback = () => {

    const content = [<ul>
        <li>Quality of product: 3/4</li>
        <li>Technical side: 4/4</li>
        <li>Usability of product: 4/4</li>
    </ul>,
        <ul>
            <li>Good product</li>
            <li>I think, it could be better</li>
            <li>Well done. I have some marks</li>
        </ul>, <img style={{width: "400px"}}src="https://sun1-91.userapi.com/W8Rn-_Ki3VRwDIOu8jCqBPoKCJSOOC6dhkNU-g/ycUhw4VNQQ0.jpg"/>];

    const [activeContent, setContent] = useState(0);
    const handleContent = content => setContent(content);

    return (
        <div className="feedback_tree_box">
            <div className="feedback_tree_tools">
                <img style={{marginLeft: "25px"}} src="https://sun1-99.userapi.com/aGKph1Of4NCV7LlmPKqWnOHbYzfycXj9qy3Yww/rwJ5Oqec7Cs.jpg"/>
                <ul className="feedback_tree_tools_menu">
                    <li onClick={() => handleContent(0)} style={activeContent === 0 ? activeTool : null}>Marks</li>
                    <li onClick={() => handleContent(1)} style={activeContent === 1 ? activeTool : null}>Comments</li>
                    <li onClick={() => handleContent(2)} style={activeContent === 2 ? activeTool : null}>Stats</li>
                </ul>
                <div className="feedback_tree_tools_content">
                    <p>{content[activeContent]}</p>
                </div>
            </div>
        </div>
    );
};

export {Feedback};
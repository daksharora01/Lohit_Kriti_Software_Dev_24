import React, { useEffect } from 'react'
import { DiscussionUnit } from './DiscussionUnit';

const DiscussionSection = (props) => {
    const [units,setUnits] = React.useState([]);
    console.log('DiscussionSection Rendered');
    
    useEffect(() => {
        setUnits([]);
        props.discussions.map((discussion) => {
            setUnits((units) => [...units, <DiscussionUnit discussion={discussion} key={units.length}/>]);
        });
    }, [props.discussions]);

    return (
        <div className='min-h-[60vh] md:w-[65vw] w-[85vw] sm:h-fit sm:pb-[1rem] mb-[2rem] flex flex-col gap-2'>
            {units}      
        </div>
    );
};

export { DiscussionSection };

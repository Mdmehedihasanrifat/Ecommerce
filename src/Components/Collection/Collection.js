import React from 'react';
import './collection.scss';
const Collection = ({title,items}) => {
    return (
        <div className='collection-preview'>
         <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item,idx)=>idx<4).map(item=>
                        <div key={item.id}>
                            <img src={item.imageUrl}/>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Collection;
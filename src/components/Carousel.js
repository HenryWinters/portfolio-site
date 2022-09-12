import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const CarouselItem = ({ children, width} ) => {
    return (
        <div className='carousel-item' style={{ width: width }}>
            <div>
                <h1 id='projectSectionTitle'>Projects</h1> 
                {children}
            </div> 
        </div> 
    )
}

const Carousel = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0; 
        }

        setActiveIndex(newIndex);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1), 
        onSwipedRight: () => updateIndex(activeIndex - 1)
    }); 

    return (

            <div {...handlers} className='carousel'>
                <div className='inner' style={{ transform: `translateX(-${activeIndex * 100}%)`}}> 
                    {React.Children.map(children, (child, index) => {
                        return React.cloneElement(child, { width: '100%' })
                    })}
                </div> 
                <div className='indicators'>
                    <button
                        id='left-arrow' 
                        onClick={() => {
                            updateIndex(activeIndex - 1);
                        }}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <div className='project-indicators'> 
                        {React.Children.map(children, (child, index) => {
                            return (
                                <button
                                    className={`${index === activeIndex ? 'active' : ''}`}
                                    onClick={() => {
                                        updateIndex(index);
                                    }}
                                >
                                </button>
                            );
                        })}
                    </div> 
                    <button 
                        id='right-arrow'
                        onClick={() => {
                            updateIndex(activeIndex + 1);
                        }}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
    )
}

export default Carousel 
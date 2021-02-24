import React from 'react'

function Page1() {
    return (
        <div className='container'>
            <div className="carousel">
                <div className="slider">
                   <section>
                       <div className="item item1">
                        <p>+6%</p>
                       </div>
                   </section>
                   <section>
                        <div className="item item2">
                           
                        </div>
                   </section>
                   <section>
                       <div className="item item3">
                           
                       </div>
                   </section>
                </div>
                <div className="control">
                    <span className="arrow left">
                        <i className="material-icons">
                        keyboard_arrow_left
                        </i>
                    </span>
                    <span className="arrow right">
                    <i className="material-icons">
                    keyboard_arrow_right
                    </i>
                    </span>
                    <ul>
                        <li className="selected"></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Page1

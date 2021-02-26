import React from 'react'

function Page1() {
    return (
        <div className='container'>
            <div className="carousel">
                <div className="slider">
                   <section>
                        <div>
                            <div className="item item1">
                                <h6>8.848m</h6>
                            </div>
                                <p className='opis-itema'>Mt. Everest</p>
                        </div>
                   </section>
                   <section>
                        <div>
                            <div className="item item2">
                                <h6>8.611m</h6>
                            </div>
                                <p className='opis-itema'>K2</p>
                        </div>
                   </section>
                   <section>
                        <div>
                            <div className="item item3">
                                <h6>8.536m</h6>
                            </div>
                                <p className='opis-itema'>Kanchenjunga I</p>
                        </div>
                   </section>
                   <section>
                        <div>
                            <div className="item item4">
                                <h6>8.511m</h6>
                            </div>
                                <p className='opis-itema'>Lhotse I</p>
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
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Page1

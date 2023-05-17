import React from 'react'
import "../accomodation/accomodation.css"
import SearchItem from '../searchItem/SearchItem'

// import { useAsyncError, useLocation } from 'react-router-dom'
// import { useState } from 'react'
// import { format } from "date-fns"
// import { DateRange } from "react-date-range"

export default function Accomodation() {
    // const location = useLocation();
    // const [destination, setDestionation] = useState(location.state.destination);
    // const [date, setDate] = useState(location.state.date);
    // const [openDate, setOpenDate] = useState(false);
    // const [options, setOptions] = useState(location.state.options);

    return (
        <div className='accomodation'>
            <div className="acc-container">
                <div className="acc-wrapper">
                    <div className="acc-search">
                        <h1 className="search-title">Search</h1>
                        <div className="acc-item">
                            <label>Destination</label>
                            <input type="text" />
                        </div>
                        <div className="acc-item">
                            <label>Check-in Date</label>
                            {/* <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span> */}
                            {/* {openDate && (
                                <DateRange onChange={(item) => setImmediate([item.selection])} minDate={new Date()}
                                    ranges={date} />
                            )} */}
                        </div>
                        <div className="acc-item">
                            <label>Options</label>
                            <div className="acc-options">
                                <div className="acc-option-item">
                                    <span className="acc-option-text">
                                        Min Price <small>
                                            per month
                                        </small>
                                    </span>
                                    <input type="number" className="acc-option-input" />
                                </div>
                                <div className="acc-option-item">
                                    <span className="acc-option-text">
                                        Max Price <small>
                                            per month
                                        </small>
                                    </span>
                                    <input type="number" className="acc-option-input" />
                                </div>
                                <div className="acc-option-item">
                                    <span className="acc-option-text">
                                        Adult <small>
                                            per month
                                        </small>
                                    </span>
                                    <input type="number" className="acc-option-input" />
                                </div>
                                <div className="acc-option-item">
                                    <span className="acc-option-text">
                                        Children <small>
                                            per month
                                        </small>
                                    </span>
                                    <input type="number" className="acc-option-input" />
                                </div>
                                <div className="acc-option-item">
                                    <span className="acc-option-text">
                                        Room <small>
                                            per month
                                        </small>
                                    </span>
                                    <input type="number" className="acc-option-input" />
                                </div>
                            </div>
                        </div>
                        <button className='acc-search-btn'>Search</button>
                    </div>
                    <div className="acc-result">
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

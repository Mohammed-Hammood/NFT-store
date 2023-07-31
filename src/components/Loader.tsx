"use client";
import React from 'react';
export default function Loader() {
    const array = Array.from({ length: 50 }, (e, i) => i);
    return (
        <>
            {array.map((item) => {
                return (
                    <div className="col-md-5 col-lg-3 col-sm-11 mb-4" key={item} >
                        <div className="card " style={{ minHeight: "555px" }}>
                            <div className="card-body ">
                                <div className="d-flex row gap-3 m-0">
                                    <div className="col-12 bg-light p-3 rounded" style={{ minHeight: "280px" }}></div>
                                    <div className="col-12 bg-light p-3 rounded"></div>
                                    <div className="col-12 bg-light p-3 rounded "></div>
                                </div>
                                <div className="bg-light p-4 rounded mt-5"></div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>)
}
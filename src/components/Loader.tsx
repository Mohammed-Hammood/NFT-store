"use client";
import React from 'react';
export default function Loader() {
    const array = Array.from({ length: 20 }, (e, i) => i);
    return (
        <>{array.map((item) => {
            return (
                <div className="col-md-5 col-lg-3 col-sm-11 mb-4" key={item}>
                    <div className="card ">
                        <div className="card-body ">
                            <div className="row gap-3">
                                <div className="bg-light p-3 rounded"></div>
                                <div className="bg-light p-3 rounded"></div>
                                <div className="bg-light p-3 rounded"></div>
                            </div>
                            <div className="bg-light p-4 rounded mt-2"></div>
                        </div>
                    </div>
                </div>)

        })}
        </>)
}
import React from 'react';

function Loading() {
    return (
        <div className={"fixed z-[100] top-0 w-full h-screen flex justify-center items-center bg-white"}>
            <div className="terminal-loader bg-black border border-gray-800 bg-gray-900 text-green-500 font-mono text-base p-6 w-48 mx-auto shadow-md rounded-md relative overflow-hidden box-border">
                <div className="terminal-header bg-darkGrey absolute top-0 left-0 right-0 h-6 bg-gray-800 rounded-t-md px-2 box-border">
                    <span className="terminal-title float-left leading-6 text-gray-300">Status</span>
                    <div className="terminal-controls float-right">
                        <span className="control close inline-block w-2.5 h-2.5 ml-1 bg-red-500 rounded-full"></span>
                        <span
                            className="control minimize inline-block w-2.5 h-2.5 ml-1 bg-yellow2 rounded-full"></span>
                        <span
                            className="control maximize inline-block w-2.5 h-2.5 ml-1 bg-green-500 rounded-full"></span>
                    </div>
                </div>
                <div className="text inline-block whitespace-nowrap overflow-hidden border-r-2 border-green-500 mt-6 animate-type-and-delete animate-blink-cursor">
                    Loading...
                </div>
            </div>
        </div>
    );
}

export default Loading;
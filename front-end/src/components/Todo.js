import React, { useState } from "react";
import axios from 'axios';

const TodoLayout = () => {
    const [data, setData] = useState();
    const addItem = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:5000/api/data', { text: data })
            setData("")
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="h-screen bg-black bg-opacity-30">
            <div className="flex justify-center items-center h-full">
                <div className=" bg-white w-[400px] rounded-md  ">
                    <div className="text-center p-3">
                        <h1 className="font-bold uppercase text-xl">To Do Application</h1>
                    </div>
                    <div className="p-4 flex justify-between items-center space-x-4">
                        <form className='flex text-center' onSubmit={(e) => addItem(e)}>
                            <input
                                type="text"
                                value={data}
                                onChange={e => { setData(e.target.value) }}
                                className=" mx-3
                                
        form-control
        block
        w-fullz`
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "

                                placeholder="ADD TO DO"
                            />
                            <button type="submit" class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">ADD</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TodoLayout;
import { useState } from "react";

function Home() {

    const [task, setTask] = useState('');
    const [data, setData] = useState(['Wake Up at 5am']);
    // const data=[];

    const handleChange = (e) => {
        let invalue = e.target.value;
        setTask(invalue);

        // const{name, value}=e.target;
        // setTask({
        //     ...task,
        //     [name]:value
        // })
        // data.push(task)
    }
    const handleClick = () => {
        if (task.trim() !== '') {
            setData([...data, task]);
            setTask('');
            console.log('tas added');
            console.log(data);
        }
    }
    const handleDelete = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    }
    return (
        <div className="flex flex-col">
            <h2 className="text-center text-4xl font-bold">To-Do-List</h2>
            <div className="flex justify-center mt-8">
                <input
                    onChange={handleChange}
                    type="text"
                    value={task}
                    name="text"
                    placeholder="Enter your task here ..."
                    className="flex-1 px-5 py-3 bg-gray-300  border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleClick}
                    type="button"
                    className="flex-2 px-12 py-3 ml-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm"
                >
                    Add
                </button>
            </div>
            <div className="">
                
                    <ul className="mt-4 flex justify-center flex-col">
                        {data.map((task, index) => (
                            <li key={index} className="mt-2 flex ">
                                <div className="flex-1 px-10 py-3 bg-blue-200 rounded">
                                    {task}
                                </div>
                                <button
                                    onClick={() => handleDelete(index)}
                                    type="button"
                                    className="flex-2 px-10 py-3 ml-3 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm"
                                >
                                    Delete
                                </button>

                            </li>
                        ))}
                    </ul>
               

            </div>
        </div>
    );
}

export default Home;

import { useState } from 'react';
import TimeTable from './components/TimeTable';

const App = () => {
  const [hourCount, setHourCount] = useState(8);
  const [dayCount, setDayCount] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.hourCount.value);
    console.log(e.target.dayCount.value);
    setHourCount(parseInt(e.target.hourCount.value));
    setDayCount(parseInt(e.target.dayCount.value));
  };

  return (
    <>
      <div className='container mx-auto'>
        <h1 className='text-5xl text-center my-2'>Automatic Timetable</h1>

        <form onSubmit={handleSubmit}>
          <div className="flex align-middle justify-center gap-3 m-4">
            <input
              type="number"
              name="hourCount"
              min={4}
              max={10}
              defaultValue={8}
              id="hourCount"
              className="bg-gray-50 border border-gray-600 number-gray-900 text-sm rounded-lg p-2"
              placeholder="Hours"
            />
            <input
              type="number"
              name='dayCount'
              min={3}
              max={6}
              defaultValue={5}
              id="dayCount"
              className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg p-2"
              placeholder="Days"
            />
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm text-center p-2">Submit</button>
          </div>
        </form>

        <TimeTable hourCount={hourCount} dayCount={dayCount} />
      </div>
    </>
  );
};

export default App;

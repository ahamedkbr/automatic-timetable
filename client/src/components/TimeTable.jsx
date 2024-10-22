/* eslint-disable react/prop-types */
const TimeTable = ({ hourCount = 8, dayCount = 5 }) => {
  const DAYS = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];

  return (
    <div className='w-full flex justify-center overflow-x-scroll'>
      <table className="w-full table-auto border-separate border-slate-800 border-2">
        <thead className='border-2'>
          <tr className='border-2'>
            <th className='border-2'>Day</th>
            {[...Array(hourCount).keys()].map((k) => (
              <th className='border-2' key={k}>Hour {k + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody className='border-2'>
          {[...Array(dayCount).keys()].map((d) => (
            <tr className="border-2" key={d}>
              <td className='border-2 text-center'>{DAYS[d]}</td>
              {[...Array(hourCount).keys()].map((k) => (
                <td className='border-2 text-center' key={k}>Period {k + 1}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeTable;
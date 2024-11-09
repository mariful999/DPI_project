import React from 'react';

const Partner = () => {
  return (
    <div className='bg-orange-300 h-60'>
      <div>
        <h1 className='uppercase text-center font-bold text-3xl p-5'>Global Partner</h1>
      </div>
      <div className='flex justify-center gap-4'>
        {/* Partner 1 */}
        <div className='bg-white p-4 rounded-lg shadow-md'>
          <p className='text-center font-semibold'>Smart Online</p>
        </div>
        
        {/* Partner 2 */}
        <div className='bg-white p-4 rounded-lg shadow-md'>
          <p className='text-center font-semibold'>Global IT Institute</p>
        </div>

        {/* Additional partners if needed */}
        <div className='bg-white p-4 rounded-lg shadow-md'>
          <p className='text-center font-semibold'>Fake Image Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default Partner;

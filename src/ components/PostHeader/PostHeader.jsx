export default function PostHeader() {
  return (
    <div className='flex bg-white p-8'>
      <img src="/image.png" alt="Picture" className="pt-2 pl-8 ml-32"/>
      <div className='pt-16 pl-16'>
        <div className='flex flex-wrap items-baseline mr-32'>
          <h2 className='text-8xl'>Реплики картин от&nbsp;</h2>
          <h2 className='text-8xl text-emerald-800'>Ink.House</h2>
        </div>
        <h3 className='text-2xl mt-8 max-w-3xl'>
          Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены
        </h3>
        <button
          className='mt-8 bg-white text-emerald-600 text-xl px-8 py-4 border-2 border-emerald-800 rounded-lg hover:bg-emerald-700 hover:text-white'>
          <a href="#reproductions">Репродукции</a>
        </button>
      </div>
    </div>
  );
}

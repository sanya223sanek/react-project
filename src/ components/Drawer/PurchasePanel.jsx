export default function PurchasePanel({totalPrice}) {
  const formattedPrice = totalPrice.toLocaleString('ru-RU');

  return (
    <div className='items-center space-y-5 mb-16'>
      <h2 className='text-lg'>
        Итого: {formattedPrice} руб.
      </h2>
      <button
        className='bg-white text-xl border-2 text-emerald-600 border-emerald-800 rounded-lg hover:bg-emerald-700 hover:text-white p-4'
        style={{
          width: '280px'
        }}
      >
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
          Перейти к покупке
        </a>
      </button>
    </div>
  );
}

export default function About() {
  return (
    <div id="about" className="relative">
      <img src='/public/dedAbout.jpg' alt="about" className="w-full h-auto mb-14"/>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="text-white max-w-xl">
          <h1 className="text-6xl mb-7">О Нас</h1>
          <p className="mb-4 text-xl">Добро пожаловать на наш сайт, посвященный искусству и красоте репродукций картин.
            Мы -
            команда энтузиастов и ценителей искусства, стремящихся сделать шедевры мирового искусства доступными
            каждому.</p>
          <p className='text-xl'>Мы верим, что искусство должно быть доступно каждому, и наша миссия - предоставить
            возможность каждому
            любителю искусства наслаждаться выдающимися произведениями, не покидая своего дома. Наша коллекция
            репродукций картин включает работы самых известных художников разных эпох и направлений.</p>
        </div>
      </div>
    </div>
  );
}

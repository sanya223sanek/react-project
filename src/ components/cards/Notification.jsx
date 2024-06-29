import {useEffect} from 'react';
import {Check} from 'lucide-react';

export default function Notification({message, onClose}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000); // Закрыть уведомление через 5 секунд

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className="flex gap-2 fixed top-8 right-8 bg-green-50 text-black p-4 rounded-xl shadow-lg z-50 transition duration-300">
      <p>{message}</p>
      <Check className="w-6 h-6"/>
    </div>
  );
}

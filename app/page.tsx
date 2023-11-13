import DayState from '@/components/DayState';
import Image from 'next/image'

export default function Home() {
  const habits = {
    'beber água':{
      '2023-11-13': true,
      '2023-11-12': false,
      '2023-11-11': false,
    },
    'estudar programação':{
      '2023-11-13': false,
      '2023-11-12': false,
      '2023-11-11': true,
    }
  };

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  return (
  <main className='container relative flex flex-col gap-8 px-4 pt-16'>
      {habits == null || Object.keys(habits).length == 0 && (
        <h1 className='mt-20 text-4xl font-light text-white font-display text-center'>
          Você não tem hábitos cadastrados
        </h1>
      )}
      {
        habits != null && 
        Object.entries(habits).map(([habit, habitStreak]) => (
          <div key={habit} className='flex flex-col gap-2'>
            <div className='flex justify-between itens-center'>
              <span className='text-xl font-light text-white font-sans'>{habit}</span>
              <button>
                <Image 
                src="/images/trash.svg" 
                width={20} 
                height={20} 
                alt='icone de lixeira vermelha'
                />
              </button>
            </div>
            <section className='grid grid-cols-7 bg-neutral-800 rounded-md p-2'>
              {weekDays.map((day) => (
                <div key={day} className='flex flex-col'>
                  <span  className='font-sans text-xs text-white text-center'>
                    {day}
                  </span>
                  <DayState day={false}/>
                </div>
                
              ))}
            </section>
          </div>
        ))}
    </main>
  );
}

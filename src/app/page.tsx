import Image from 'next/image';
import AirlineTicket from '../components/AirlineTicket';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-[#C05A67]">
      <AirlineTicket />
    </main>
  );
}
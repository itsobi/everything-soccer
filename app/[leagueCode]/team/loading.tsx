import { LoaderCircle } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-gray-100/50">
      <div className="flex justify-center items-center mt-24">
        <LoaderCircle size={32} color="#e52534" className="animate-spin" />
      </div>
    </div>
  );
}

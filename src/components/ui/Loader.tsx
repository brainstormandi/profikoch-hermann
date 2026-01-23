import { Loader2 } from 'lucide-react';

export const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary text-background-cream">
            <Loader2 className="w-12 h-12 animate-spin text-primary-red mb-4" />
            <p className="font-serif text-xl animate-pulse">Küchenmanagement wird geladen...</p>
        </div>
    );
};

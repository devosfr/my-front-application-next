import { Technology } from '@/types/technology';
import Image from 'next/image';

export interface TechnologiesProps {
    value: Technology[];
}

export default function Technologies(props: TechnologiesProps) {
    
    return props.value ? (
        <div className='flex justify-center gap-4 flex-wrap w-4/5'>
            {props.value.map((tecnology) => (
                <div key={tecnology.id} className='flex flex-col items-center gap-1'>
                    {/* <span className="text-red-500 font-bold">#</span>
                    <span>{tecnology.name}</span> */}
                    <span className='relative w-11 h-11 sm:w-16 sm:h-16 rounded-xl overflow-hidden'>
                        <Image  src={tecnology.image} alt={tecnology.name} fill className='object-contain' />
                    </span>
                    <span className='text-[10px] text-zinc-400 text-sm font-semibold'>{tecnology.name}</span>
                </div>
            ))}
        </div>
    ) : null;
}
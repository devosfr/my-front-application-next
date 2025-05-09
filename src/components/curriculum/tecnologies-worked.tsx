import { Technology } from '@/types/technology';

export interface TechnologiesWorkedProps {
    technologies: Technology[];
}

export default function TechnologiesWorked(props: TechnologiesWorkedProps) {
    
    return props.technologies ? (
        <div className='flex justify-center items-center p-6 w-full lg:w-72 text-white-600 bg-black bordr border-zinc-800 rounded-2xl'>
            <div className='flex justify-center gap-x-3 flex-wrap'>
                {props.technologies.map((tecnology) => (
                    <div key={tecnology.id}>
                        <span className="text-red-500 font-bold">#</span>
                        <span>{tecnology.name}</span>
                    </div>
                ))}
            </div>
        </div>
    ) : null;
}
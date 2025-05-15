import { Project } from '@/types/project';
import ProjectItem from './projectItem';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';


export interface ProjectsProps {
    title: string,
    value: Project[];
}

export default function Technologies(props: ProjectsProps) {
    
    return props.value ? (
        <div className='flex flex-col justify-center items-center sm:items-start gap-4 flex-wrap w-7/10 md:w-11/12 xl:w-full'>
            <h3 className='text-2xl font-bold text-zinc-600 dark:text-white/70'>{props.title}</h3>
            <Carousel opts={{
                align: 'center',
                loop: true
                
            }}
           className='w-full'
           >
                <CarouselContent className='flex'>
                 {props.value.map((project) => (
                    <CarouselItem key={project.id} className='md:basis-1/2 lg:basis-1/3 xl:basis-1/4'>
                            <ProjectItem key={project.id} project={project} />
                        {/* <div className='flex flex-col items-center gap-1'>
                        </div> */}
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />    
            </Carousel>
         
        </div>
    ) : null;
}
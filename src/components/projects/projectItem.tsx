import { Project } from '@/types/project';
import Image from 'next/image';
import Link from 'next/link';

export interface ProjectItemProps {
    project: Project;
}

export default function ProjectItem(props: ProjectItemProps) {
  return <div>
    <Link href={props.project.link} target='_blank'>
    <div className='relative rouded-2x1 overflow-hidden border border-zinc-800  min-x-64 h-20'>
        <Image src={props.project.image} alt={props.project.name} layout="fill" />
    </div>
    </Link>
    <span className='text-zinc-600 dark:text-zinc-200'>{props.project.name}</span>
    </div>
}
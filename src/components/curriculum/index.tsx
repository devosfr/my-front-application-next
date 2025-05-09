// import { Technology } from '@/types/technology';
import TechnologiesWorked from './tecnologies-worked';

export interface CurriculumProps {
    technologies: {
        id: number;
        name: string;
        emphasis: boolean;
        image: string
    }[];
}

export default function Curriculum(props: CurriculumProps) {
    return (
        <div>
            <TechnologiesWorked technologies={props.technologies} />
            {/* <h1>Curriculum {props.technologies[0].id}</h1> */}
        </div>
    )
}
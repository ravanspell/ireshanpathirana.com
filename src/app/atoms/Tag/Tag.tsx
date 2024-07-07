/**
 * Tag component
 */
import Typography from "../Typography/Typography";

export interface TagProps {
    id?: string
    label: string
}

const Tag = (props: TagProps) => {
    const { label, id = '' } = props;
    const tagId = id || `${label.toLowerCase().split(' ').join('-')}`;
    return (
        <div id={tagId} className="bg-onyx w-max px-3 py-1 flex items-center rounded-full">
            <Typography
                className="text-xs text-orange-yellow-crayola"
                id={`${tagId}-tag-label`}
                text={label}
                type=""
            />
        </div>
    );
}

export default Tag;
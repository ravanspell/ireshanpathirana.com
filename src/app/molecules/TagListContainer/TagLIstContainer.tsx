import Tag from "@/app/atoms/Tag/Tag";

export interface IIconProps {
    areaLabel: string
    tagLabels: string[]
}

const TagListContainer = (props: IIconProps) => {
    const { areaLabel, tagLabels } = props;
    const listId = `${areaLabel.toLowerCase().split(' ').join('-')}`;
    return (
        <ul id={listId} className="mt-2 flex flex-wrap" aria-label={areaLabel}>
            {tagLabels.map((label) => (
                <li className="mr-1.5 mt-2">
                    <Tag label={label} />
                </li>
            ))}
        </ul>
    );
}

export default TagListContainer;
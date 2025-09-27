import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '@atoms/Card/Card';
import Typography from '@atoms/Typography/Typography';
import TagListContainer from '@molecules/TagListContainer/TagLIstContainer';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export interface ExperienceCardProps {
  /**
   * text content of the card
   */
  date: string;
  /**
   * id of the article card
   * and act as the ey of the root element
   */
  id: string;
  /**
   * Used technology tag labels
   */
  technologiesTagLabels: string[];
  companyName: string;
  designation: string;
  shortDescription: string;
}

const ExperienceCard = (props: ExperienceCardProps) => {
  const { date, id, technologiesTagLabels, companyName, shortDescription, designation } = props;
  return (
    <Card id={`experience-card-${id}`}>
      <article
        key={`${id}-key`}
        id={id}
        className="grid grid-flow-row sm:grid-flow-col gap-x-10 gap-y-2 group"
      >
        <span>{date}</span>
        <div className="flex flex-col gap-y-2 ">
          <h1 className="text-xl group-hover:text-orange-yellow-crayola transition-colors duration-300">
            {companyName}
            <FontAwesomeIcon
              className="text-sm ml-1 transition-transform -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1"
              icon={faArrowRight}
            />
          </h1>
          <h4 className="h4 timeline-item-title">{designation}</h4>
          <Typography id="experience-description-3" as="p" text={shortDescription} />
          <TagListContainer
            areaLabel={`technologies used in ${companyName}`}
            tagLabels={technologiesTagLabels}
          />
        </div>
      </article>
    </Card>
  );
};

export default ExperienceCard;

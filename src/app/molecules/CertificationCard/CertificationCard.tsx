import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '@atoms/Card/Card';
import Typography from '@atoms/Typography/Typography';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export interface CertificationCardProps {
  id: string;
  name: string;
  shortDescription: string;
  certificationBadge: string;
}

const CertificationCard = (props: CertificationCardProps) => {
  const { id, name, shortDescription, certificationBadge } = props;
  return (
    <Card id={`experience-card-${id}`}>
      <article
        key={`${id}-key`}
        id={id}
        className="grid grid-flow-row sm:grid-flow-col gap-x-10 gap-y-2 group"
      >
        <Image
          src={certificationBadge}
          alt="alt"
          width={90}
          height={90}
          className="grayscale-40 hover:grayscale-0 transition-grayscale duration-300"
        />
        <div className="flex flex-col gap-y-2 ">
          <h1 className="text-lg group-hover:text-orange-yellow-crayola transition-colors duration-300">
            {name}
            <FontAwesomeIcon
              className="text-sm ml-1 transition-transform -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1"
              icon={faArrowRight}
            />
          </h1>
          <Typography id="experience-description-3" as="p" text={shortDescription} />
        </div>
      </article>
    </Card>
  );
};

export default CertificationCard;

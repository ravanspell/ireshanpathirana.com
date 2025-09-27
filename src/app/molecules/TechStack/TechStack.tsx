import Card from '@atoms/Card/Card';
import Image from 'next/image';

export interface TechStackProps {
  /**
   * text content of the card
   */
  url: string;
  /**
   * id of the article card
   * and act as the ey of the root element
   */
  id: string;
}

const TechStack = (props: TechStackProps) => {
  const { id, url } = props;
  return (
    <Card id={id}>
      <Image width={50} height={50} src={url} alt="node js icon" />
    </Card>
  );
};

export default TechStack;

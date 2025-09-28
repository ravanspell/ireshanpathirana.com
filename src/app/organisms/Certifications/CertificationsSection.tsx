/**
 * Certifications section
 */
import { RefObject } from 'react';
import Section from '@molecules/Section/Section';
import CertificationCard from '@molecules/CertificationCard/CertificationCard';

type CertificationsSectionProps = {
  mainContentRef: RefObject<Record<string, HTMLElement>>;
};

const CertificationsSection = ({ mainContentRef }: CertificationsSectionProps) => {
  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Solutions Architect - Associate',
      shortDescription:
        'I earned this certification to validate my ability to design secure, scalable, and cost-effective systems on AWS. It reflects my strong knowledge of cloud architecture and AWS best practices.',
      certificationBadge: '/images/aws_solutions_architect_assoc_badge.png',
    },
    {
      id: 2,
      name: 'AWS Certified Developer - Associate',
      shortDescription:
        'This certification demonstrates my expertise in building, deploying, and maintaining applications on AWS. It highlights my skills in coding, debugging, and developing cloud-native solutions.',
      certificationBadge: '/images/aws_developer_assoc_badge.png',
    },
    {
      id: 3,
      name: 'Stripe Certified Developer - Professional',
      shortDescription:
        'I achieved this certification to showcase my advanced knowledge of Stripe’s payment solutions. It proves my proficiency in working with APIs, secure transactions, and creating optimized payment workflows.',
      certificationBadge: '/images/stripe_dev_prof_badge.png',
    },
  ];

  return (
    <Section id="certifications" headerText="Certifications" mainContentRef={mainContentRef}>
      <div className="not-last:mb-5">
        {certifications.map((certification) => {
          const id = certification.name.split(' ').join('-').toLowerCase();
          return (
            <CertificationCard
              key={`${id}-key`}
              id={id}
              name={certification.name}
              shortDescription={certification.shortDescription}
              certificationBadge={certification.certificationBadge}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default CertificationsSection;

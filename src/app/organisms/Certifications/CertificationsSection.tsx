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
        'I earned this certification to validate my ability to design secure, scalable, and cost-effective systems on AWS (Amazon Web Services). It reflects my strong knowledge of cloud architecture and AWS best practices.',
      certificationBadge: '/images/aws_solutions_architect_assoc_badge.png',
      credentialsLink:
        'https://www.credly.com/badges/ccff3010-ada6-4f34-9994-0aca65f08ae5/public_url',
    },
    {
      id: 2,
      name: 'AWS Certified Developer - Associate',
      shortDescription:
        'This certification demonstrates my expertise in building, deploying, and maintaining applications on AWS. It highlights my skills in coding, debugging, and developing cloud-native solutions.',
      certificationBadge: '/images/aws_developer_assoc_badge.png',
      credentialsLink:
        'https://www.credly.com/badges/da3c39e4-0e3a-4ada-8386-2824c1af203a/linked_in_profile',
    },
    {
      id: 3,
      name: 'Stripe Certified Developer - Professional',
      shortDescription:
        'I achieved this certification to showcase my advanced knowledge of Stripe’s payment solutions. It proves my proficiency in working with APIs, secure transactions, and creating optimized payment workflows.',
      certificationBadge: '/images/stripe_dev_prof_badge.png',
      credentialsLink:
        'https://stripecertifications.credential.net/6beca4c1-bfcb-41a4-af6f-c5aa7e09959b#acc.QZ2UxdrH',
    },
  ];

  return (
    <Section id="certifications" headerText="Certifications" mainContentRef={mainContentRef}>
      {certifications.map((certification) => {
        const id = certification.name.split(' ').join('-').toLowerCase();
        return (
          <div key={`${id}-key`} className="not-last:mb-5">
            <CertificationCard
              id={id}
              name={certification.name}
              shortDescription={certification.shortDescription}
              certificationBadge={certification.certificationBadge}
              credentialsLink={certification.credentialsLink}
            />
          </div>
        );
      })}
    </Section>
  );
};

export default CertificationsSection;

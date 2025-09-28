import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface LinkProps {
  href: string;
  name: string;
  children?: React.ReactNode;
  useGroup?: boolean; // toggle group hover styles
  external?: boolean; // true = external link, false = internal
}

const CustomLink = ({ href, name, children, useGroup = true, external = false }: LinkProps) => {
  const baseClasses = [
    'text-lg transition-colors duration-300',
    useGroup ? 'group-hover:text-orange-yellow-crayola' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const iconClasses = [
    'text-sm ml-1 transition-transform -rotate-45',
    useGroup ? 'group-hover:translate-x-1 group-hover:-translate-y-1' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Link
      href={href}
      target={external ? '_blank' : ''}
      className={baseClasses}
      rel="noreferrer noopener"
      aria-label={external ? `${name} (opens in a new tab)` : name}
    >
      {name}
      {external && <FontAwesomeIcon className={iconClasses} icon={faArrowRight} />}
      {children}
    </Link>
  );
};

export default CustomLink;

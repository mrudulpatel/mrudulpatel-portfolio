import React from 'react';

type Props = {
    heading: string;
}

const SectionHeading = (props: Props) => {
  return (
    <h2 className="text-3xl capitalize text-center font-medium mb-8">{props.heading}</h2>
  )
}

export default SectionHeading
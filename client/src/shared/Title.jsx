import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Title({
    title = "Chat",
    description = "This chat application is called TickTALK"
}) {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
}

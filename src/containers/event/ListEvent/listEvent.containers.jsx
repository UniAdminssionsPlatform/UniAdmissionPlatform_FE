import ListEventComponent from '../../../components/event/ListEvent/listEvent.component';
import React from 'react';

const people = [
  {
    id: 1,
    title: 'Tokyo Fashion Week Is Making Itself Great Again',
    image:
      'https://images.unsplash.com/photo-1617059063772-34532796cdb5?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60',
    liveStatus: true,
    createdate: '19/04/2022'
  },
  {
    id: 2,
    title: 'Traveling Tends to Magnify All Human Emotions',
    image:
      'https://images.unsplash.com/photo-1622987437805-5c6f7c2609d7?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60',
    liveStatus: true,
    createdate: '19/04/2022'
  },
  {
    id: 3,
    title: 'Interior Design: Hexagon is the New Circle in 2018',
    image:
      'https://images.unsplash.com/photo-1617201277988-f0efcc14e626?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60',
    liveStatus: false,
    createdate: '19/04/2022'
  },
  {
    id: 4,
    title: 'Heritage Museums & Gardens to Open with New Landscape',
    image:
      'https://images.unsplash.com/photo-1622960748096-1983e5f17824?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60',
    liveStatus: true,
    createdate: '19/04/2022'
  },
  {
    id: 5,
    title: 'Man agrees to complete $5,000 Hereford Inlet Lighthouse painting job',
    image:
      'https://images.unsplash.com/photo-1617202227468-7597afc7046d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60',
    liveStatus: false,
    createdate: '19/04/2022'
  },
  {
    id: 6,
    title: 'Denton Corker Marshall the mysterious black box is biennale pavilion',
    image:
      'https://images.unsplash.com/photo-1622978147823-33d5e241e976?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60',
    liveStatus: true,
    createdate: '19/04/2022'
  }
];

const ListEventContainer = () => (
  <>
    <ListEventComponent people={people} />
  </>
);

export default ListEventContainer;

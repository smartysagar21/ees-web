
import React from 'react';
import EventCard from './EventCard';
import Layout from '../../components/Layout';

const events = [
   
{
    
  id: 1,
  title: 'MATLINK',
  description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit accusamus consequuntur officiis nostrum, tempora explicabo doloribus optio eaque unde, omnis tempore velit alias recusandae distinctio quibusdam voluptate! Facere, sint!',
  image: 'https://media.gettyimages.com/id/864312572/photo/friends-celebrating-new-year-on-the-rooftop.jpg?s=612x612&w=0&k=20&c=yf2Hvb8MtJnQiOrVm9z68X_6l7yK8JG0IxQoQNGRb-s=', 
},
{
     
  id: 2,
  title: 'MATLINK',
  description: '. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit accusamus consequuntur officiis nostrum, tempora explicabo doloribus optio eaque unde, omnis tempore velit alias recusandae distinctio quibusdam voluptate! Facere, sint!',
  image: 'https://media.gettyimages.com/id/864312572/photo/friends-celebrating-new-year-on-the-rooftop.jpg?s=612x612&w=0&k=20&c=yf2Hvb8MtJnQiOrVm9z68X_6l7yK8JG0IxQoQNGRb-s=', 
},
{
     
  id: 3,
  title: 'MATLINK',
  description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit accusamus consequuntur officiis nostrum, tempora explicabo doloribus optio eaque unde, omnis tempore velit alias recusandae distinctio quibusdam voluptate! Facere, sint!.',
  image: 'https://media.gettyimages.com/id/864312572/photo/friends-celebrating-new-year-on-the-rooftop.jpg?s=612x612&w=0&k=20&c=yf2Hvb8MtJnQiOrVm9z68X_6l7yK8JG0IxQoQNGRb-s=',
},
{
     
  id: 4,
  title: 'MATLINK',
  description:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit accusamus consequuntur officiis nostrum, tempora explicabo doloribus optio eaque unde, omnis tempore velit alias recusandae distinctio quibusdam voluptate! Facere, sint!',
  image: 'https://media.gettyimages.com/id/864312572/photo/friends-celebrating-new-year-on-the-rooftop.jpg?s=612x612&w=0&k=20&c=yf2Hvb8MtJnQiOrVm9z68X_6l7yK8JG0IxQoQNGRb-s=', 
},
{
     
  id: 5,
  title: 'MATLINK',
  description: 'S Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit accusamus consequuntur officiis nostrum, tempora explicabo doloribus optio eaque unde, omnis tempore velit alias recusandae distinctio quibusdam voluptate! Facere, sint!..',
  image: 'https://media.gettyimages.com/id/864312572/photo/friends-celebrating-new-year-on-the-rooftop.jpg?s=612x612&w=0&k=20&c=yf2Hvb8MtJnQiOrVm9z68X_6l7yK8JG0IxQoQNGRb-s=', 
},
{
     
  id: 6,
  title: 'MATLINK',
  description: 'S Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit accusamus consequuntur officiis nostrum, tempora explicabo doloribus optio eaque unde, omnis tempore velit alias recusandae distinctio quibusdam voluptate! Facere, sint!..',
  image: 'https://media.gettyimages.com/id/864312572/photo/friends-celebrating-new-year-on-the-rooftop.jpg?s=612x612&w=0&k=20&c=yf2Hvb8MtJnQiOrVm9z68X_6l7yK8JG0IxQoQNGRb-s=', 
},
{
     
  id: 7,
  title: 'MATLINK',
  description: 'S Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit accusamus consequuntur officiis nostrum, tempora explicabo doloribus optio eaque unde, omnis tempore velit alias recusandae distinctio quibusdam voluptate! Facere, sint!..',
  image: 'https://media.gettyimages.com/id/864312572/photo/friends-celebrating-new-year-on-the-rooftop.jpg?s=612x612&w=0&k=20&c=yf2Hvb8MtJnQiOrVm9z68X_6l7yK8JG0IxQoQNGRb-s=', 
},
{
     
  id: 8,
  title: 'MATLINK',
  description: 'S Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit accusamus consequuntur officiis nostrum, tempora explicabo doloribus optio eaque unde, omnis tempore velit alias recusandae distinctio quibusdam voluptate! Facere, sint!..',
  image: 'https://media.gettyimages.com/id/864312572/photo/friends-celebrating-new-year-on-the-rooftop.jpg?s=612x612&w=0&k=20&c=yf2Hvb8MtJnQiOrVm9z68X_6l7yK8JG0IxQoQNGRb-s=', 
},

  
];


const Event = () => {
    return (
      <>
        <Layout>
        {/* <div className="container mt-16 mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Events</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3   ">
            {events.map(event => (
                <EventCard
                    key={event.id}
                    title={event.title}
                    description={event.description}
                    image={event.image}
                />
            ))}
        </div>
    </div> */}
      <div className="container pt-28 mx-auto px-4 py-8 bg-slate-100">
          <h1 className="text-3xl font-bold mb-12 text-center text-orange-600">Events</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mb-10 gap-6">
            {events.map(event => (
              <EventCard
                key={event.id}
                title={event.title}
                description={event.description}
                image={event.image}
              />
            ))}
          </div>
        </div>
    </Layout>
     </>
    );
}

export default Event;

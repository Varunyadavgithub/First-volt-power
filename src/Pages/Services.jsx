import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Substation Design & Engineering',
      description:
        'We offer complete substation design services, ensuring efficient power delivery and reliable operation.',
      icon: 'https://via.placeholder.com/50',
    },
    {
      title: 'Installation & Maintenance',
      description:
        'Expert installation and maintenance services to ensure long-lasting performance of your substation equipment.',
      icon: 'https://via.placeholder.com/50',
    },
    {
      title: 'Electrical Testing & Commissioning',
      description:
        'Our testing and commissioning services ensure that all systems are operating optimally and meet regulatory standards.',
      icon: 'https://via.placeholder.com/50',
    },
    {
      title: 'Power System Upgrades',
      description:
        'We offer upgrades and modernizations for existing substations to improve efficiency and handle increased loads.',
      icon: 'https://via.placeholder.com/50',
    },
    {
      title: 'Emergency Repairs & Troubleshooting',
      description:
        'Our rapid-response team is available 24/7 for emergency repairs, ensuring your operations continue with minimal downtime.',
      icon: 'https://via.placeholder.com/50',
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600">
            At <span className="font-semibold">First Volt Power</span>, we provide a comprehensive range of services to support all your electrical substation needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

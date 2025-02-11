import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServicesView = () => {
  const { serviceId } = useParams();



  const services = {
    'walima-receptions': {
      title: "Walima & Receptions",
      date: "March 2024",
      description:
        "The grand celebration marking the official reception—lavish and unforgettable.",
      images: [
        "https://images.unsplash.com/photo-1559333084-5ebcdbdf44b6?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1587486913042-c0b31b2f08b9?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1561043433-aaf687c4cf4b?auto=format&fit=crop&w=1000&q=80",
      ],
    },
    'barat-wedding': {
      title: "Barat Wedding Events",
      date: "February 2024",
      description:
        "A vibrant celebration of marriage traditions with rich cultural elements.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1593032465173-c2f9b1a6f55b?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1601043544355-9cf25e04a7f4?auto=format&fit=crop&w=1000&q=80",
      ],
    },
    'mehandi-dholki-shendi': {
      title: "Mehandi, Dholki's & Shendi's",
      date: "January 2024",
      description:
        "A colorful pre-wedding celebration filled with music, dance, and traditional henna.",
      images: [
        "https://images.unsplash.com/photo-1576765607924-226a0b5bb0ce?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1584036561584-b03c19da874c?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1589923188900-1e64d4f9f75f?auto=format&fit=crop&w=1000&q=80",
      ],
    },
    'nikkah-ceremony': {
      title: "Nikkah Ceremony",
      date: "December 2023",
      description:
        "A solemn and spiritual ceremony marking the union in a traditional setting.",
      images: [
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1556909213-946f9f6638e7?auto=format&fit=crop&w=1000&q=80",
      ],
    },
    'engagements': {
      title: "Engagements",
      date: "November 2023",
      description:
        "A romantic occasion celebrating the promise of a lifelong journey together.",
      images: [
        "https://images.unsplash.com/photo-1519340333755-65c6a81d3601?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1524646438238-49c101cd7e3a?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1514516873493-3c2acb3b47f0?auto=format&fit=crop&w=1000&q=80",
      ],
    },
    'qawali-nights': {
      title: "Qawali Nights",
      date: "January 2024",
      description:
        "An enchanting night of soulful qawali music and cultural celebration.",
      images: [
        "https://images.unsplash.com/photo-1576765607924-226a0b5bb0ce?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1584036561584-b03c19da874c?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1589923188900-1e64d4f9f75f?auto=format&fit=crop&w=1000&q=80",
      ],
    },
    'bridal-shower': {
      title: "Bridal Shower",
      date: "October 2023",
      description:
        "A joyful celebration honoring the bride-to-be with love and laughter.",
      images: [
        "https://images.unsplash.com/photo-1541031663013-8c271e2537b2?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1503342452485-86a5f1b8e7f6?auto=format&fit=crop&w=1000&q=80",
      ],
    },
    'birthday-celebrations': {
      title: "Birthday Celebrations",
      date: "September 2023",
      description:
        "Fun and festive gatherings to mark another year of life with style.",
      images: [
        "https://images.unsplash.com/photo-1524650359979-5a1615cb3e95?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=1000&q=80",
      ],
    },
    'wedding-anniversaries': {
      title: "Wedding Anniversaries",
      date: "August 2023",
      description:
        "A special day to celebrate enduring love and shared memories.",
      images: [
        "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1549921296-3a27d7d84b35?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1519802779558-3df1d3bcae36?auto=format&fit=crop&w=1000&q=80",
      ],
    },
    'valentine-dinners': {
      title: "Valentine Dinners",
      date: "February 2024",
      description:
        "An intimate and romantic dining experience celebrating love.",
      images: [
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1519400195379-993a150e4c7e?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
      ],
    },
  };




  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return (
      <div className="pt-20">
        <div className="container-custom py-20">
          <h1 className="text-3xl font-garamond text-golden">Service not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Service Header */}
      <section className="py-20 bg-golden/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl font-garamond text-golden mb-4">{service.title}</h1>
            <p className="text-golden-light mb-4">{service.date}</p>
            <p className="text-golden-dark/80">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-square overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={image}
                  alt={`${service.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesView;

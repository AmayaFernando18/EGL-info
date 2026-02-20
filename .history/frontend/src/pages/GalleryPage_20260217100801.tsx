import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop',
    title: 'Solar Farm Initiative',
    description: 'Our latest solar energy project powering thousands of homes',
    category: 'Solar Energy'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop',
    title: 'Wind Power Generation',
    description: 'State-of-the-art wind turbines generating clean energy',
    category: 'Wind Energy'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=800&auto=format&fit=crop',
    title: 'Hydro Electric Plant',
    description: 'Harnessing water power for sustainable electricity',
    category: 'Hydro Energy'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop',
    title: 'Control Room Operations',
    description: 'Our dedicated team monitoring power distribution 24/7',
    category: 'Operations'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=800&auto=format&fit=crop',
    title: 'Smart Grid Technology',
    description: 'Advanced monitoring systems for efficient power management',
    category: 'Technology'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1595398486084-541a0c3b1ed3?q=80&w=800&auto=format&fit=crop',
    title: 'Battery Storage Systems',
    description: 'Cutting-edge energy storage solutions',
    category: 'Technology'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop',
    title: 'Environmental Conservation',
    description: 'Protecting nature while generating clean energy',
    category: 'Environment'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop',
    title: 'Team Training Session',
    description: 'Continuous learning and development programs',
    category: 'Team'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800&auto=format&fit=crop',
    title: 'Solar Panel Installation',
    description: 'Expert installation of photovoltaic systems',
    category: 'Solar Energy'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop',
    title: 'Maintenance Operations',
    description: 'Regular maintenance ensuring optimal performance',
    category: 'Operations'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1422207049116-cfaf69531072?q=80&w=800&auto=format&fit=crop',
    title: 'Transmission Lines',
    description: 'Extensive network delivering power across the nation',
    category: 'Infrastructure'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800&auto=format&fit=crop',
    title: 'Community Outreach',
    description: 'Engaging with communities on sustainable energy',
    category: 'Community'
  }
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-secondary mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Our Energy Gallery
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A visual journey through our renewable energy projects, operations, and achievements. 
              Witness the power of sustainable energy generation.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-glow'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-soft'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative group rounded-xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 cursor-pointer bg-white"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                  <h3 className="text-white text-lg font-semibold mb-1">{image.title}</h3>
                  <p className="text-white/80 text-sm mb-3">{image.description}</p>
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <span>View Details</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div
            className="max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-80 md:h-full">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-primary text-white text-sm font-medium rounded-full shadow-lg">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-secondary mb-4">
                  {selectedImage.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {selectedImage.description}
                </p>
                <div className="space-y-3 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>EGL - Electricity Generation Lanka</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span>Renewable Energy Initiative</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

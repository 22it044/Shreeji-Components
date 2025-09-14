import { useParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface ProductDetailProps {
  title: string;
  description: string;
  lengthSize: string;
  typicalApplication: string;
  threads: string;
  material: string;
  finishAndCoating: string;
  imagePath?: string;
}

const productDetails: Record<string, ProductDetailProps> = {
  'brass-electrical-terminal-parts': {
    title: 'Brass switchgear switches contacts Terminal parts',
    description: 'High-quality brass electrical terminal parts for various applications.',
    lengthSize: 'Begins from M2 - 1\', any size as per customer\'s drawing & standard.',
    typicalApplication: 'Instrumentation, Telecommunications, and other Plastic Moulding Assembly.',
    threads: 'ISO Metric (MM Threads) BA, BSW (Inches), UNC, UNF or As per customer\'s drawing & standard.',
    material: 'Brass IS -319 - Type I Free Cutting Type II Brass Forz Material BS-218, Brass Metal Hard or as per customer\'s drawing & standard.',
    finishAndCoating: 'Natural, Tin, Silver, Gold, Crome, Nickle Plated or any coating as per customer\'s specification.',
    imagePath: '/images/product_page_images/brass-terminal-connectors.jpg'
  },
  'brass-cross-diamond-knurling-inserts': {
    title: 'Brass cross diamond knurling inserts',
    description: 'Precision-engineered brass cross diamond knurling inserts for industrial applications.',
    lengthSize: 'Begins from M2 - 1\' BSP or equivalent threads and up to any size as per customer\'s drawing & standard.',
    typicalApplication: 'Instrumentation, Telecommunications, and other Plastic Moulding Assembly.',
    threads: 'ISO Metric (MM Threads) BA, BSW (Inches), UNC, UNF or As per customer\'s drawing & standard.',
    material: 'Brass IS -319 - Type I Free Cutting Type II Brass Forz Material BS-218, Brass Sheet Metal Hard or as per customer\'s drawing & standard.',
    finishAndCoating: 'Natural, Tin, Silver, Gold, Crome, Nickle Plated or any coating as per customer\'s specification.',
    imagePath: '/images/product_page_images/Brass-Cross-Dimond-knurling-inserts.jpg'
  },
  'precise-knurling-inserts': {
    title: 'Precise Knurling Inserts',
    description: 'High-precision knurling inserts for various industrial applications.',
    lengthSize: 'Begins from M2 - 1\' BSP or equivalent threads and up to any size as per customer\'s drawing & standard.',
    typicalApplication: 'Instrumentation, Telecommunications, and other Plastic Moulding Assembly.',
    threads: 'ISO Metric (MM Threads) BA, BSW (Inches), UNC, UNF or As per customer\'s drawing & standard.',
    material: 'Brass IS -319 - Type I Free Cutting Type II Brass Forz Material BS-218, Brass Sheet Metal Hard or as per customer\'s drawing & standard.',
    finishAndCoating: 'Natural, Tin, Silver, Gold, Crome, Nickle Plated or any coating as per customer\'s specification.',
    imagePath: '/images/product_page_images/Precise-Knurling-Inserts.jpg'
  },
  'brass-hex-body': {
    title: 'Brass Hex Body',
    description: 'Durable brass hex body components for various industrial applications.',
    lengthSize: 'Begins from M2 - 1\' BSP or equivalent threads and up to any size as per customer\'s drawing & standard.',
    typicalApplication: 'Instrumentation, Telecommunications, and other Plastic Moulding Assembly.',
    threads: 'ISO Metric (MM Threads) BA, BSW (Inches), UNC, UNF or As per customer\'s drawing & standard.',
    material: 'Brass IS -319 - Type I Free Cutting Type II Brass Forz Material BS-218, Brass Sheet Metal Hard or as per customer\'s drawing & standard.',
    finishAndCoating: 'Natural, Tin, Silver, Gold, Crome, Nickle Plated or any coating as per customer\'s specification.',
    imagePath: '/images/product_page_images/Brass-hex-body.jpg'
  },
  'brass-special-hex-inserts': {
    title: 'Brass Special Hex Inserts',
    description: 'Specialized brass hex inserts for precision engineering applications.',
    lengthSize: 'Begins from M2 - 1\' BSP or equivalent threads and up to any size as per customer\'s drawing & standard.',
    typicalApplication: 'Instrumentation, Telecommunications, and other Plastic Moulding Assembly.',
    threads: 'ISO Metric (MM Threads) BA, BSW (Inches), UNC, UNF or As per customer\'s drawing & standard.',
    material: 'Brass IS -319 - Type I Free Cutting Type II Brass Forz Material BS-218, Brass Sheet Metal Hard or as per customer\'s drawing & standard.',
    finishAndCoating: 'Natural, Tin, Silver, Gold, Crome, Nickle Plated or any coating as per customer\'s specification.',
    imagePath: '/images/product_page_images/Brass-Special-Hex-Inserts.jpg'
  },
  'brass-nickel-plated-terminal': {
    title: 'Brass Nickel Plated Terminal',
    description: 'Corrosion-resistant nickel plated brass terminals for electrical applications.',
    lengthSize: 'Begins from M2 - 1\' BSP or equivalent threads and up to any size as per customer\'s drawing & standard.',
    typicalApplication: 'Instrumentation, Telecommunications, and other Plastic Moulding Assembly.',
    threads: 'ISO Metric (MM Threads) BA, BSW (Inches), UNC, UNF or As per customer\'s drawing & standard.',
    material: 'Brass IS -319 - Type I Free Cutting Type II Brass Forz Material BS-218, Brass Sheet Metal Hard or as per customer\'s drawing & standard.',
    finishAndCoating: 'Natural, Tin, Silver, Gold, Crome, Nickle Plated or any coating as per customer\'s specification.',
    imagePath: '/images/product_page_images/Brass-Nickel-Plated-Terminal.jpg'
  },
  'brass-forging-components': {
    title: 'Brass Forging Components',
    description: 'High-strength brass forging components for industrial applications.',
    lengthSize: 'Begins from M2 - 1\' BSP or equivalent threads and up to any size as per customer\'s drawing & standard.',
    typicalApplication: 'Instrumentation, Telecommunications, and other Plastic Moulding Assembly.',
    threads: 'ISO Metric (MM Threads) BA, BSW (Inches), UNC, UNF or As per customer\'s drawing & standard.',
    material: 'Brass IS -319 - Type I Free Cutting Type II Brass Forz Material BS-218, Brass Sheet Metal Hard or as per customer\'s drawing & standard.',
    finishAndCoating: 'Natural, Tin, Silver, Gold, Crome, Nickle Plated or any coating as per customer\'s specification.',
    imagePath: '/images/product_page_images/Brass-Forging-Components.jpg'
  },
  'brass-hex-critical-npt-thread': {
    title: 'Brass Hex Critical 1/8" NPT Thread',
    description: 'Precision-engineered brass hex components with critical NPT threading.',
    lengthSize: 'Begins from M2 - 1\' BSP or equivalent threads and up to any size as per customer\'s drawing & standard.',
    typicalApplication: 'Instrumentation, Telecommunications, and other Plastic Moulding Assembly.',
    threads: 'ISO Metric (MM Threads) BA, BSW (Inches), UNC, UNF or As per customer\'s drawing & standard.',
    material: 'Brass IS -319 - Type I Free Cutting Type II Brass Forz Material BS-218, Brass Sheet Metal Hard or as per customer\'s drawing & standard.',
    finishAndCoating: 'Natural, Tin, Silver, Gold, Crome, Nickle Plated or any coating as per customer\'s specification.',
    imagePath: '/images/product_page_images/Brass-Hex-Critical-NPT-Thread.jpg'
  },
  'brass-sensor-temperature-body': {
    title: 'Brass Sensor Temperature Body',
    description: 'Specialized brass components for temperature sensing applications with high thermal conductivity.',
    lengthSize: 'Begins from M2 - 1\' BSP or equivalent threads and up to any size as per customer\'s drawing & standard.',
    typicalApplication: 'Temperature sensors, HVAC systems, Instrumentation, and Industrial monitoring equipment.',
    threads: 'ISO Metric (MM Threads) BA, BSW (Inches), UNC, UNF or As per customer\'s drawing & standard.',
    material: 'Brass IS -319 - Type I Free Cutting Type II Brass Forz Material BS-218, Brass Sheet Metal Hard or as per customer\'s drawing & standard.',
    finishAndCoating: 'Natural, Tin, Silver, Gold, Chrome, Nickel Plated or any coating as per customer\'s specification.',
    imagePath: '/images/product_page_images/Brass-Sensor-Temperature-Body.jpg'
  },
  'brass-rivets': {
    title: 'Brass Rivets',
    description: 'Durable brass rivets for various fastening applications with excellent corrosion resistance.',
    lengthSize: 'Available in diameters from 1mm to 10mm and lengths from 2mm to 50mm, or custom sizes.',
    typicalApplication: 'Furniture assembly, Leather goods, Decorative applications, Marine equipment, and Electrical connections.',
    threads: 'Solid rivets, Semi-tubular rivets, Bifurcated rivets, or custom designs.',
    material: 'Brass IS -319 - Type I Free Cutting Type II Brass Forz Material BS-218, Brass Sheet Metal Hard or as per customer\'s drawing & standard.',
    finishAndCoating: 'Natural, Tin, Silver, Gold, Chrome, Nickel Plated or any coating as per customer\'s specification.',
    imagePath: '/images/product_page_images/Brass-Rivets.jpg'
  },
  'brass-pin-molding-inserts': {
    title: 'Brass Pin Molding Inserts',
    description: 'Precision brass pin molding inserts for plastic injection molding applications with superior heat transfer properties.',
    lengthSize: 'Custom sizes from 0.5mm to 50mm diameter with various pin configurations.',
    typicalApplication: 'Plastic injection molding, Die casting, Rubber molding, and Precision component manufacturing.',
    threads: 'Straight, Tapered, Stepped, or custom profile designs as per application requirements.',
    material: 'Brass IS -319 - Type I Free Cutting Type II Brass Forz Material BS-218, Brass Sheet Metal Hard or as per customer\'s drawing & standard.',
    finishAndCoating: 'Natural, Tin, Silver, Gold, Chrome, Nickel Plated or any coating as per customer\'s specification.',
    imagePath: '/images/product_page_images/Brass-Pin-Molding-Inserts.jpg'
  },
};

interface ProductDetailComponentProps {
  productId?: string;
}

const ProductDetail = ({ productId: propProductId }: ProductDetailComponentProps) => {
  const { productId: paramProductId } = useParams<{ productId: string }>();
  const productId = propProductId || paramProductId;
  const product = productId ? productDetails[productId] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-xl text-gray-600 mb-4">The requested product does not exist.</p>
          <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-bg">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Back to Products Button - Improved alignment */}
          <div className="flex justify-start mb-12">
            <Button 
              variant="outline" 
              className="flex items-center space-x-2 border-2 hover:border-primary transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
              onClick={() => {
                // Store the target section in sessionStorage before navigation
                sessionStorage.setItem('scrollTarget', 'products');
                // Navigate to the home page
                window.location.href = '/';
              }}
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Products</span>
            </Button>
          </div>

          {/* Product Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-royal-sapphire rounded-full"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 relative inline-block">
              <span className="text-royal-sapphire">{product.title}</span>
              <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-royal-sapphire/20 to-transparent rounded-full"></div>
            </h1>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
              {product.description}
            </p>
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-2 text-sm text-medium-gray bg-light-bg/70 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Premium Quality</span>
                <span className="mx-2">•</span>
                <span>Global Standards</span>
                <span className="mx-2">•</span>
                <span>Custom Manufacturing</span>
              </div>
            </div>
          </div>

          {/* Product Content - Changed to vertical layout */}
          <div className="flex flex-col gap-12 mb-16">
            {/* Related Products */}
            <div className="bg-white rounded-2xl p-8 shadow-elegant max-w-4xl mx-auto w-full">
              <div className="flex items-center mb-6">
                <div className="w-1 h-8 bg-royal-sapphire rounded-full mr-3"></div>
                <h2 className="text-2xl font-bold text-foreground">Other Products</h2>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {Object.entries(productDetails).map(([id, item]) => (
                  id !== productId && (
                    <Link 
                      key={id} 
                      to={`/products/${id}`} 
                      className="group bg-light-bg/50 rounded-lg p-3 hover:bg-light-bg transition-colors duration-300 flex flex-col items-center"
                    >
                      <div className="w-full h-24 overflow-hidden rounded-md mb-2">
                        <img 
                          src={item.imagePath || '/images/placeholder.jpg'} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <span className="text-xs text-center font-medium text-medium-gray group-hover:text-royal-sapphire transition-colors duration-300">
                        {item.title.length > 20 ? `${item.title.substring(0, 20)}...` : item.title}
                      </span>
                    </Link>
                  )
                ))}
              </div>
            </div>
            
            {/* Product Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-elegant group transform hover:scale-[1.02] transition-all duration-500 max-w-4xl mx-auto w-full">
              {product.imagePath ? (
                <div className="relative overflow-hidden">
                  <img 
                    src={product.imagePath} 
                    alt={product.title} 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ) : (
                <div className="bg-gray-200 w-full h-96 flex items-center justify-center">
                  <p className="text-gray-500">Image not available</p>
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-2xl p-8 shadow-elegant transform hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto w-full">
              <div className="flex items-center mb-6">
                <div className="w-1 h-8 bg-royal-sapphire rounded-full mr-3"></div>
                <h2 className="text-2xl font-bold text-foreground">Product Specifications</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-light-bg/50 p-4 rounded-lg hover:bg-light-bg transition-colors duration-300">
                  <h3 className="text-lg font-semibold text-royal-sapphire mb-2 flex items-center">
                    <span className="w-2 h-2 bg-royal-sapphire rounded-full mr-2"></span>
                    Length / Size:
                  </h3>
                  <p className="text-medium-gray pl-4">{product.lengthSize}</p>
                </div>
                
                <div className="bg-light-bg/50 p-4 rounded-lg hover:bg-light-bg transition-colors duration-300">
                  <h3 className="text-lg font-semibold text-royal-sapphire mb-2 flex items-center">
                    <span className="w-2 h-2 bg-royal-sapphire rounded-full mr-2"></span>
                    Typical Application:
                  </h3>
                  <p className="text-medium-gray pl-4">{product.typicalApplication}</p>
                </div>
                
                <div className="bg-light-bg/50 p-4 rounded-lg hover:bg-light-bg transition-colors duration-300">
                  <h3 className="text-lg font-semibold text-royal-sapphire mb-2 flex items-center">
                    <span className="w-2 h-2 bg-royal-sapphire rounded-full mr-2"></span>
                    Threads:
                  </h3>
                  <p className="text-medium-gray pl-4">{product.threads}</p>
                </div>
                
                <div className="bg-light-bg/50 p-4 rounded-lg hover:bg-light-bg transition-colors duration-300">
                  <h3 className="text-lg font-semibold text-royal-sapphire mb-2 flex items-center">
                    <span className="w-2 h-2 bg-royal-sapphire rounded-full mr-2"></span>
                    Material:
                  </h3>
                  <p className="text-medium-gray pl-4">{product.material}</p>
                </div>
                
                <div className="bg-light-bg/50 p-4 rounded-lg hover:bg-light-bg transition-colors duration-300">
                  <h3 className="text-lg font-semibold text-royal-sapphire mb-2 flex items-center">
                    <span className="w-2 h-2 bg-royal-sapphire rounded-full mr-2"></span>
                    Finish And Coating:
                  </h3>
                  <p className="text-medium-gray pl-4">{product.finishAndCoating}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 bg-gradient-to-r from-light-bg/50 to-transparent p-4 rounded-lg">
                <p className="text-medium-gray italic flex items-start">
                  <span className="text-royal-sapphire text-xl mr-2">★</span>
                  Exports Enquiry are Highly Solicited, with 100% Timely Shipment, With Fully Documents As Per the Exports Packaging Standards.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section - Improved styling */}
          <div className="bg-gradient-to-r from-background to-background/80 rounded-2xl p-8 shadow-elegant max-w-3xl mx-auto text-center transform hover:scale-[1.01] transition-all duration-300 border border-border-light/30">
            <div className="flex items-center justify-center mb-4">
              <div className="w-1 h-6 bg-royal-sapphire rounded-full mr-3"></div>
              <h3 className="text-2xl font-bold text-foreground">
                Need <span className="text-royal-sapphire">Custom Specifications</span>?
              </h3>
            </div>
            <p className="text-base md:text-lg text-medium-gray mb-6 max-w-2xl mx-auto">
              Our engineering team specializes in developing bespoke manufacturing solutions 
              tailored to your unique requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-hero shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-base px-6 py-3 h-auto"
                onClick={() => {
                  // Store the target section in sessionStorage before navigation
                  sessionStorage.setItem('scrollTarget', 'contact');
                  // Navigate to the home page
                  window.location.href = '/';
                }}
              >
                Request Custom Quote
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline border-2 hover:border-royal-sapphire transition-all duration-300 transform hover:-translate-y-1 text-base px-6 py-3 h-auto"
                onClick={() => {
                  // Store the target section in sessionStorage before navigation
                  sessionStorage.setItem('scrollTarget', 'downloads');
                  // Navigate to the home page
                  window.location.href = '/';
                }}
              >
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;